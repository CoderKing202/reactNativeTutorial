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
      List with Flat List Component
    </Text>
    <ScrollView style={{marginBottom:30}}>
    {
      users.map((item)=><Text style={styles.item}>{item.name}</Text>)
    }
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  item: {fontSize: 24,
      padding: 10,
      backgroundColor:'#0000ff',
      margin:10,color:'#ffffff',
      borderWidth:1,
      borderColor:'black'
    },
});
export default App;
