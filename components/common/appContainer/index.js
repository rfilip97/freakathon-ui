import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import UserDetailsDisplay from '../../../components/common/userDisplay'
import { setUserDetails } from '../../../redux/actions/userActions'

export default function AppContainer() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserDetails('John', 'Doe'))
  }, [dispatch])

  return (
    <SafeAreaView style={styles.container}>
      <UserDetailsDisplay />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
