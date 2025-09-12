import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet, TextInput} from 'react-native';


const App = () => {
  const [name,setName] = useState('')
  const [age,setAge] = useState(0)
  const [email,setEmail] = useState('')
  const [nameError, setNameError] = useState(false)
  const [ageError, setAgeError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const saveData=async ()=>{
    if(!name){
      setNameError(true)
    }else{
      setNameError(false)
    }
    if(!age){
      setAgeError(true)
    }else{
      setAgeError(false)
    }
    if(!email){
      setEmailError(true)
    }
    else{
      setEmailError(false)
    }
    if(!name || !age || !email)
    {
      return false
    }
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
  {nameError?<Text style={styles.errorText}>Please enter Valid Name</Text>:null}
  <TextInput style={styles.input} placeholder='Enter age' value={age}
  onChangeText={(text)=>{setAge(text)}}
  />
  {ageError?<Text style={styles.errorText}>Please enter Valid Age</Text>:null}
  <TextInput style={styles.input} placeholder='Enter email' value={email}
  onChangeText={(text)=>{setEmail(text)}}
  />
  {emailError?<Text style={styles.errorText}>Please enter Valid Email</Text>:null}
  <Button title='Save Data' onPress={saveData}/>
</View>
  )
}
const styles = StyleSheet.create({
  input:{
    borderColor:'skyblue',
    borderWidth:1,
    margin:20,
    fontSize:20,
    marginBottom:5,
  },
  errorText:{
    color:'red',
    marginLeft:20
  }
})
export default App