import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Modal} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [showModal,setShowModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(undefined)
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
  const updateUser= (data)=>{
    setShowModal(true)
    setSelectedUser(data)
  }
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
                  <Button title='Update' onPress={()=>{updateUser(item)}}/>
                </View>
                <View style={{flex:1}}>
                  <Button title='Delete' onPress={()=>deleteUser(item.id)}/>
                </View>
              </View>
            );
          })
        : null}
        <Modal transparent={true} visible={showModal}>
         <UserModal setShowModal={setShowModal} selectedUser={selectedUser}/>
        </Modal>
    </View>
  );
};
const UserModal = (props)=>{
  console.warn(props.selectedUser)
  return(<View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text>{props.selectedUser.name}</Text>
      <Button title='CLOSE' onPress={()=>{props.setShowModal(false)}}/>
    </View>
  </View>)
}
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
  itemsTextStyle:{color:'white'},
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  modalView:{
    backgroundColor:'white',
    padding:60,
    borderRadius:10,
    shadowColor:'#000',
    shadowOpacity:0.70,
    elevation:5
  }

});
export default App;