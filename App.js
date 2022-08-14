import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import SignUp from './screens/signup';
import SignIn from './screens/signin';
import MyProfile from './screens/myprofile';
import { Text, View } from 'react-native';
import SliderScreen from './screens/Slider';
import TabNav from './navigation/TabNav';
import RangeSlider from './screens/rangeslider'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SliderScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="signup" component={SignUp}/>
        <Stack.Screen name="signin" component={SignIn}/>
        <Stack.Screen name="myprofile" component={MyProfile}/>
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="RangeSlider" component={RangeSlider} />
        <Stack.Screen name="SliderScreen" component={SliderScreen} />
      </Stack.Navigator> 
    </NavigationContainer>

    
    

  );
};




export default App;
