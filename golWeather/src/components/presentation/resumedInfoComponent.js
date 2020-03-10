import React from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'golWeather/src/commons/icons';
import {fontScale, horizontalScale} from 'golWeather/src/commons/scaling';
import colors from 'golWeather/src/commons/colors';

import {
  GenericButton,
  GenericTextComponent,
  IconTextComponent,
} from 'golWeather/src/components/presentation';

export const ResumedInfoComponent = ({
  title = 'Busque Por Cidades',
  icon = 'lr',
  onOpen = () => {},
  temp = 0,
  date = '00/00/00',
}) => {
  return (
    <View style={styles.visibleBottomContainer}>
      <TouchableOpacity
        onPress={() => {
          onOpen();
        }}
        style={styles.verticalLine}>
        <Icon
          name="arrow_down"
          size={fontScale(18)}
          color={colors.awesomeOrange}
        />
      </TouchableOpacity>

      <View style={styles.verticalLine}>
        <GenericTextComponent text={title} />

        <Icon
          name={'favorite'}
          color={colors.awesomeOrange}
          size={fontScale(34)}
        />
      </View>
      <View style={styles.verticalLine}>
        <IconTextComponent
          icon={icon}
          iconColor={colors.lightOrange}
          text={date}
        />
        <GenericTextComponent text={`${parseFloat(temp).toFixed(2)} ºC`} />
      </View>
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
    height: Dimensions.get('window').height * 0.3,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
