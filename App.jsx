import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput, FlatList,ScrollView} from 'react-native';
import exStyles from './style';
import UserData from './components/UserData';
import { SectionList } from 'react-native';
function App() {
 const users = [
  {
    id:1,
    name:'Anil',
    data : ['PHP','Angular','React js']
  },
  {id:2,
    name:'Peter',
    data : ['Java','Js','HTML']},
  {id:1,
    name:'Anil',
    data : ['C','C++','Python']},
  {id:1,
    name:'Anil',
    data : ['CSS','BootStrap','HTML']}
 ]
  return (
    <>
    <Text style={{fontSize:31}}>
      Section List in React-Native
    </Text>
   <SectionList sections={users} renderItem={({item})=><Text style={{fontSize:20,marginLeft:20}} >{item}</Text>}
   renderSectionHeader={({section:{name}})=><Text style={{color:'red',fontSize:25}}>{name}</Text>}/>
    </>
  );
}


export default App;
