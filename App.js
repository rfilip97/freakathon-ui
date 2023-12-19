import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from './components/splashScreen';
import store from './redux/store/store';
import useFonts from './hooks/useFonts';
import MainTabNavigator from './components/common/mainTabNavigator';

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
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
