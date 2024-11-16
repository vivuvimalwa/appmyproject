import About from "@/screens/about";
import Home from "@/screens/home";
import ReviewDetails from "@/screens/reviewDetails";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";




const Tab=createMaterialTopTabNavigator()

export default function MyTop(){
    return(
        <GestureHandlerRootView>
<Tab.Navigator>  
    <Tab.Screen name="home" component={Home}/>
    <Tab.Screen name='settings' component={About}/>
    <Tab.Screen name="ReviewDetail" component={ReviewDetails}/>
</Tab.Navigator>
</GestureHandlerRootView>
    );
}