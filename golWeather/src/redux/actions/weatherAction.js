import {SAVE_WEATHER, ASYNC_SAVE_WEATHER} from './actionTypes';

export const saveWeather = payload => ({
  type: SAVE_WEATHER,
  payload,
});

export const asyncSaveWeather = payload => ({
  type: ASYNC_SAVE_WEATHER,
  payload,
});
