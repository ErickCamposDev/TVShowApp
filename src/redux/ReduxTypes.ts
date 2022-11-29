import { Serie, Season } from '~/services/TVMazeApi/types/Serie';

export interface ActionMap<T> {
  id: number;
  value: T;
}

export interface TVSerieState {
  series: Serie[];
  selectedSerieSeasons: Season[];
}
export interface FavoriteState {
  favorites: Serie[];
}
export interface LoadingState {
  isLoading: boolean;
}
