import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FriendListScreen from '../../friendListScreen';
import MainScreen from '../../mainScreen';
import StartBuzzScreen from '../../startBuzzScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
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
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarBadge: route.name === 'FriendList' ? '1' : undefined,
      tabBarStyle: [
        {
          display: 'flex',
        },
        null,
      ],
    })}
  >
    <Tab.Screen
      name="Main"
      component={MainScreen}
      options={{ title: 'Profile' }}
    />
    <Tab.Screen
      name="StartABuzz"
      component={StartBuzzScreen}
      options={{ title: 'Start a Buzz' }}
    />
    <Tab.Screen
      name="FriendList"
      component={FriendListScreen}
      options={{ title: 'Friends' }}
    />
  </Tab.Navigator>
);

export default MainTabNavigator;
