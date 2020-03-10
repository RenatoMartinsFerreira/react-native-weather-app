import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {GenericTextComponent} from 'golWeather/src/components/presentation';
import {horizontalScale, verticalScale} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';
import Icon from 'golWeather/src/commons/icons';
import {fontScale} from 'golWeather/src/commons/scaling';

export const LocationItemComponent = ({name, type}) => {
  return (
    <View style={styles.container}>
      <Text>
        <GenericTextComponent color={colors.black} text={name} />,{' '}
        <GenericTextComponent color={colors.awesomeOrange} text={type} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
