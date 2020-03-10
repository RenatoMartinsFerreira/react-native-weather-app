import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  GenericTextComponent,
  GenericTextComponentStyleguideItem,
} from 'golWeather/src/components/presentation';
import {horizontalScale, verticalScale} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';
import {IconTextComponent} from 'golWeather/src/components/presentation';
export const WeatherItemComponent = ({
  date,
  winds,
  max,
  min,
  humiduty,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.verticalLine, { marginBottom: verticalScale(10) } ]}>
        <IconTextComponent
          icon={icon}
          iconColor={colors.lightOrange}
          text={date}
        />
        <IconTextComponent
          icon={'winds'}
          iconColor={colors.lightOrange}
          text={`${parseFloat(winds).toFixed(2)} mph`}
        />
      </View>

      <View style={styles.verticalLine}>
        <IconTextComponent
          icon={'weather'}
          iconColor={colors.hotRed}
          text={`${parseFloat(winds).toFixed(2)} ºC`}
        />
        <IconTextComponent
          icon={'weather'}
          iconColor={colors.coldBlue}
          text={`${parseFloat(winds).toFixed(2)} ºC`}
        />
        <IconTextComponent
          icon={'drop'}
          iconColor={colors.lightBlue}
          text={`${parseFloat(winds).toFixed(2)} %`}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
  },
  verticalLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});
