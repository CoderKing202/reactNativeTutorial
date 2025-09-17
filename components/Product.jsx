import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addToCart } from './redux/action';
import {useDispatch} from 'react-redux'

const Product = (props) => {
const item = props.item
const dispatch = useDispatch()
const handleaddToCart = (item)=>{
dispatch(addToCart(item))

}
  return (
    <View style={{alignItems:'center', borderBottomColor:'orange',
    borderBottomWidth:1,padding:10}}>
    <Text style={{fontSize:24}}>{item.name}</Text>
    <Text style={{fontSize:24}}>{item.price}</Text>
    <Text style={{fontSize:24}}>{item.color}</Text>
    <Image style={{width:200,height:200}} source={{uri:item.image}}/>
    <Button title="Add to Cart" onPress={()=>handleaddToCart(item)}/>
  </View>
  ); 
};

const styles = StyleSheet.create({

})
export default Product;
