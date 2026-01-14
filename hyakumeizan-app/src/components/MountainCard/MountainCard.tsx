import { Mountain, ClimbRecord } from '../../types';
import styles from './MountainCard.module.css';

interface MountainCardProps {
  mountain: Mountain;
  record: ClimbRecord | null;
  onClick: () => void;
}

export function MountainCard({ mountain, record, onClick }: MountainCardProps) {
  const isClimbed = record !== null;

  return (
    <div
      className={`${styles.card} ${isClimbed ? styles.climbed : ''}`}
      onClick={onClick}
    >
      <div className={styles.header}>
        <span className={styles.id}>#{mountain.id}</span>
        {isClimbed && <span className={styles.badge}>登頂</span>}
      </div>
      <h3 className={styles.name}>{mountain.name}</h3>
      <p className={styles.kana}>{mountain.nameKana}</p>
      <div className={styles.info}>
        <span className={styles.elevation}>{mountain.elevation.toLocaleString()}m</span>
        <span className={styles.region}>{mountain.region}</span>
      </div>
      <p className={styles.prefecture}>{mountain.prefecture.join('・')}</p>
      {record?.date && (
        <p className={styles.date}>
          {new Date(record.date).toLocaleDateString('ja-JP')}
        </p>
      )}
    </div>
  );
}
