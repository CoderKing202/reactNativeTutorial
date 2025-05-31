import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput, FlatList,ScrollView} from 'react-native';
import exStyles from './style';
import UserData from './components/UserData';

function App() {
 const users = [
  {
    id:1,
    name:'Anil',
    email:'abc@test.com'
  },
  {
    id:2,
    name:'Sam',
    email:'abc@test.com'
  },
  {
    id:3,
    name:'Peter',
    email:'abc@test.com'
  },
 ]
  return (
    <>
    <Text style={{fontSize:31}}>
      Component in Loop with FlatList
    </Text>
    <FlatList data={ users } renderItem={( { item } )=>
     <UserData item={ item }/> }/>
    </>
  );
}


export default App;
