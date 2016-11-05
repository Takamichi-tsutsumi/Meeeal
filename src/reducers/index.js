import { combineReducers } from 'redux';
import { PostFormReducer as postFormData } from './PostFormReducer';
import { RoutesReducer as routes } from './RoutesReducer';

export default combineReducers({
  routes,
  postFormData
});
