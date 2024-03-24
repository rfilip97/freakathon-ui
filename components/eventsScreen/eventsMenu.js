import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllEventsScreen from './allEventsScreen';
import theme from '../../theme';

const Tab = createMaterialTopTabNavigator();

const EventsMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName="AllEvents"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: theme.fonts.regular.fontSize,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: theme.colors.secondary,
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
          height: 3,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="AllEvents"
        component={AllEventsScreen}
        options={{ tabBarLabel: 'All Events' }}
      />
      <Tab.Screen
        name="YourEvents"
        component={AllEventsScreen}
        options={{ tabBarLabel: 'Your Events' }}
      />
      <Tab.Screen
        name="AttendingEvents"
        component={AllEventsScreen}
        options={{ tabBarLabel: 'Attending Events' }}
      />
    </Tab.Navigator>
  );
};

export default EventsMenu;
