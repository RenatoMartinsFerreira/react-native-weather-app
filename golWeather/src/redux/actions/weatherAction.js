import {SAVE_WEATHER} from './actionTypes';

export const saveWeather = payload => ({
  type: SAVE_WEATHER,
  payload,
});
