import { useState } from "react"
import { View,Text,Button, TextInput} from "react-native"
export const Login = (props)=>{
  const [name,setName] = useState("")
   const age = 29
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>Login Screen</Text>
        <TextInput placeholder="Enter name" onChangeText={(text)=>setName(text)}
          style={{fontSize:20,borderColor:'#ccc',borderWidth:2}}/>
        <Button title='Go to Home Page' onPress={()=>{props.navigation.navigate("Home",{
            name,
            age})}}></Button>
      </View>
    )
  }