import { createAction } from 'redux-actions';

export const addPost = createAction('AddPost', data => data);
export const dataLoaded = createAction('DataLoaded', data => data);
