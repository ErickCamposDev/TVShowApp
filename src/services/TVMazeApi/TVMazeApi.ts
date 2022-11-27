import Axios, { AxiosInstance } from 'axios';

class TVMazeApi {
  protected baseUrl: string = 'https://api.tvmaze.com/';
  private axios: AxiosInstance;
  private basePath: string;
  private static token?: string;

  constructor(basePath: string = '') {
    this.basePath = basePath;
    this.axios = Axios.create({
      baseURL: this.baseUrl,
      timeout: 120000,
      headers: { 'Cache-Control': 'no-cache' },
    });

    this.axios.interceptors.request.use(request => {
      // Add your params
      // E.g: request.headers['Authorization'] = `Bearer ${API.token}`
      if (TVMazeApi.token) {
        if (!request.params) {
          request.params = {};
        }
        request.params.access_token = TVMazeApi.token;
      }
      return request;
    });
  }

  static setToken = (token: string | undefined) => {
    TVMazeApi.token = token;
  };

  protected get = <T, R = {}>(path: string, data?: R) => {
    return this.axios.get<T>(this.basePath.concat(path), {
      params: data,
    });
  };

  protected post = <T, R = {}>(path: string, data?: R) => {
    return this.axios.post<T>(this.basePath.concat(path), data);
  };
}

export default TVMazeApi;
