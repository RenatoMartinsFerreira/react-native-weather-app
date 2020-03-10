import {combineReducers} from 'redux';
import WeatherReducer from './weatherReducer';
import WeatherListReducer from './weatherListReducer';
import currentWeatherReducer from './currentWeatherReducer';

const rootReducer = combineReducers({
  weatherReducer: WeatherReducer,
  weatherListReducer: WeatherListReducer,
  currentWeatherReducer: currentWeatherReducer,
});

export default rootReducer;
