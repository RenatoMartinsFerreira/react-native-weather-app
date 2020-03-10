import React from 'react';
import {StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import colors from 'golWeather/src/commons/colors';
import {fontScale} from 'golWeather/src/commons/scaling';

export const GenericTextComponentStyleguideItem = {
  HEADING: 'HEADING',
  BODY: 'BODY',
  TINY: 'TINY',
  DEFAULT: 'DEFAULT',
};

export const GenericTextComponent = ({
  styleguideItem,
  text,
  color,
  opacity,
  textAlign,
  marginTop,
  marginBottom,
  numberOfLines,
  strike,
}) => {
  let currentStyle;

  switch (styleguideItem) {
    case GenericTextComponentStyleguideItem.HEADING:
      currentStyle = styles.heading;
      break;
    case GenericTextComponentStyleguideItem.BODY:
      currentStyle = styles.body;
      break;
    case GenericTextComponentStyleguideItem.TINY:
      currentStyle = styles.tiny;
      break;
    default:
      currentStyle = styles.default;
      break;
  }

  return (
    <Text
      style={[
        currentStyle,
        {
          opacity,
          color,
          textAlign,
          marginTop,
          marginBottom,
        },
        !!strike && styles.strike,
      ]}
      allowFontScaling={false}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

GenericTextComponent.defaultProps = {
  styleguideItem: GenericTextComponentStyleguideItem.DEFAULT,
  color: colors.black,
  opacity: 1,
  textAlign: 'left',
  marginTop: 0,
  marginBottom: 0,
  numberOfLines: 99999,
  strike: false,
};

GenericTextComponent.propTypes = {
  styleguideItem: PropTypes.oneOf(
    Object.keys(GenericTextComponentStyleguideItem),
  ),
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  opacity: PropTypes.number,
  textAlign: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  numberOfLines: PropTypes.number,
  strike: PropTypes.bool,
};

GenericTextComponent.GenericTextComponentStyleguideItem = GenericTextComponentStyleguideItem;

const styles = StyleSheet.create({
  heading: {
    fontSize: fontScale(18),
  },
  body: {
    fontSize: fontScale(13),
    lineHeight: fontScale(14),
  },
  tiny: {
    fontSize: fontScale(12),
    lineHeight: fontScale(24),
  },

  default: {
    fontSize: fontScale(18),
    lineHeight: fontScale(24),
  },
});
