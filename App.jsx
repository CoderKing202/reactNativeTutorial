import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import { StyleSheet, TouchableHighlight } from 'react-native';
import style from './style';

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button,styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.warning]}>Warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.error]}>Error</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

export default App;

const styles = StyleSheet.create(
  {
    main:{flex:1},
    button:{
      backgroundColor:'#bbb',
      color:'#fff',
      fontSize:24,
      textAlign:'center',
      padding:10,
      margin: 10,
      borderRadius:10,
      shadowColor:'red',
      elevation:10,
      shadowOpacity:1
    },
    success:{backgroundColor:'green'},
    primary:{backgroundColor:'blue'},
    error:{backgroundColor:'red'},
    warning:{backgroundColor:'gold'}
    
  }
)