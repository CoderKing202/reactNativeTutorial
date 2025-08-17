import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet,Pressable} from 'react-native';
import style from './style';

const App = () => {

  return (
    <View style={styles.main} >
      <Pressable
        onPress={()=>{console.warn("normal on press")}}
        onLongPress={()=>{console.warn("long press")}}
        onPressIn={()=>console.warn("press in")}
        onPressOut={()=>console.warn("press out")}
        >
        <Text style={styles.pressableBtn}> Pressable</Text>
      </Pressable>
    </View>
  );
}
 const styles = StyleSheet.create({
main:{
  flex:1,
  justifyContent:'center'
},
pressableBtn:{
  backgroundColor:'blue',
  color:'white',
  padding:10,
  margin:10,
  borderRadius:10,
  fontSize:20,
  textAlign:'center',
  shadowColor:'#000',
  elevation:5,
}
 })
export default App;