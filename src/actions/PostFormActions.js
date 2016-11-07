import { createAction } from 'redux-actions';

export const typeSwitched = createAction('TypeSwitched');
export const dateChanged = createAction('DateChanged', data => data);
export const foodTextChanged = createAction('FoodTextChanged', data => data);
export const restaurantTextChanged = createAction('RestaurantTextChanged', data => data);
export const genreTextChanged = createAction('GenreTextChanged', data => data);
export const postCreated = createAction('PostCreated');
