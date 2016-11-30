import { combineReducers } from 'redux';
import { PostFormReducer as postFormData } from './PostFormReducer';
import { RoutesReducer as routes } from './RoutesReducer';
import { PostListReducer as postList } from './PostListReducer';

export default combineReducers({
  routes,
  postFormData,
  postList
});
