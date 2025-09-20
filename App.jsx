import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Image, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import ProductWrapper from './components/ProductWrapper';
import UserList from './components/UserList';

const App = () => {
  
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper}/>
        <Stack.Screen name="User" component={UserList}/>
      </Stack.Navigator>
    </NavigationContainer>
  ); 
};


export default App;
