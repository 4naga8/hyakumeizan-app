import { useState, useEffect, useCallback } from 'react';
import { ClimbRecord, Photo, Statistics, Region } from '../types';
import { recordsStorage, photosStorage, fileToBase64, generateId } from '../utils/storage';
import { mountains } from '../data/mountains';

export function useRecords() {
  const [records, setRecords] = useState<Record<number, ClimbRecord>>({});
  const [loading, setLoading] = useState(true);

  // 初期ロード
  useEffect(() => {
    setRecords(recordsStorage.getAll());
    setLoading(false);
  }, []);

  // 登頂記録を保存
  const saveRecord = useCallback(async (
    mountainId: number,
    date: string,
    memo: string,
    newPhotos: File[]
  ) => {
    const existingRecord = records[mountainId];
    const now = new Date().toISOString();

    // 新しい写真を保存
    const photoIds: string[] = existingRecord?.photoIds || [];
    for (const file of newPhotos) {
      const id = generateId();
      const base64 = await fileToBase64(file);
      const photo: Photo = {
        id,
        mountainId,
        data: base64,
        createdAt: now,
      };
      await photosStorage.save(photo);
      photoIds.push(id);
    }

    const record: ClimbRecord = {
      mountainId,
      date,
      memo,
      photoIds,
      createdAt: existingRecord?.createdAt || now,
      updatedAt: now,
    };

    recordsStorage.save(record);
    setRecords(prev => ({ ...prev, [mountainId]: record }));
  }, [records]);

  // 登頂記録を削除
  const deleteRecord = useCallback(async (mountainId: number) => {
    await photosStorage.deleteByMountainId(mountainId);
    recordsStorage.delete(mountainId);
    setRecords(prev => {
      const next = { ...prev };
      delete next[mountainId];
      return next;
    });
  }, []);

  // 写真を削除
  const deletePhoto = useCallback(async (mountainId: number, photoId: string) => {
    await photosStorage.delete(photoId);
    const record = records[mountainId];
    if (record) {
      const updatedRecord = {
        ...record,
        photoIds: record.photoIds.filter(id => id !== photoId),
        updatedAt: new Date().toISOString(),
      };
      recordsStorage.save(updatedRecord);
      setRecords(prev => ({ ...prev, [mountainId]: updatedRecord }));
    }
  }, [records]);

  // 山が登頂済みかどうか
  const isClimbed = useCallback((mountainId: number) => {
    return mountainId in records;
  }, [records]);

  // 統計データを計算
  const getStatistics = useCallback((): Statistics => {
    const climbedIds = Object.keys(records).map(Number);
    const totalClimbed = climbedIds.length;

    // 地域別の統計
    const regionStats: Record<Region, { climbed: number; total: number }> = {} as Record<Region, { climbed: number; total: number }>;
    mountains.forEach(m => {
      if (!regionStats[m.region]) {
        regionStats[m.region] = { climbed: 0, total: 0 };
      }
      regionStats[m.region].total++;
      if (climbedIds.includes(m.id)) {
        regionStats[m.region].climbed++;
      }
    });

    const byRegion = Object.entries(regionStats).map(([region, stats]) => ({
      region: region as Region,
      ...stats,
    }));

    // 年別の統計
    const yearCounts: Record<number, number> = {};
    Object.values(records).forEach(record => {
      const year = new Date(record.date).getFullYear();
      yearCounts[year] = (yearCounts[year] || 0) + 1;
    });

    const byYear = Object.entries(yearCounts)
      .map(([year, count]) => ({ year: Number(year), count }))
      .sort((a, b) => a.year - b.year);

    return {
      totalClimbed,
      totalMountains: 100,
      percentage: Math.round((totalClimbed / 100) * 100),
      byRegion,
      byYear,
    };
  }, [records]);

  return {
    records,
    loading,
    saveRecord,
    deleteRecord,
    deletePhoto,
    isClimbed,
    getStatistics,
  };
}
