import React, {useState ,Component}from 'react';
import {Button, Text, View, StyleSheet, TextInput, FlatList,ScrollView} from 'react-native';
import Student from './components/Student.jsx'
class App extends Component
{
 constructor(){
  super()
  this.state = {
    name:'Jatin',
    age:20,
  }
 }
 updateName(val){
  this.setState({name:val})
 }
  render(){
    return (<View>
      <Text style={{
        color:'red',
        fontSize:30
      }}>{ this.state.name }</Text>
      <TextInput placeholder='Enter your name' onChangeText={(text)=>{ this.updateName(text) }}/>
      <Button title='Press me' onPress={this.fruit}/>
      <Student name = {this.state.name}/>
    </View>)
  }

  
}

export default App;
