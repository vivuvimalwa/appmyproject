import { createDrawerNavigator,DrawerContentScrollView,DrawerItem,DrawerItemList } from "@react-navigation/drawer";
import Home from '../screens/home'
import About from '../screens/about'
import ReviewDetails from '../screens/reviewDetails'

function CustomerDrawerContent(props){
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem label='help' />
        </DrawerContentScrollView>
    );
}


const Drawer=createDrawerNavigator()



import { useWindowDimensions } from 'react-native';


export default function DrawerPage(){
    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 768;
    return(
        <Drawer.Navigator 
        screenOptions={{
            drawerType: isLargeScreen ? 'permanent' : 'back',
        drawerStyle: isLargeScreen ? null : { width: '100%' },
        overlayColor: 'transparent',
        }}
        drawerContent={(props)=><CustomerDrawerContent {...props}
        />}>
            <Drawer.Screen name="home" component={Home}/>
            <Drawer.Screen name="about" component={About}/>
        </Drawer.Navigator>
    )
}