import {
  SAVE_WEATHER,
  ASYNC_SAVE_WEATHER,
  SAVE_WEATHER_LIST,
  ASYNC_SET_WEATHER,
  SET_WEATHER,
  ASYNC_SAVE_WEATHER_LIST,
} from '../actions/actionTypes';
import {takeEvery, takeLatest, put, all, call} from 'redux-saga/effects';
import {searchCity, location} from 'golWeather/src/services/weatherService';

function* asyncSaveWeather(action) {
  yield put({type: SAVE_WEATHER, payload: action.payload});
}

function* asyncSaveWeatherList(action) {
  try {
    const response = yield call(searchCity, action.payload);
    const data = response.data;

    yield put({type: SAVE_WEATHER_LIST, payload: data});
  } catch (error) {
    yield put({type: SAVE_WEATHER_LIST, payload: {}});
  }
}

function* asyncSetWeather(action) {
  try {
    const response = yield call(location, action.payload);
    const data = response.data;
    yield put({type: SET_WEATHER, payload: data});
  } catch (error) {
    yield put({type: SET_WEATHER, payload: {}});
  }
}

export default function* root() {
  yield all([
    takeEvery(ASYNC_SAVE_WEATHER, asyncSaveWeather),
    takeEvery(ASYNC_SET_WEATHER, asyncSetWeather),
    takeLatest(ASYNC_SAVE_WEATHER_LIST, asyncSaveWeatherList),
  ]);
}
