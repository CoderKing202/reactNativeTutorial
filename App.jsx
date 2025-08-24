import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet, StatusBar, Platform} from 'react-native';
import style from './style';

const App = () => {
const [hide,setHide] = useState(false)
const [barStyle,setBarStyle] = useState("default")
  return (
    <View  >
     <Text>Platform : {Platform.OS}</Text> 
     {
      Platform.OS == 'android'?
      <View style={{height:100,width:100, backgroundColor:'green'}}></View>
      :<View style={{height:100,width:100, backgroundColor:'red'}}></View>
     }
     <Text style={styles.text}>Hello</Text>
     <Text>{JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  );
}
 const styles = StyleSheet.create({
text:{
  color:Platform.OS?'orange':'blue',
  fontSize:20
}
 })
export default App;
//test