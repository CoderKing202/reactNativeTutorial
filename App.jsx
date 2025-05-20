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
  }
 ]
  return (
    <>
    <Text style={{fontSize:31}}>
      List with Flat List Component
    </Text>
    <FlatList data={users}/>
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {fontSize: 18, borderWidth: 2, borderColor: 'blue', margin: 10},
});
export default App;
