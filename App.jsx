import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator()

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
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Home" component={Home}
    options={
      {
        headerStyle:{
            backgroundColor:'skyblue',
      },
      headerTitleStyle:{
        fontSize:40
      },
      headerTintColor:'white'
      
      }}
  />
  </Stack.Navigator>
</NavigationContainer>
  )
}
const Home = ()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Home Screen</Text>
    </View>
  )
}
const Login = (props)=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Login Screen</Text>
      <Button title='Go to Home Page' onPress={()=>{props.navigation.navigate("Home")}}></Button>
    </View>
  )
}
export default App
