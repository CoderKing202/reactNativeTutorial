import React, {useEffect, useState} from 'react';
import {View, Text, Button,Modal, TouchableOpacity, ActivityIndicator} from 'react-native';
import {StyleSheet, TouchableHighlight} from 'react-native';
import style from './style';

const App = () => {
const [showModal,setShowModal] = useState(false)
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType='slide'>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                  Hello Code Step by Step
              </Text>
              <Button title='CLOSE MODAL'  onPress={()=>setShowModal(false)}/>
            </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={()=>setShowModal(true)}/>
        </View>
    </View>
  );
}
 const styles = StyleSheet.create({
  main:{
    flex:1
  },
  buttonView:{
    flex:1,
    justifyContent:'flex-end'
  },
  centeredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modalView:{
backgroundColor:'#ffffff',
padding:30,
borderRadius:20,
shadowColor:'black',
elevation:5
  },
  modalText:{
    fontSize:30,
    marginBottom:20,
  }

 })
export default App;