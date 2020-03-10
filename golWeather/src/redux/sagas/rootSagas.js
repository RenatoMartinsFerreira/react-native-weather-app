import {
  SAVE_WEATHER,
  ASYNC_SAVE_WEATHER,
  SAVE_WEATHER_LIST,
  ASYNC_SAVE_WEATHER_LIST,
} from '../actions/actionTypes';
import {takeEvery, takeLatest, put, all, call} from 'redux-saga/effects';
import {searchCity} from 'golWeather/src/services/weatherService';

function* asyncSaveWeather(action) {
  yield put({type: SAVE_WEATHER, payload: action.payload});
}

function* asyncSaveWeatherList(action) {
  try {
    const response = yield call(searchCity, action.payload);
    const prp = response.data;

    yield put({type: SAVE_WEATHER_LIST, payload: prp});
  } catch (error) {
    yield put({type: SAVE_WEATHER_LIST, payload: {}});
  }
}

export default function* root() {
  yield all([
    takeEvery(ASYNC_SAVE_WEATHER, asyncSaveWeather),
    takeLatest(ASYNC_SAVE_WEATHER_LIST, asyncSaveWeatherList),
  ]);
}
