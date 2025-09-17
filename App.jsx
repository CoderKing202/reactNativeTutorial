import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Image, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from './components/Header';
import Product from './components/Product';
const App = () => {
  const products = [
    {
        name:'Samsung Mobile',
        color:'white',
        price:30000,
        image:'https://img.freepik.com/free-vector/smart-phone-flat-style_78370-4084.jpg?semt=ais_incoming&w=740&q=80'
    },
    {
        name:'Apple I phone',
        color:'black',
        price:130000,
        image:'https://img.freepik.com/free-vector/smart-phone-flat-style_78370-4084.jpg?semt=ais_incoming&w=740&q=80'
    },
    {
        name:'Nokia Mobile',
        color:'green',
        price:20000,
        image:'https://img.freepik.com/free-vector/smart-phone-flat-style_78370-4084.jpg?semt=ais_incoming&w=740&q=80'
    }
  ]
  return (
    <View style={styles.container}>
          <Header/>
          <ScrollView>
          {
            products.map((item)=><Product item={item}/>)
          }
          </ScrollView>
          
          
     
    </View>
  ); 
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default App;
