import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GenericTextComponent} from 'golWeather/src/components/presentation';
import {horizontalScale, verticalScale} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';
import Icon from 'golWeather/src/commons/icons';
import {fontScale} from 'golWeather/src/commons/scaling';

export const IconTextComponent = ({
  icon,
  iconColor = colors.black,
  text,
  textColor = colors.black,
}) => {
  return (
    <View style={styles.container}>
      <Icon
        style={{marginRight: horizontalScale(10)}}
        name={icon}
        color={iconColor}
        size={fontScale(38)}
      />
      <GenericTextComponent color={textColor} text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
