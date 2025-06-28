import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  // useEffect(() => {
  //   console.warn('do some animation');
  // }, [count]);
  // useEffect(() => {
  //   console.warn('do some api here');
  // }, [data]);
  return (
    <View>
      <Text style={{fontSize: 30}}>
        {data} Use Effect with componentDidUpdate{count}
      </Text>
      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
      <Button title="Update Data" onPress={() => setData(data + 1)} />
      <User info={{data, count}} />
    </View>
  );
};
const User = props => {
  useEffect(() => {
    console.warn('run this code when data prop is updated');
  }, [props.info.data]);
  useEffect(() => {
    console.warn('run this code when count prop is updated');
  }, [props.info.count]);
  
  return (
    <View>
      <Text style={{fontSize: 30, color: 'orange'}}>
        data :{props.info.data}
      </Text>
      <Text style={{fontSize: 30, color: 'orange'}}>
        count: {props.info.count}
      </Text>
    </View>
  );
};
export default App;
