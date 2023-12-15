import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import AppContainer from './components/common/appContainer'

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}
