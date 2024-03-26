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
import AuthNavigator from './components/common/AuthNavigator';
import QRCodeScreen from './components/common/qrCodeScreen';
import CreateEventScreen from './components/createEventScreen';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useDeepLinking from './hooks/useDeepLinking';
import GroupChatScreen from './components/groupChatScreen';

const RootStack = createNativeStackNavigator();

const App = () => {
  const fontsLoaded = useFonts();
  const navigationRef = useNavigationContainerRef();
  const linking = useDeepLinking(navigationRef);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer ref={navigationRef} linking={linking}>
          <RootStack.Navigator
            screenOptions={{
              header: ({ navigation, back }) => (
                <Header navigation={navigation} back={back} />
              ),
            }}
          >
            <RootStack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Auth"
              component={AuthNavigator}
              options={{ headerShown: false }}
            />
            <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
            <RootStack.Screen name="Chat" component={ChatScreen} />
            <RootStack.Screen name="GroupChat" component={GroupChatScreen} />
            <RootStack.Screen
              name="FindFriends"
              component={FindFriendsScreen}
              options={{ headerShown: false }}
            />
            <RootStack.Screen name="Profile" component={ProfileScreen} />
            <RootStack.Screen name="QRCodeScreen" component={QRCodeScreen} />
            <RootStack.Screen
              name="CreateEvent"
              component={CreateEventScreen}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
