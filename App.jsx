import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {StyleSheet, TouchableHighlight} from 'react-native';
import style from './style';

const App = () => {
  const [show, setShow] = useState(true);
  const [selectedRadio, setSelectedRadio]= useState(1)
  const skills = [
    {
      id:1,
      name:'Java'
    },
    {
      id:2,
      name:'JS'
    },
    {
      id:3,
      name:'Node'
    },
    {
      id:4,
      name:'SQL'
    },
   {
    id:5,
    name:'Python'
   } 
  ]
  return (
    <View style={styles.main}>
      {
        skills.map((item,index)=><TouchableOpacity key={index} 
        onPress={()=>setSelectedRadio(item.id)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>

          {selectedRadio == item.id?<View style={styles.radioBg}></View>:null}
          </View>
            <Text style={styles.radioText}>{item.name}</Text>
        </View>
     
      </TouchableOpacity>)
      }
  
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
