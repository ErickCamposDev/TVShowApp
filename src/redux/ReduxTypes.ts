import { Show } from '~/services/TVMazeApi/types/Search';

export interface ActionMap<T> {
  id: number;
  value: T;
}

export interface TVShowState {
  shows: Show[];
}
