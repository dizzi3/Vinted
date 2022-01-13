import React from 'react';
import WelcomeScreen from './Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './Screens/LogInScreen';
import SignUpScreen from './Screens/SignUpScreen';
import HomeScreen from './Screens/HomeScreen';
import MyListingsScreen from './Screens/MyListingsScreen';
import ListAProductScreen from './Screens/ListAProductScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  return ( 
    <NavigationContainer>

      <Stack.Navigator 
        screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
        />

        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen
          name="MyProducts"
          component={MyListingsScreen}
        />

        <Stack.Screen
          name="ListAProduct"
          component={ListAProductScreen}
        />

      </Stack.Navigator>


    </NavigationContainer>
  );

}