import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet} from 'react-native';


const App = () => {
  
  const saveApiData=async ()=>{
    const data = {name:"Sam",
      age:34,
      email:"sam@test.com"
    }
    const url = "http://10.0.2.2:3000/users"
    let result = await fetch(url,{
      method:'post',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    })
    result = await result.json()
    console.warn(result)   
  }
return (
  <View>
  <Text style={{fontSize: 30}}>Post API Call </Text>
  <Button title='Save Data' onPress={saveApiData}/>
</View>
  )
}
export default App