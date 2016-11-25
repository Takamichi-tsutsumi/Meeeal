import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import * as Actions from '../actions/PostFormActions';

const INITIAL_STATE = {
  imageSelected: false,
  data: Map({
    type: 0,
    date: new Date(),
    restaurant: '',
    food: '',
    genre: { name: '和食' },
    image: ''
  })
};

export const PostFormReducer = handleActions({
  [Actions.typeSwitched]: (state) => ({
    data: state.data.set('type', Number(!state.data.get('type')))
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

  [Actions.imageSelected]: (state, action) => ({
    data: state.data.set('image', action.payload),
    imageSelected: true
  }),

  [Actions.imageDeSelected]: (state, action) => ({
    data: state.data.set('image', action.payload),
    imageSelected: false
  }),

  [Actions.postCreated]: () => ({
    ...INITIAL_STATE
  })
}, INITIAL_STATE);
