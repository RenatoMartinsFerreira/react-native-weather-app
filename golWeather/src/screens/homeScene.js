import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import MapView from 'react-native-maps';

function HomeScene() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
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

const styles = StyleSheet.create({});

export default HomeScene;
