import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FriendListScreen from '../../friendListScreen';
import MainScreen from '../../mainScreen';
import StartBuzzScreen from '../../startBuzzScreen';
import theme from '../../../theme';

const Tab = createBottomTabNavigator();

const NavigatorMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'StartABuzz') {
            iconName = focused ? 'flash' : 'flash-outline';
          } else if (route.name === 'FriendList') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          paddingTop: 10
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Home', headerShown: false }}
      />
      <Tab.Screen
        name="StartABuzz"
        component={StartBuzzScreen}
        options={{ title: 'Start a Buzz', headerShown: false }}
      />
      <Tab.Screen
        name="FriendList"
        component={FriendListScreen}
        options={{ title: 'Friends', headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default NavigatorMenu;
