import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const handleSignUpPress = () => {
  console.log('Sign Up pressed');
};

const LandingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperHalf}>
        <Text style={styles.logo}>MEETY</Text>
        <Image
          source={require('../../assets/peepos.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.lowerHalf}>
        <Text style={styles.description}>
          In the bustling rhythm of life, finding time to catch up with friends
          can be a challenge. That's where Meety comes in — the app designed to
          simplify the way we plan and enjoy gatherings.
        </Text>
        <Text style={styles.tagline}>Connect, Plan, and Meet 😃</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText} onPress={handleSignUpPress}>
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C1111',
  },
  upperHalf: {
    flex: 0.65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerHalf: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Sarina',
    fontSize: 24,
    color: 'white',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  description: {
    paddingHorizontal: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
  tagline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
    marginTop: 40,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 25,
    marginVertical: 5,
    marginBottom: 20
  },
  loginButtonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signUpText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default LandingPage;
