import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet, TextInput} from 'react-native';


const App = () => {
  const [name,setName] = useState('')
  const [age,setAge] = useState(0)
  const [email,setEmail] = useState('')
  const saveData=async ()=>{

    const url = "http://10.0.2.2:3000/users"
    let result = await fetch(url,{
      method:'post',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,age,email})
    })
    result = await result.json()
    console.warn(result)   
  }
return (
  <View>
  <Text style={{fontSize:30}}> Post API with Input Field data </Text>
  <TextInput style={styles.input} placeholder='Enter name' value={name}
  onChangeText={(text)=>{setName(text)}}
  />
  <TextInput style={styles.input} placeholder='Enter age' value={age}
  onChangeText={(text)=>{setAge(text)}}
  />
  <TextInput style={styles.input} placeholder='Enter email' value={email}
  onChangeText={(text)=>{setEmail(text)}}
  />
  <Button title='Save Data' onPress={saveData}/>
</View>
  )
}
const styles = StyleSheet.create({
  input:{
    borderColor:'skyblue',
    borderWidth:1,
    margin:20,
    fontSize:20
  }
})
export default App