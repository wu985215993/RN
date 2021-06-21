import {combineReducers} from 'redux';
import moviesReducer from './movies';
export default combineReducers({
  //key 数据切片的名字 value 管理改数据切片的reducer
  movies: moviesReducer,
});
