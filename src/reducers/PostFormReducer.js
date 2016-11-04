import { handleActions } from 'redux-actions';
import * as Actions from '../actions/PostFormActions';
import { EatOut, HomeMade } from '../models/Meal';

const INITIAL_STATE = {
  type: EatOut,
  food: '',
  price: 0,
  date: new Date(),
  comment: '',
  genre: { name: 'Wa' },
  place: ''
};

export const PostFormReducer = handleActions({
  [Actions.foodTextChanged]: (state, action) => ({
    ...state,
    food: action.payload
  }),
  [Actions.postCreated]: () => ({
    ...INITIAL_STATE
  })
}, INITIAL_STATE);
