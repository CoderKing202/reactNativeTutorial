import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const input= useRef()
  const updateInput = ()=>{
    input.current.focus()
    input.current.setNativeProps({
      fontSize:24,
      color:'green'
    })
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter Name' ref = {input} style={styles.input}/>
      <TextInput placeholder='Enter Password' style={styles.input}/>
      <Button title="Update Input" onPress={updateInput}/>
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
