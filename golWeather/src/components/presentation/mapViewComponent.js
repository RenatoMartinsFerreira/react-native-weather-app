import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import MapView, {AnimatedRegion} from 'react-native-maps';

export const MapViewComponent = ({latitude, longitude}) => {
  return (
    <MapView
      style={styles.mapContainer}
      region={
        new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        })
      }
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      minZoomLevel={5}
      maxZoomLevel={10}
    />
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    zIndex: -1,
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
