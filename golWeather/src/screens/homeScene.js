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

import MapView from 'react-native-maps';

class HomeScene extends Component {
  constructor(props) {
    super({...props});
    this.state = {
      loading: true,
      city: '',
    };
    this.weatherService = new WeatherService();
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <StatusBar backgroundColor="#FF5A00" barStyle="light-content" />
        <SafeAreaView style={styles.constainer}>
          <View style={styles.topContainer}>
            <Text style={{backgroundColor: 'white'}}>SearchBar</Text>
          </View>
          <View style={styles.centerContainer} />
          <View style={styles.bottomContainer}>
            <View style={styles.visibleBottomContainer}>
              <Text>Bottom Content</Text>
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
  centerContainer: {
    flex: 0.5,
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
