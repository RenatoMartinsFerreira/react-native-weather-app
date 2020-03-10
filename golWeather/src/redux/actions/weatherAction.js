import {
  SAVE_WEATHER,
  SAVE_WEATHER_LIST,
  SET_WEATHER_LIST,
  ASYNC_SAVE_WEATHER,
  ASYNC_SAVE_WEATHER_LIST,
  ASYNC_SET_WEATHER,
} from './actionTypes';

export const saveWeather = payload => ({
  type: SAVE_WEATHER,
  payload,
});

export const asyncSaveWeather = payload => ({
  type: ASYNC_SAVE_WEATHER,
  payload,
});

export const saveWeatherList = payload => ({
  type: SAVE_WEATHER_LIST,
  payload,
});

export const asyncSaveWeatherList = payload => ({
  type: ASYNC_SAVE_WEATHER_LIST,
  payload,
});

export const asyncSetWeather = payload => ({
  type: ASYNC_SET_WEATHER,
  payload,
});

export const setWeather = payload => ({
  type: SET_WEATHER_LIST,
  payload,
});
