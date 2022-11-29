import TVMazeApi from '../TVMazeApi';
import { SerieRequest, Serie as SerieType, Episode } from '../types/Serie';

class Serie extends TVMazeApi {
  constructor() {
    super('/shows');
  }

  getAllSeries = (page?: number) => {
    return this.get<SerieType[], SerieRequest>('', {
      page,
    });
  };

  getEpisodes = (showId: number) => {
    return this.get<Episode[]>(`/${showId}/episodes`);
  };
}

export default new Serie();
