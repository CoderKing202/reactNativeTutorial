import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Login } from './components/Login';

const App = () => {
  const Stack = createNativeStackNavigator()
  const btnAction = ()=>{
    console.warn('btn pressed')
  }
return (
<NavigationContainer>
  <Stack.Navigator
  screenOptions={
    {
      headerStyle:{
          backgroundColor:'blue',
    },
    headerTitleStyle:{
      fontSize:25
    },
    headerTintColor:'orange'
    
    }}
  >   
  <Stack.Screen name="Login" component={Login}    options={
      {
        headerLeft:()=><Button title='Left' onPress={btnAction}/>,
        headerRight:()=><Header/>,
        headerStyle:{
            backgroundColor:'orange',
      },
      title:"",
      headerTitleStyle:{
        fontSize:40
      },
      headerTintColor:'white'
      
      }} />
  <Stack.Screen name="Home" component={Home}/>
  </Stack.Navigator>
</NavigationContainer>
  )
}
const Header=()=>{
  return <TextInput placeholder='name'/>
}


export default App
