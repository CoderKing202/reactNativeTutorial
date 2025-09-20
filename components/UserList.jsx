import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './redux/action';

const UserList= () => {
  const dispatch = useDispatch() 
  const userList = useSelector((state)=>state.reducer)
  useEffect(()=>{
    dispatch(getUserList())
  },[])
  console.warn("in component", userList)
  return (
    <View style={styles.container}>
      <Text>User List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{flex:1},
});
export default UserList;
