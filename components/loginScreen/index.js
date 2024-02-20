import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement the login logic
    console.log('Login button pressed');
  };

  const handleForgotPassword = () => {
    // TODO: Implement the forgot password logic
    console.log('Forgot Password pressed');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={30} color="#8C1111" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Authentication</Text>
        <Ionicons
          name="person-circle-outline"
          size={100}
          color="#8C1111"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
          Forgot your Password?
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FBF4F4',
    paddingLeft: 10,
  },
  backButton: {
    marginLeft: 9,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBF4F4',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8C1111',
    marginBottom: 20,
  },
  icon: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#8C1111',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#8C1111',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
