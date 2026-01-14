import styles from './Header.module.css';

type Tab = 'list' | 'map' | 'stats';

interface HeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  climbedCount: number;
}

export function Header({ activeTab, onTabChange, climbedCount }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>百名山登頂記録</h1>
        <span className={styles.count}>{climbedCount} / 100 座</span>
      </div>
      <nav className={styles.nav}>
        <button
          className={`${styles.tab} ${activeTab === 'list' ? styles.active : ''}`}
          onClick={() => onTabChange('list')}
        >
          一覧
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'map' ? styles.active : ''}`}
          onClick={() => onTabChange('map')}
        >
          地図
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'stats' ? styles.active : ''}`}
          onClick={() => onTabChange('stats')}
        >
          統計
        </button>
      </nav>
    </header>
  );
}
