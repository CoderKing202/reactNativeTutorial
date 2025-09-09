import React, {useEffect, useState} from 'react';
import {View, Text, Button,StyleSheet, TextInput ,ScrollView, FlatList} from 'react-native';


const App = () => {
  const [data,setData] = useState([])
  const getApiData=async ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    let result =await fetch(url)
    result = await result.json()
    setData(result)
    
  }
  useEffect(()=>{getApiData()},[])
return (
  <View>
    <Text style={{fontSize:30}}>FlatList With API Data</Text>
<FlatList data={data} renderItem={({item})=><View style={{
  borderBottomColor:'orange',borderWidth:1,padding:10}}>
<Text style={{fontSize:30, backgroundColor:'orange'}}>{item.id}</Text>
<Text style={{fontSize:30}}>{item.title}</Text>
<Text style={{fontSize:30}}>{item.body}</Text>
</View>}/>
</View>
  // )
  )
}
export default App