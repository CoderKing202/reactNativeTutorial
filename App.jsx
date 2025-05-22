import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput, FlatList} from 'react-native';
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
  }
 ]
  return (
    <>
    <Text style={{fontSize:31}}>
      List with Flat List Component
    </Text>
    <FlatList data={users} renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
    keyExtractor = {item=>item.id}
    />
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
