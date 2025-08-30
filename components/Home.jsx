import { View,Text } from "react-native"

export const Home = (props)=>{
   const {name,age} = props.route.params
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>Home Screen</Text>
        <Text style={{fontSize:30}}>Name: {name}</Text>
        <Text style={{fontSize:30}}>Age: {age}</Text>
      </View>
     
    )
  }