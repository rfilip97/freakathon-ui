import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from './components/splashScreen';
import MainScreen from './components/mainScreen';
import StartBuzzScreen from './components/startBuzzScreen';
import FriendListScreen from './components/friendListScreen';
import useFonts from './hooks/useFonts';
import store from './redux/store/store';

const RootStack = createNativeStackNavigator();
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
      tabBarBadge: route.name === 'FriendList' ? '1' : undefined,
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Main" component={MainScreen} options={{ title: 'Profile' }} />
    <Tab.Screen name="StartABuzz" component={StartBuzzScreen} options={{ title: 'Start a Buzz' }} />
    <Tab.Screen name="FriendList" component={FriendListScreen} options={{ title: 'Friends' }} />
  </Tab.Navigator>
);

const App = () => {
  fontsLoaded = useFonts()

  if (!fontsLoaded) {
    return null
  }

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Splash" component={SplashScreen} />
            <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
