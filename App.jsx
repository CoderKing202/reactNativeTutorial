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
    <View style={styles.container}>
      <Text style={{fontSize:40}}>AsyncStorage with React Native | {user}</Text>
      <Button title="Set Data" onPress={setData}/>
      <Button title="Get Data" onPress={getData}/>
      <Button title="Remove Data" onPress={removeData}/>
    </View>
  ); 
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16
  }, 
  input:{
    borderColor:'skyblue',
    borderWidth:2
  }
})
export default App;
