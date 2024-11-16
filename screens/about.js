import { View ,Text,StyleSheet, Button} from "react-native";

export default function About({navigation}){
    return(
        
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <Button title="go to reviewdetail" onPress={()=>navigation.navigate('ReviewDetail')}/>
            <Button title="go back" onPress={()=>navigation.goBack()}/>
        </View>
            
       
    )
}

const styles=StyleSheet.create({
  container:{
    padding:24,
  }
})