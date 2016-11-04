import { createAction } from 'redux-actions';

export const foodTextChanged = createAction('FoodTextChanged', data => data);
export const postCreated = createAction('PostCreated');
