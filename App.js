import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import ChatScreen from './components/chatScreen';
import Header from './components/common/header';
import MainTabNavigator from './components/common/navigatorMenu';
import SplashScreen from './components/splashScreen';
import useFonts from './hooks/useFonts';
import store from './redux/store/store';
import FindFriendsScreen from './components/friendListScreen/findFriendsScreen';
import ProfileScreen from './components/profileScreen';

const RootStack = createNativeStackNavigator();

const App = () => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        {/* TODO: move the navigator in a separate component */}
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              header: ({ navigation, back }) => {
                return <Header navigation={navigation} back={back} />;
              },
            }}
          >
            <RootStack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
            <RootStack.Screen name="Chat" component={ChatScreen} />
            <RootStack.Screen
              name="FindFriends"
              component={FindFriendsScreen}
              options={{ headerShown: false }}
            />
            <RootStack.Screen name="Profile" component={ProfileScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
