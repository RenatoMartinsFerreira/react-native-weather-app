import axios from 'axios';
import Config from 'react-native-config';

export default class WeatherService {
  searchCity = seatchString =>
    axios.get(
      `${Config.API_WEATHER_URL}/api/location/search/?query=${seatchString}`,
    );

  location = woeid =>
    axios.get(`${Config.API_WEATHER_URL}/api/location/${woeid}`);
}
