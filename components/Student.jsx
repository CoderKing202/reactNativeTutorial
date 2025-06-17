import React, {useState ,Component}from 'react';
import {Button, Text, View, StyleSheet, TextInput, FlatList,ScrollView} from 'react-native';

class Student extends Component
{

  render()
  {
    console.warn(this.props)
    return (<View>
      <Text style={{
        color:'green',
        fontSize:30
      }}>Student Name:{ this.props.name }</Text>
      
    </View>)
  }

  
}

export default Student
