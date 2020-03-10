import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
  Animated,
  Easing,
  Text,
} from 'react-native';
import {horizontalScale, verticalScale} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';
import MapView, {AnimatedRegion} from 'react-native-maps';

import {
  ResumedInfoComponent,
  MapViewComponent,
  FullInfoComponent,
} from 'golWeather/src/components/presentation';

import SearchBar from 'golWeather/src/components/presentation/searchBar';

class HomeScene extends Component {
  constructor(props) {
    super({...props});
    this.state = {
      loading: true,
      showInfo: false,
    };
    this.translateYValue = new Animated.Value(0);
  }
  switchInfo() {
    this.setState({showInfo: !this.state.showInfo});

    Animated.timing(this.translateYValue, {
      toValue: this.state.showInfo ? 0 : 1,
      duration: 1000,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start(() => {});
  }

  resumedInfo = () => {
    return (
      <ResumedInfoComponent
        title={this.props.currentWeather.title}
        icon={
          this.props.currentWeather.consolidated_weather[0].weather_state_abbr
        }
        onOpen={() => this.switchInfo()}
        temp={this.props.currentWeather.consolidated_weather[0].the_temp}
        date={new Date(this.props.currentWeather.time).toLocaleDateString()}
      />
    );
  };

  fullInfo = () => {
    return (
      <FullInfoComponent
        weatherList={this.props.currentWeather.consolidated_weather}
        onClose={() => this.switchInfo()}
      />
    );
  };

  render() {
    const infoModalTranslation = this.translateYValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        Dimensions.get('window').height * 0.7,
        Dimensions.get('window').height * 0.15,
      ],
    });

    const infoModalOpacity = this.translateYValue.interpolate({
      inputRange: [0, 0.4, 0.6, 1],
      outputRange: [1, 0, 0, 1],
    });
    return (
      <>
        <StatusBar backgroundColor="#FF5A00" barStyle="light-content" />
        <SafeAreaView style={styles.constainer}>
          <View style={styles.topContainer}>
            <SearchBar onSelect={searchText => this.OnSearch(searchText)} />
          </View>
          <Animated.View
            style={[
              styles.bottomContainer,
              {
                transform: [{translateY: infoModalTranslation}],
              },
            ]}>
            <Animated.View
              style={{
                flex: 1,
                alignSelf: 'stretch',
                opacity: infoModalOpacity,
              }}>
              {this.state.showInfo ? this.fullInfo() : this.resumedInfo()}
              {/* {this.resumedInfo()} */}
            </Animated.View>
          </Animated.View>

          <MapViewComponent
            latitude={parseFloat(
              this.props.currentWeather.latt_long.split(',')[0],
            )}
            longitude={parseFloat(
              this.props.currentWeather.latt_long.split(',')[1],
            )}
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
    // flex: 0.6,
    height: Dimensions.get('window').height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(20),
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
    transform: [{translateY: Dimensions.get('window').height * 0.7}],
    borderWidth: 1,
    borderColor: colors.awesomeOrange,
  },
});

export default HomeScene;
