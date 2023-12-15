import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store/store'
import AppContainer from './components/common/appContainer'

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    </ReduxProvider>
  )
}
