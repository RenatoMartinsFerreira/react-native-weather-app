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
import Icon from 'golWeather/src/commons/icons';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';
import MapView from 'react-native-maps';

import {store} from 'golWeather/src/redux/store';
import {
  asyncSaveWeather,
  asyncSaveWeatherList,
} from 'golWeather/src/redux/actions';

import {
  GenericButton,
  GenericTextComponent,
  IconTextComponent,
} from 'golWeather/src/components/presentation';


import SearchBar from 'golWeather/src/components/presentation/searchBar';

import {TouchableOpacity} from 'react-native-gesture-handler';

class HomeScene extends Component {
  constructor(props) {
    super({...props});
    this.state = {
      loading: true,
      showInfo: false,
      searchString: '',
      woeid: 44418,
    };
    this.translateYValue = new Animated.Value(0);
  }

  componentDidMount() {
    // store.dispatch(asyncSaveWeather({weather: this.state.woeid}));
  }

  openInfo() {
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
      <View style={styles.visibleBottomContainer}>
        <TouchableOpacity
          onPress={() => {
            this.openInfo();
          }}
          style={styles.verticalLine}>
          <Icon
            name="arrow_down"
            size={fontScale(18)}
            color={colors.awesomeOrange}
          />
        </TouchableOpacity>

        <View style={styles.verticalLine}>
          <GenericTextComponent text={'São Paulo'} />

          <Icon
            name={'favorite'}
            color={colors.awesomeOrange}
            size={fontScale(34)}
          />
        </View>
        <View style={styles.verticalLine}>
          <IconTextComponent
            icon="hc"
            iconColor={colors.lightOrange}
            text="08/03/2020"
          />
          <GenericTextComponent text={'24ºC'} />
          <GenericTextComponent text={'teste'} />
          {/* <GenericTextComponent text={this.props.storeWeather.teste} /> */}
        </View>
        <GenericButton text={'Atualizar previsão'} />
      </View>
    );
  };

  fullInfo = () => {
    return (
      <View style={{flex: 1}}>
        <Text>full Info</Text>
      </View>
    );
  };

  OnSearch = searchText => {
    console.log('teste', searchText);

    // store.dispatch(asyncSaveWeatherList({weather: this.state.woeid}));
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
              {/* {this.state.showInfo ? this.fullInfo() : this.resumedInfo()} */}
              {this.resumedInfo()}
            </Animated.View>
          </Animated.View>

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
  verticalLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    paddingHorizontal: horizontalScale(50),
    alignItems: 'center',
  },
  visibleBottomContainer: {
    height: Dimensions.get('window').height * 0.3,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default HomeScene;
