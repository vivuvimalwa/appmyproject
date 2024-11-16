import { View , Text ,StyleSheet} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

const openDrawer=createDrawerNavigator()
export default function Header(){
    const navigation = useNavigation(); 
    const menuHander=()=>{
        navigation.openDrawer();
        }
    return(
        <View  style={styles.header}>
            <MaterialIcons name="menu" size={28} color="black" onPress={menuHander} style={styles.menu}/>
            
            <Text style={styles.headertext}>vgnnng</Text>
            
        </View>
    )
}

const styles=StyleSheet.create({
 header:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center'
  
 },
 headertext:{
    fontWeight:'bold',
    fontSize:20,
    color:'#333',
    letterSpacing:1,
    
 },
 menu:{
left:0,
position:'absolute'
 }
})