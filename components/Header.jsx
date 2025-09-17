import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Header = () => {
  
  return (
    <View>
      <Text style={{fontSize:30,textAlign:'right',
        padding:10,backgroundColor:'orange'}}>0</Text>
    </View>
    
  ); 
};

const styles = StyleSheet.create({
 
})
export default Header;
