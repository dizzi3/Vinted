import React from 'react';
import WelcomeScreen from './Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './Screens/LogInScreen';
import SignUpScreen from './Screens/SignUpScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  return ( 
    <NavigationContainer>

      <Stack.Navigator 
        screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="Welcome"
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


      </Stack.Navigator>


    </NavigationContainer>
  );

}