import TVMazeApi from '../TVMazeApi';
import {
  SearchByQueryRequest,
  SearchByQueryResponse,
  SearchPeopleByQueryResponse,
} from '../types/Search';

class Search extends TVMazeApi {
  constructor() {
    super('/search');
  }

  private search = <T>(endpoint: string, query: string) => {
    return this.get<T[], SearchByQueryRequest>(endpoint, {
      q: query,
    });
  };

  getShowsByName = (query: string) => {
    return this.search<SearchByQueryResponse>('/shows', query);
  };

  getPeopleByName = (query: string) => {
    return this.search<SearchPeopleByQueryResponse>('/people', query);
  };
}

export default new Search();
