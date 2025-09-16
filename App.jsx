import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const App = () => {
  const [user,setUser] = useState('')
  const setData = async ()=>{
    await AsyncStorage.setItem("name","Jatin Lama")
  }
  const getData = async ()=>{
    const name = await AsyncStorage.getItem("name")
    console.warn(name)
    setUser(name)
  }
  const removeData = async ()=>{
  await AsyncStorage.removeItem("name")
  setUser("")
  }
  return (
    <View >
      <Text style={styles.text}>AsyncStorage with React Native | {user}</Text>
      <View><Button title="Set Data" onPress={setData}/></View>
      <View><Button title="Get Data" onPress={getData}/></View>
      <View><Button title="Remove Data" onPress={removeData}/></View>
      <View style={styles.box}></View>
    </View>
    
  ); 
};

const styles = StyleSheet.create({
  text:{
    marginBottom:40,
    fontSize:40
  },
  box:{
    backgroundColor:'green',
    height:100,
    width:100,
    padding:10,
    margin:20,
    borderColor:'red',
    borderWidth:2
  }
})
export default App;
