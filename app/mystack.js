import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import About from '../screens/about'
import ReviewDetails from '../screens/reviewDetails'
import Header from './header';

const stack=createStackNavigator()

export default function Mystack(){
    return(
  <stack.Navigator>
    <stack.Screen name="Home" component={Home} options={({navigation})=>{
      return {
        headerTitle:()=><Header navigation={navigation}/>,
      }
    }}/>
    <stack.Screen name="home" component={Home} />
    <stack.Screen name="setting" component={About} />
      <stack.Screen name="ReviewDetail" component={ReviewDetails} />
  </stack.Navigator>
    );
}

