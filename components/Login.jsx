import { View,Text,Button} from "react-native"
export const Login = (props)=>{
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>Login Screen</Text>
        <Button title='Go to Home Page' onPress={()=>{props.navigation.navigate("Home")}}></Button>
      </View>
    )
  }