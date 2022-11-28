import { Serie } from '~/services/TVMazeApi/types/Serie';

export interface ActionMap<T> {
  id: number;
  value: T;
}

export interface TVSerieState {
  series: Serie[];
}
