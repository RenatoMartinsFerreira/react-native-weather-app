import {SAVE_WEATHER, ASYNC_SAVE_WEATHER} from '../actions/actionTypes';
import {takeEvery, put, all} from 'redux-saga/effects';

function* asyncSaveWeather(action) {
  yield put({type: SAVE_WEATHER, payload: {teste: action.payload}});
}

export default function* root() {
  yield all([takeEvery(ASYNC_SAVE_WEATHER, asyncSaveWeather)]);
}
