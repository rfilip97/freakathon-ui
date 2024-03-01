import React, { useEffect, useRef } from 'react';
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
import AuthNavigator from './components/common/AuthNavigator';
import QRCodeScreen from './components/common/qrCodeScreen';
import * as Linking from 'expo-linking';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

const App = () => {
  const fontsLoaded = useFonts();
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    const getInitialURL = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        navigateToProfile(url);
      }
    };

    const handleDeepLinkEvent = (event) => {
      navigateToProfile(event.url);
    };

    Linking.addEventListener('url', handleDeepLinkEvent);
    getInitialURL();

    return () => {
      Linking.removeEventListener('url', handleDeepLinkEvent);
    };
  }, []);

  const navigateToProfile = (url) => {
    const match = url.match(/^meety:\/\/profile\/(.+)$/);
    if (match) {
      const userTag = match[1];
      if (navigationRef.isReady()) {
        navigationRef.navigate('Profile', { userTag });
      }
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  const linking = {
    prefixes: [Linking.createURL('/')],
    config: {
      screens: {
        Profile: 'profile/:userTag',
      },
    },
  };

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer ref={navigationRef} linking={linking}>
          <RootStack.Navigator
            screenOptions={{
              header: ({ navigation, back }) => <Header navigation={navigation} back={back} />,
            }}>
            <RootStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <RootStack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
            <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
            <RootStack.Screen name="Chat" component={ChatScreen} />
            <RootStack.Screen name="FindFriends" component={FindFriendsScreen} options={{ headerShown: false }} />
            <RootStack.Screen name="Profile" component={ProfileScreen} />
            <RootStack.Screen name="QRCodeScreen" component={QRCodeScreen} />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
