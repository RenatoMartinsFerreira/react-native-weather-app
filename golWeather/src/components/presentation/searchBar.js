import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux'; /* code change */
import {
  horizontalScale,
  fontScale,
  verticalScale,
} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';
import Icon from 'golWeather/src/commons/icons';
import {store} from 'golWeather/src/redux/store';
import {
  asyncSetWeather,
  asyncSaveWeatherList,
} from 'golWeather/src/redux/actions';
import {LocationItemComponent} from 'golWeather/src/components/presentation';

class SearchBar extends Component {
  constructor(props) {
    super({...props});
    this.state = {
      searchString: '',
      searchBox: false,
    };

    this.onSelect = this.props.onSelect;
  }

  searchLocation = searchString => {
    store.dispatch(asyncSaveWeatherList(searchString));

    this.setState({
      searchString: searchString,
      searchBox: true,
    });
  };

  setCurrentLocation = (woeid, title) => {
    this.setState({searchBox: false, searchString: title});
    store.dispatch(asyncSetWeather(woeid));
  };

  optionsContainer = () => {
    return (
      <View style={styles.optionsContainer}>
        <FlatList
          style={{
            flex: 1,
            alignSelf: 'stretch',
            paddingHorizontal: horizontalScale(20),
            paddingVertical: verticalScale(5),
          }}
          data={
            this.props.weatherListReducer.length
              ? this.props.weatherListReducer.slice(0, 7)
              : []
          }
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={{paddingVertical: verticalScale(10)}}
              onPress={() => {
                this.setCurrentLocation(item.woeid, item.title);
              }}>
              <LocationItemComponent
                name={item.title}
                type={item.location_type}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                alignSelf: 'stretch',
                backgroundColor: colors.awesomeOrange,
                height: 1,
              }}
            />
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={styles.searchContainer}>
          <TextInput
            onChangeText={event => {
              this.searchLocation(event);
            }}
            style={styles.searchInputStyle}
            placeholder={'Pesquisa'}
            placeholderTextColor={colors.lightOrange}
            value={this.state.searchString}
          />

          <Icon
            name={'search'}
            color={colors.awesomeOrange}
            size={fontScale(34)}
          />
        </View>

        {this.state.searchBox ? this.optionsContainer() : <View />}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherListReducer: state.weatherListReducer,
    weatherReducer: state.weatherReducer,
  };
};

export default connect(mapStateToProps)(SearchBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: colors.awesomeOrange,
    borderRadius: 99999,
    backgroundColor: colors.white,
    alignSelf: 'stretch',
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInputStyle: {
    color: colors.awesomeOrange,
    fontSize: fontScale(18),
    flex: 1,
  },
  optionsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginTop: verticalScale(10),
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.awesomeOrange,
  },
});
