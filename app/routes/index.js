
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login, Setup, Details} from '../container'

const Stack = createStackNavigator();

function StackApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Setup" component={Setup} />
        <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {StackApp};
