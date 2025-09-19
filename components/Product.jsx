import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Image} from 'react-native';
import {addToCart, removeFromCart} from './redux/action';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    let result = cartItems.filter((element)=>{
      return(
        element.name === item.name
      )
    })
    if(result.length){
      setIsAdded(true)
    }
    else{
      setIsAdded(false)
    }
  }, [cartItems]);
  const handleaddToCart = item => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item)=>{
    dispatch(removeFromCart(item.name))
    
  }
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 1,
        padding: 10,
      }}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      {isAdded ? (
        <Button title="Remove to Cart" onPress={() => handleRemoveFromCart(item)} />
      ) : (
        <Button title="Add to Cart" onPress={() => handleaddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
export default Product;
