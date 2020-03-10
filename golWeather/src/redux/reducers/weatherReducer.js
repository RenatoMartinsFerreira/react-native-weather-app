import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  weather: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SAVE_WEATHER:
      return action.payload;
    default:
      return state;
  }
};
