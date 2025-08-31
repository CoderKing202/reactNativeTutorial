import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator()
const App = () => {
return (
<NavigationContainer>
  <Tab.Navigator>
 <Tab.Screen name="Login" component={Login}/>
 <Tab.Screen name="SignUp" component={SignUp}/>
 <Tab.Screen name="Other" component={SignUp}/>
  </Tab.Navigator>
</NavigationContainer>
  )
}
export default App

const SignUp = ()=>{
  return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:40}}>SignUp</Text>
  </View>)
}

const Login = ()=>{
  return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:40}}>Login</Text>
  </View>)
}