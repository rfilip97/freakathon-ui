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
import theme from '../../theme';
import { useRegister, AuthStates } from '../../hooks/useRegister';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const redirectToMainTabs = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    });
  };

  const [authState, register] = useRegister(redirectToMainTabs);

  const handleRegister = () => {
    if (password !== passwordConfirm) {
      alert('Passwords do not match.');
      return;
    }

    register({ username, password, passwordConfirm, name, email });
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
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>
        {authState === AuthStates.LOADING && <Text style={styles.statusText}>Loading...</Text>}
        {authState === AuthStates.ERROR && (
          <Text style={styles.statusText}>Registration Failed. Please try again.</Text>
        )}
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

export default RegisterScreen;
