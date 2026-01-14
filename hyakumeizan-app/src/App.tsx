import { useState, useMemo } from 'react';
import { Mountain, FilterOptions } from './types';
import { mountains } from './data/mountains';
import { useRecords } from './hooks/useRecords';
import { Header } from './components/Header/Header';
import { SearchFilter } from './components/SearchFilter/SearchFilter';
import { MountainList } from './components/MountainList/MountainList';
import { MountainDetail } from './components/MountainDetail/MountainDetail';
import { MapView } from './components/MapView/MapView';
import { Statistics } from './components/Statistics/Statistics';
import './App.css';

type Tab = 'list' | 'map' | 'stats';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('list');
  const [selectedMountain, setSelectedMountain] = useState<Mountain | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    searchText: '',
    regions: [],
    elevationMin: null,
    elevationMax: null,
    climbedStatus: 'all',
  });

  const {
    records,
    loading,
    saveRecord,
    deleteRecord,
    deletePhoto,
    getStatistics,
  } = useRecords();

  const stats = useMemo(() => getStatistics(), [getStatistics]);

  if (loading) {
    return <div className="loading">読み込み中...</div>;
  }

  return (
    <div className="app">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        climbedCount={stats.totalClimbed}
      />

      {activeTab === 'list' && (
        <>
          <SearchFilter filters={filters} onChange={setFilters} />
          <MountainList
            mountains={mountains}
            records={records}
            filters={filters}
            onSelect={setSelectedMountain}
          />
        </>
      )}

      {activeTab === 'map' && (
        <MapView
          mountains={mountains}
          records={records}
          onSelect={setSelectedMountain}
        />
      )}

      {activeTab === 'stats' && <Statistics stats={stats} />}

      {selectedMountain && (
        <MountainDetail
          mountain={selectedMountain}
          record={records[selectedMountain.id] || null}
          onSave={saveRecord}
          onDelete={deleteRecord}
          onDeletePhoto={deletePhoto}
          onClose={() => setSelectedMountain(null)}
        />
      )}
    </div>
  );
}

export default App;
