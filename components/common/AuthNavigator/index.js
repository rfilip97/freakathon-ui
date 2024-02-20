import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../../landingScreen';
import LoginScreen from '../../loginScreen';
import React from 'react';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="LandingPage" component={LandingPage} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
