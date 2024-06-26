import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../redux/actions/userActions';
import { useLogin, AuthStates } from '../../hooks/useLogin';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const redirectToMainTabs = (userData) => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    });

    dispatch(setUserDetails(userData));
  };

  const [authState, login] = useLogin(redirectToMainTabs);

  const handleLogin = () => {
    login(email, password);
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
        <Ionicons name="chevron-back" size={30} color={theme.colors.primary} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Authentication</Text>
        <Ionicons
          name="person-circle-outline"
          size={100}
          color={theme.colors.primary}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Username/Email"
          value={email}
          onChangeText={setEmail}
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
        {authState === AuthStates.LOADING && <Text style={styles.statusText}>Loading...</Text>}
        {authState === AuthStates.DENIED && (
          <Text style={styles.statusText}>Login Failed. Please try again.</Text>
        )}
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
    backgroundColor: theme.colors.secondary,
    paddingLeft: 10,
  },
  backButton: {
    marginLeft: 9,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
    padding: 20,
  },
  title: {
    fontSize: theme.fonts.large.fontSize,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 20,
  },
  icon: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: theme.colors.gray,
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: theme.fonts.big.fontSize,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
	statusText: {
		paddingBottom: 5
	}
});

export default LoginScreen;
