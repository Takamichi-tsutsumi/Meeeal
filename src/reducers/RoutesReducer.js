import { handleActions } from 'redux-actions';
import { ActionConst } from 'react-native-router-flux';

const INITIAL_STATE = {
  scene: {}
};

export const RoutesReducer = handleActions({
  [ActionConst.FOCUS]: (state, action) => ({
    ...state,
    scene: action.scene
  })

}, INITIAL_STATE);
