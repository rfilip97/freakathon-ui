import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import UserDetailsDisplay from '../../../components/common/userDisplay';
import { setUserDetails } from '../../../redux/actions/userActions';
import MainScreen from '../../mainScreen';

export default function AppContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserDetails('Agile', 'D'));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
