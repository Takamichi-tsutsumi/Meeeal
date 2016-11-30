import { handleActions } from 'redux-actions';
import { List } from 'immutable';
import * as Actions from '../actions/PostListActions';

const INITIAL_STATE = {
  items: List()
};

export const PostListReducer = handleActions({
  [Actions.addPost]: (state, action) => ({
    items: state.items.unshift(action.payload)
  }),

  [Actions.dataLoaded]: (state, action) => ({
    items: List(action.payload)
  })

}, INITIAL_STATE);
