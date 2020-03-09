import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScene} from './screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: false,
            headerShown: false,
          }}
          name="Home"
          component={HomeScene}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
