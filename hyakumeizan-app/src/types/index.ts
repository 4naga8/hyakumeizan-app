// 百名山データの型定義
export interface Mountain {
  id: number;
  name: string;
  nameKana: string;
  elevation: number;
  prefecture: string[];
  region: Region;
  lat: number;
  lng: number;
}

// 地域分類
export type Region =
  | '北海道'
  | '東北'
  | '北関東'
  | '上信越'
  | '北アルプス'
  | '中央アルプス'
  | '南アルプス'
  | '八ヶ岳周辺'
  | '関東周辺'
  | '中部'
  | '近畿'
  | '中国・四国'
  | '九州';

// 登頂記録の型定義
export interface ClimbRecord {
  mountainId: number;
  date: string;
  memo: string;
  photoIds: string[];
  createdAt: string;
  updatedAt: string;
}

// 写真データの型定義
export interface Photo {
  id: string;
  mountainId: number;
  data: string; // Base64
  createdAt: string;
}

// フィルタ条件
export interface FilterOptions {
  searchText: string;
  regions: Region[];
  elevationMin: number | null;
  elevationMax: number | null;
  climbedStatus: 'all' | 'climbed' | 'not-climbed';
}

// 統計データ
export interface Statistics {
  totalClimbed: number;
  totalMountains: number;
  percentage: number;
  byRegion: { region: Region; climbed: number; total: number }[];
  byYear: { year: number; count: number }[];
}
