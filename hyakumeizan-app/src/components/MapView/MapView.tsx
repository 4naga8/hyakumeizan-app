import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Mountain, ClimbRecord } from '../../types';
import styles from './MapView.module.css';

interface MapViewProps {
  mountains: Mountain[];
  records: Record<number, ClimbRecord>;
  onSelect: (mountain: Mountain) => void;
}

export function MapView({ mountains, records, onSelect }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // 日本の中心付近を初期位置に設定
    const map = L.map(mapRef.current).setView([36.5, 138.0], 6);
    mapInstanceRef.current = map;

    // OpenStreetMapタイルを追加
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // 地図のサイズを再計算
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // ウィンドウリサイズ時にも再計算
    const handleResize = () => {
      map.invalidateSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // 既存のマーカーを削除
    map.eachLayer(layer => {
      if (layer instanceof L.CircleMarker) {
        map.removeLayer(layer);
      }
    });

    // 百名山のマーカーを追加
    mountains.forEach(mountain => {
      const isClimbed = mountain.id in records;
      const record = records[mountain.id];

      const marker = L.circleMarker([mountain.lat, mountain.lng], {
        radius: 8,
        fillColor: isClimbed ? '#4a7c43' : '#999',
        color: isClimbed ? '#2d5a27' : '#666',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
      });

      const dateText = isClimbed && record.date
        ? new Date(record.date).toLocaleDateString('ja-JP')
        : null;

      const popupContent = `
        <div style="min-width: 150px;">
          <strong style="font-size: 14px;">${mountain.name}</strong>
          <div style="font-size: 12px; color: #666; margin: 4px 0;">
            ${mountain.elevation.toLocaleString()}m / ${mountain.region}
          </div>
          ${isClimbed ? `
            <div style="font-size: 12px; color: #4a7c43; font-weight: bold; margin-top: 8px;">
              ${dateText ? `登頂: ${dateText}` : '登頂済み'}
            </div>
          ` : `
            <div style="font-size: 12px; color: #999; margin-top: 8px;">
              未登頂
            </div>
          `}
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.on('click', () => {
        onSelect(mountain);
      });
      marker.addTo(map);
    });
  }, [mountains, records, onSelect]);

  return (
    <div className={styles.container}>
      <div ref={mapRef} className={styles.map} />
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.climbed}`} />
          <span>登頂済み</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.notClimbed}`} />
          <span>未登頂</span>
        </div>
      </div>
    </div>
  );
}
