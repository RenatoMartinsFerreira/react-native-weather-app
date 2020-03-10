import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  GenericTextComponent,
  GenericTextComponentStyleguideItem,
} from 'golWeather/src/components/presentation';
import {horizontalScale, verticalScale} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';

export const GenericButton = ({text}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <GenericTextComponent color={colors.white} text={text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.awesomeOrange,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
});
