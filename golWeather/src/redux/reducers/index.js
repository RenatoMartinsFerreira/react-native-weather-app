import {combineReducers} from 'redux';
import WeatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  weatherReducer: WeatherReducer,
});

export default rootReducer;
