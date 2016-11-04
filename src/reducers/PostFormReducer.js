import { handleActions } from 'redux-actions';
import * as Actions from '../actions/PostFormActions';

const INITIAL_STATE = {
  foodText: ''
};

export const PostFormReducer = handleActions({
  [Actions.foodTextChanged]: (state, action) => ({
    ...state,
    foodText: action.payload
  })
}, INITIAL_STATE);
