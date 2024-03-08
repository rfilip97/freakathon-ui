import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../../landingScreen';
import LoginScreen from '../../loginScreen';
import RegisterScreen from '../../registerScreen';
import React from 'react';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="LandingPage" component={LandingPage} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
