import { Statistics as StatsType } from '../../types';
import styles from './Statistics.module.css';

interface StatisticsProps {
  stats: StatsType;
}

export function Statistics({ stats }: StatisticsProps) {
  const maxYearCount = Math.max(...stats.byYear.map(y => y.count), 1);

  return (
    <div className={styles.container}>
      {/* 全体の達成状況 */}
      <div className={styles.overview}>
        <div className={styles.progressCircle}>
          <svg viewBox="0 0 100 100" className={styles.svg}>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4a7c43"
              strokeWidth="10"
              strokeDasharray={`${stats.percentage * 2.83} 283`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className={styles.progressText}>
            <span className={styles.percentage}>{stats.percentage}%</span>
            <span className={styles.fraction}>
              {stats.totalClimbed} / {stats.totalMountains}
            </span>
          </div>
        </div>
        <h2 className={styles.overviewTitle}>達成状況</h2>
      </div>

      {/* 地域別の状況 */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>地域別</h3>
        <div className={styles.regionList}>
          {stats.byRegion.map(({ region, climbed, total }) => (
            <div key={region} className={styles.regionItem}>
              <div className={styles.regionHeader}>
                <span className={styles.regionName}>{region}</span>
                <span className={styles.regionCount}>
                  {climbed} / {total}
                </span>
              </div>
              <div className={styles.regionBar}>
                <div
                  className={styles.regionProgress}
                  style={{ width: `${(climbed / total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 年別の登頂数 */}
      {stats.byYear.length > 0 && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>年別登頂数</h3>
          <div className={styles.yearChart}>
            {stats.byYear.map(({ year, count }) => (
              <div key={year} className={styles.yearItem}>
                <div className={styles.yearBarContainer}>
                  <div
                    className={styles.yearBar}
                    style={{ height: `${(count / maxYearCount) * 100}%` }}
                  >
                    <span className={styles.yearCount}>{count}</span>
                  </div>
                </div>
                <span className={styles.yearLabel}>{year}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {stats.totalClimbed === 0 && (
        <div className={styles.empty}>
          まだ登頂記録がありません。
          <br />
          一覧から山を選んで記録を始めましょう。
        </div>
      )}
    </div>
  );
}
