import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartitems, setCartItems] = useState(0);
  
  useEffect(() => {
    setCartItems(cartData.length);
    
  }, [cartData]);
  
  return (
    <View>
      
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
        }}>
          <View style={{backgroundColor:'yellow', borderRadius:15,
            height:40,width:40}}>
        <Text style={{fontSize:30,textAlign:'center'}}>{cartitems}</Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Header;
