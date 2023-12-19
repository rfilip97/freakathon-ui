import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BuzzBuddy</Text>
      <Image style={styles.logo} source={require('../../assets/peeps.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '12%',
  },
  title: {
    marginTop: 20,
    fontSize: 32,
    fontFamily: 'MochiyPopOne',
  },
  logo: {
    resizeMode: 'contain',
    width: '120%',
    marginBottom: 20,
  },
});

export default SplashScreen;
