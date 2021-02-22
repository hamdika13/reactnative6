/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from './Screen/Form/Form'
import Home from './Screen/utama/utama'
import human from './Screen/human.js/human'
import EditUser from './Screen/person/person'


const Stack = createStackNavigator();
class App extends Component {




  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="utama" component={utama} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="person" component={person} />
        <Stack.Screen name="Edit human" component={human} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;
