import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet, TextInput} from 'react-native';


const App = () => {
  const [data,setData] = useState(undefined)
  const getApiData=async ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts/1"
    let result =await fetch(url)
    result = await result.json()
    setData(result)
    console.warn(result)
  }
  useEffect(()=>{getApiData()},[])
return (
<View>
  <Text style={{fontSize:30}}>API Call</Text>
{
  data?<View>
    <Text>{data.id}</Text>
    <Text>{data.userId}</Text>
    <Text>{data.title}</Text>
    <Text>{data.body}</Text>
  </View>:null
}
</View>
  )
}
export default App