import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScene} from './screens';

import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider, connect} from 'react-redux';
import {store, persistor} from 'golWeather/src/redux/store';

const Stack = createStackNavigator();

// Connect the screens to Redux
const HomeContainer = connect(state => ({
  storeWeather: state.weatherReducer,
  currentWeather: state.currentWeatherReducer,
}))(HomeScene);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                header: false,
                headerShown: false,
              }}
              name="Home"
              component={HomeContainer}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
