import { useState, useEffect, useRef } from 'react';
import { Mountain, ClimbRecord, Photo } from '../../types';
import { photosStorage } from '../../utils/storage';
import styles from './MountainDetail.module.css';

interface MountainDetailProps {
  mountain: Mountain;
  record: ClimbRecord | null;
  onSave: (mountainId: number, date: string, memo: string, photos: File[]) => Promise<void>;
  onDelete: (mountainId: number) => Promise<void>;
  onDeletePhoto: (mountainId: number, photoId: string) => Promise<void>;
  onClose: () => void;
}

export function MountainDetail({
  mountain,
  record,
  onSave,
  onDelete,
  onDeletePhoto,
  onClose,
}: MountainDetailProps) {
  const [date, setDate] = useState(record?.date || '');
  const [memo, setMemo] = useState(record?.memo || '');
  const [newPhotos, setNewPhotos] = useState<File[]>([]);
  const [existingPhotos, setExistingPhotos] = useState<Photo[]>([]);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (record?.photoIds.length) {
      Promise.all(record.photoIds.map(id => photosStorage.get(id)))
        .then(photos => setExistingPhotos(photos.filter((p): p is Photo => p !== null)));
    }
  }, [record]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(mountain.id, date, memo, newPhotos);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (confirm('この登頂記録を削除しますか？')) {
      await onDelete(mountain.id);
      onClose();
    }
  };

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setNewPhotos(prev => [...prev, ...files]);
  };

  const removeNewPhoto = (index: number) => {
    setNewPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleDeleteExistingPhoto = async (photoId: string) => {
    if (confirm('この写真を削除しますか？')) {
      await onDeletePhoto(mountain.id, photoId);
      setExistingPhotos(prev => prev.filter(p => p.id !== photoId));
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.header}>
          <span className={styles.id}>#{mountain.id}</span>
          <h2 className={styles.name}>{mountain.name}</h2>
          <p className={styles.kana}>{mountain.nameKana}</p>
        </div>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.label}>標高</span>
            <span className={styles.value}>{mountain.elevation.toLocaleString()}m</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>地域</span>
            <span className={styles.value}>{mountain.region}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>所在地</span>
            <span className={styles.value}>{mountain.prefecture.join('・')}</span>
          </div>
        </div>

        <div className={styles.form}>
          <h3 className={styles.formTitle}>登頂記録</h3>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>登頂日（任意）</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className={styles.dateInput}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>メモ</label>
            <textarea
              value={memo}
              onChange={e => setMemo(e.target.value)}
              placeholder="天気、感想など..."
              className={styles.textarea}
              rows={4}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>写真</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoSelect}
              ref={fileInputRef}
              className={styles.fileInput}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={styles.photoButton}
            >
              写真を追加
            </button>

            {(existingPhotos.length > 0 || newPhotos.length > 0) && (
              <div className={styles.photoGrid}>
                {existingPhotos.map(photo => (
                  <div key={photo.id} className={styles.photoItem}>
                    <img src={photo.data} alt="" className={styles.photo} />
                    <button
                      className={styles.photoDelete}
                      onClick={() => handleDeleteExistingPhoto(photo.id)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
                {newPhotos.map((file, index) => (
                  <div key={index} className={styles.photoItem}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt=""
                      className={styles.photo}
                    />
                    <button
                      className={styles.photoDelete}
                      onClick={() => removeNewPhoto(index)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <button
            onClick={handleSave}
            disabled={saving}
            className={styles.saveButton}
          >
            {saving ? '保存中...' : record ? '更新する' : '登頂を記録'}
          </button>
          {record && (
            <button onClick={handleDelete} className={styles.deleteButton}>
              削除
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
