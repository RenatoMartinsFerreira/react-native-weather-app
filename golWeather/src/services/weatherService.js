import axios from 'axios';
import Config from 'react-native-config';

const searchCity = seatchString =>
  axios.get(
    `${Config.API_WEATHER_URL}/api/location/search/?query=${seatchString}`,
  );

const location = woeid =>
  axios.get(`${Config.API_WEATHER_URL}/api/location/${woeid}`);

export {searchCity, location};
