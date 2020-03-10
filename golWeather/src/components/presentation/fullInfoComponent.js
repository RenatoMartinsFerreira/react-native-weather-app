import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'golWeather/src/commons/icons';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';

import {
  GenericButton,
  WeatherItemComponent,
} from 'golWeather/src/components/presentation';

export const FullInfoComponent = ({onClose = () => {}, weatherList = []}) => {
  return (
    <View style={styles.visibleBottomContainer}>
      <TouchableOpacity
        onPress={() => {
          onClose();
        }}
        style={[styles.verticalLine, styles.topArrow]}>
        <Icon
          name="arrow_down"
          size={fontScale(18)}
          color={colors.awesomeOrange}
        />
      </TouchableOpacity>

      <FlatList
        style={{
          flex: 1,
          alignSelf: 'stretch',
          paddingHorizontal: horizontalScale(20),
          paddingVertical: verticalScale(5),
        }}
        data={weatherList}
        renderItem={({item, index}) => (
          <WeatherItemComponent
            date={new Date(item.applicable_date).toLocaleDateString()}
            winds={item.wind_speed}
            max={item.max_temp}
            min={item.min_temp}
            humiduty={item}
            icon={item.weather_state_abbr}
          />
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

      <GenericButton text={'Atualizar previsão'} />
    </View>
  );
};

const styles = StyleSheet.create({
  verticalLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    paddingHorizontal: horizontalScale(50),
    alignItems: 'center',
  },
  visibleBottomContainer: {
    height: Dimensions.get('window').height * 0.8,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topArrow: {
    marginVertical: verticalScale(10),
    transform: [{rotate: '180deg'}],
  },
});
