import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {StyleSheet, TouchableHighlight} from 'react-native';
import style from './style';

const App = () => {
  const [show, setShow] = useState(true);
  const [selectedRadio, setSelectedRadio]= useState(1)

  return (
    <View style={styles.main}>
      <TouchableOpacity  onPress={()=>setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>

          {selectedRadio == 1?<View style={styles.radioBg}></View>:null}
          </View>
            <Text style={styles.radioText}>Radio 1</Text>
        </View>
     
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
      <View style={styles.radioWrapper}>
          <View style={styles.radio}>
          {selectedRadio == 2?<View style={styles.radioBg} ></View>:null}
          </View>
            <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
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
  radioText: {fontSize: 20},
  radio:{
    height:40,
    width:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:20,
    margin: 10
  },
  radioWrapper:{
    flexDirection:'row',
    alignItems:'center'
  },
  radioBg:{
    backgroundColor:"skyblue",
    height:28,
    width:28,
    borderRadius:20,

    margin:4
  }
});
