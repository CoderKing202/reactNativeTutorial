import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput, FlatList,ScrollView} from 'react-native';
import exStyles from './style';

function App() {
 const users = [
  {
    id:1,
    name:'Anil'
  },
  {
    id:2,
    name:'Sam'
  },
  {
    id:3,
    name:'Peter'
  },
  {
    id:4,
    name:'Bruce'
  },
  {
    id:10,
    name:'Tony'
  },
  {
    id:11,
    name:'Payback'
  },
  {
    id:12,
    name:'Anil'
  },
  {
    id:10,
    name:'Tony'
  },
  {
    id:10,
    name:'Tony'
  },
  {
    id:10,
    name:'Tony'
  },
  {
    id:10,
    name:'Tony'
  },
  {
    id:10,
    name:'Tony'
  },
  {
    id:10,
    name:'Kail'
  }
  
 ]
  return (
    <>
    <Text style={{fontSize:31}}>
      Grid with Dynamic Data
    </Text>
    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
   {
    users.map((item,id)=><Text style={styles.item}>{item.name}</Text>)
   }
   </View>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor:'blue',
    color:'white',
    margin:5,
    padding:5,
    width:120,
    height:120,
    textAlignVertical:'center',
    textAlign:'center'
    },
});
export default App;
