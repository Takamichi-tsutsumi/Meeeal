import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as Actions from '../actions/PostFormActions';
import { EatOut } from '../models/Meal';

const swapType = (x) => { return (x - 1) ^ 2; };
const INITIAL_STATE = {
  data: Map({
    type: EatOut,
    date: new Date(),
    restaurant: '',
    food: '',
    genre: { name: '和食' }
  })
};

export const PostFormReducer = handleActions({
  [Actions.typeSwitched]: (state) => ({
    data: state.data.set('type', swapType(state.data.type))
  }),

  [Actions.dateChanged]: (state, action) => ({
    data: state.data.set('date', action.payload)
  }),

  [Actions.foodTextChanged]: (state, action) => ({
    data: state.data.set('food', action.payload)
  }),

  [Actions.restaurantTextChanged]: (state, action) => ({
    data: state.data.set('restaurant', action.payload)
  }),

  [Actions.genreTextChanged]: (state, action) => ({
    data: state.data.set('genre', { name: action.payload })
  }),

  [Actions.postCreated]: () => ({
    ...INITIAL_STATE
  })
}, INITIAL_STATE);
