import { FilterOptions, Region } from '../../types';
import { regions } from '../../data/mountains';
import styles from './SearchFilter.module.css';

interface SearchFilterProps {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
}

export function SearchFilter({ filters, onChange }: SearchFilterProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, searchText: e.target.value });
  };

  const handleRegionChange = (region: Region) => {
    const newRegions = filters.regions.includes(region)
      ? filters.regions.filter(r => r !== region)
      : [...filters.regions, region];
    onChange({ ...filters, regions: newRegions });
  };

  const handleStatusChange = (status: FilterOptions['climbedStatus']) => {
    onChange({ ...filters, climbedStatus: status });
  };

  const clearFilters = () => {
    onChange({
      searchText: '',
      regions: [],
      elevationMin: null,
      elevationMax: null,
      climbedStatus: 'all',
    });
  };

  const hasActiveFilters =
    filters.searchText ||
    filters.regions.length > 0 ||
    filters.climbedStatus !== 'all';

  return (
    <div className={styles.container}>
      <div className={styles.searchRow}>
        <input
          type="text"
          placeholder="山名で検索..."
          value={filters.searchText}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        {hasActiveFilters && (
          <button onClick={clearFilters} className={styles.clearButton}>
            クリア
          </button>
        )}
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>登頂状況:</label>
        <div className={styles.statusButtons}>
          <button
            className={`${styles.statusButton} ${filters.climbedStatus === 'all' ? styles.active : ''}`}
            onClick={() => handleStatusChange('all')}
          >
            すべて
          </button>
          <button
            className={`${styles.statusButton} ${filters.climbedStatus === 'climbed' ? styles.active : ''}`}
            onClick={() => handleStatusChange('climbed')}
          >
            登頂済み
          </button>
          <button
            className={`${styles.statusButton} ${filters.climbedStatus === 'not-climbed' ? styles.active : ''}`}
            onClick={() => handleStatusChange('not-climbed')}
          >
            未登頂
          </button>
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>地域:</label>
        <div className={styles.regionTags}>
          {regions.map(region => (
            <button
              key={region}
              className={`${styles.regionTag} ${filters.regions.includes(region) ? styles.active : ''}`}
              onClick={() => handleRegionChange(region)}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
