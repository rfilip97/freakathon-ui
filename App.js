import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import ChatScreen from './components/chatScreen';
import MainTabNavigator from './components/common/mainTabNavigator';
import SplashScreen from './components/splashScreen';
import useFonts from './hooks/useFonts';
import store from './redux/store/store';

const RootStack = createNativeStackNavigator();

const App = () => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Splash" component={SplashScreen} />
            <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
            <RootStack.Screen name="Chat" component={ChatScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
