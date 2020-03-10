import {combineReducers} from 'redux';
import WeatherReducer from './weatherReducer';
import WeatherListReducer from './weatherListReducer';

const rootReducer = combineReducers({
  weatherReducer: WeatherReducer,
  weatherListReducer: WeatherListReducer,
});

export default rootReducer;
