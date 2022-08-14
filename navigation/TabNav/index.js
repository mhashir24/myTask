import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../../screens/MainScreen';
import Myprofile from '../../screens/myprofile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Signin from '../../screens/signin';

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-circle' : 'ios-list';
            } else if (route.name === 'Login') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
    >
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Settings" component={Myprofile} />
        <Tab.Screen name="Login" component={Signin} />
      </Tab.Navigator>
  );
}


export default TabNav