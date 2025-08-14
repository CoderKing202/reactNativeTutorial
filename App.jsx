import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity, ActivityIndicator} from 'react-native';
import {StyleSheet, TouchableHighlight} from 'react-native';
import style from './style';

const App = () => {
  const [show, setShow] = useState(false);
  const [selectedRadio, setSelectedRadio]= useState(1)

  const displayLoader = ()=>{
    setShow(true)
    setTimeout(()=>{
      setShow(false)
    },3000)
    ///commit
  }
  return (
    <View style={styles.main}>
        {/* <ActivityIndicator size={200} color={'blue'}/> */}
        {/* <ActivityIndicator size={'small'} color={'red'}/> */}
        {show?<ActivityIndicator size={'small'} color={'red'}/>:null}
        <ActivityIndicator size={100} color={'green'} animating={show}/>
        <Button title='Show Loader' onPress={displayLoader}/>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
