import { Mountain, ClimbRecord, FilterOptions } from '../../types';
import { MountainCard } from '../MountainCard/MountainCard';
import styles from './MountainList.module.css';

interface MountainListProps {
  mountains: Mountain[];
  records: Record<number, ClimbRecord>;
  filters: FilterOptions;
  onSelect: (mountain: Mountain) => void;
}

export function MountainList({ mountains, records, filters, onSelect }: MountainListProps) {
  // フィルタリング
  const filteredMountains = mountains.filter(mountain => {
    // テキスト検索
    if (filters.searchText) {
      const search = filters.searchText.toLowerCase();
      if (
        !mountain.name.toLowerCase().includes(search) &&
        !mountain.nameKana.toLowerCase().includes(search)
      ) {
        return false;
      }
    }

    // 地域フィルタ
    if (filters.regions.length > 0 && !filters.regions.includes(mountain.region)) {
      return false;
    }

    // 標高フィルタ
    if (filters.elevationMin && mountain.elevation < filters.elevationMin) {
      return false;
    }
    if (filters.elevationMax && mountain.elevation > filters.elevationMax) {
      return false;
    }

    // 登頂状況フィルタ
    const isClimbed = mountain.id in records;
    if (filters.climbedStatus === 'climbed' && !isClimbed) {
      return false;
    }
    if (filters.climbedStatus === 'not-climbed' && isClimbed) {
      return false;
    }

    return true;
  });

  return (
    <div className={styles.container}>
      <div className={styles.summary}>
        {filteredMountains.length} 座を表示
      </div>
      <div className={styles.grid}>
        {filteredMountains.map(mountain => (
          <MountainCard
            key={mountain.id}
            mountain={mountain}
            record={records[mountain.id] || null}
            onClick={() => onSelect(mountain)}
          />
        ))}
      </div>
      {filteredMountains.length === 0 && (
        <div className={styles.empty}>
          条件に一致する山がありません
        </div>
      )}
    </div>
  );
}
