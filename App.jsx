import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet, TextInput ,ScrollView, FlatList} from 'react-native';


const App = () => {
  const [data,setData] = useState([])
  const getApiData=async ()=>{
    const url = "http://10.0.2.2:3000/users "
    let result =await fetch(url)
    result = await result.json()
    setData(result)
    
  }
  useEffect(()=>{getApiData()},[])
return (
  <View>
    <Text style={{fontSize:30}}>Call json server API</Text>
    {
      data.length?data.map((item)=>{
        return(<View style={{borderWidth:1, borderColor:'red'}}>
          <Text style={{fontSize:30}}>{item.name}</Text>
          <Text style={{fontSize:30}}>{item.age}</Text>
          <Text style={{fontSize:30}}>{item.email}</Text>
          </View>
        )
      }):null
    }
 
</View>
  // )
  )
}
export default App