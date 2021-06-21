import request from '../utils/request';
export const getMoviesApi = (params = {start: 0, count: 15}) =>
  request(`/movies/hot?start=${params.start}&count=${params.count}`);
