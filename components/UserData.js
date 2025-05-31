import { View,Text,StyleSheet } from "react-native";
const UserData = (props)=>{
    const item = props.item
    return(
      <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
    )
  }
  
  const styles = StyleSheet.create({
    item: {
      fontSize: 24,
      color:'orange',
      margin:2,
      flex:1,
      backgroundColor:'green',
      textAlign:'center'
      },
    box:{
      flexDirection:'row',
      marginBottom:10,
      borderWidth:2,
      borderColor:'orange'
    }
  });
export default UserData