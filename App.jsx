import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
const [show,setShow] = useState(true)
  // useEffect(() => {
  //   console.warn('do some animation');
  // }, [count]);
  // useEffect(() => {
  //   console.warn('do some api here');
  // }, [data]);
  return (
    <View>

      <Text style={{fontSize: 30}}>
        Toggle Component </Text>
        <Button title='Show component' onPress={()=>setShow(!show)}/>
      {
        show == true?<User/>:null
      }
    </View>
  );
};
const User=()=> {
  return (
    <View>
   <Text style={{fontSize:30,color:'green'}}>User Component</Text>
    </View>
  );
};
export default App;
