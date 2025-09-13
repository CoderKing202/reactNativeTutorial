import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if (result) {
      setData(result);
    }
  };
  const deleteUser = async (id)=>{
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(`${url}/${id}`,{method:'delete'});
    result = await result.json();
    getAPIData()
  }
  useEffect(() => {
    getAPIData();
  },[]);
  return (
    <View style={styles.container}>
       <View style={styles.dataWrapper}>
                <View style={{flex:1.3}}>
                  <Text style={styles.headingStyle}>Name</Text>
                </View>
                <View style={{flex:2}}>
                  <Text style={styles.headingStyle}>Age</Text>
                </View>
                <View style={{flex:2}}>
                 <Text style={styles.headingStyle}>Operations</Text>
                </View>
                
              </View>
      {data.length
        ? data.map(item => {
            return (
              <View style={styles.dataWrapper}>
                <View style={{flex:1}}>
                  <Text style={styles.itemsTextStyle}>{item.name}</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={styles.itemsTextStyle}>{item.age}</Text>
                </View>
                <View style={{flex:1}}>
                  <Button title='Update'/>
                </View>
                <View style={{flex:1}}>
                  <Button title='Delete' onPress={()=>deleteUser(item.id)}/>
                </View>
              </View>
            );
          })
        : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  dataWrapper: {
    backgroundColor:'orange',
    flexDirection:'row',
    justifyContent:'space-around',
    margin:5,
    padding:8
  },
  headingStyle:{fontWeight:'bold'},
  itemsTextStyle:{color:'white'}
});
export default App;
