import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import store from './redux/store/store'
import SplashScreenComponent from './components/splashScreen'
import MainScreen from './components/mainScreen'
import useFonts from './hooks/useFonts'

const Stack = createNativeStackNavigator()

export default function App() {
  fontsLoaded = useFonts()

  if (!fontsLoaded) {
    return null
  }

  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Splash' component={SplashScreenComponent} />
            <Stack.Screen name='Main' component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  )
}
