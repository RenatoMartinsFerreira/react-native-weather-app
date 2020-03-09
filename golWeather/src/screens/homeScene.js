import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Dimensions,
} from 'react-native';
import WeatherService from 'golWeather/src/services/weatherService';
import Icon from 'golWeather/src/commons/icons';
import {fontScale} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';
import MapView from 'react-native-maps';

import {store} from 'golWeather/src/redux/store';
import {saveWeather} from 'golWeather/src/redux/actions';

class HomeScene extends Component {
  constructor(props) {
    super({...props});
    this.state = {
      loading: true,
      city: '',
      woeid: 44418,
    };
    this.weatherService = new WeatherService();

    console.log('this', this);
  }

  componentDidMount() {
    store.dispatch(saveWeather({weather: this.state.woeid}));
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="#FF5A00" barStyle="light-content" />
        <SafeAreaView style={styles.constainer}>
          <View style={styles.topContainer}>
            <Text style={{backgroundColor: 'white'}}>SearchBar</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.visibleBottomContainer}>
              <Text>Bottom Content</Text>
              <Icon
                name="hc"
                size={fontScale(24)}
                color={colors.awesomeOrange}
              />
            </View>
          </View>

          <MapView
            style={styles.mapContainer}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    zIndex: -1,
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  topContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    borderRadius: 14,
    alignSelf: 'stretch',
    position: 'absolute',
    transform: [{translateY: Dimensions.get('window').height * 0.8}],
  },
  visibleBottomContainer: {
    height: Dimensions.get('window').height * 0.2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScene;
