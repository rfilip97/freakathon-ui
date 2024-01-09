import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { friends } from '../friendListScreen';

const StartBuzzScreen = ({ navigation }) => {
  const [isSearching, setIsSearching] = useState(false);

  const startSearch = () => {
    setIsSearching(true);

    setTimeout(() => {
      const randomFriend = friends[Math.floor(Math.random() * friends.length)];
      setIsSearching(false);

      navigation.navigate('Chat', { friend: randomFriend });
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a Buzz</Text>

      <Button title="Find someone to chat with!" onPress={startSearch} />

      {isSearching && (
        <View style={styles.searchContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.searchingText}>Searching...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  graphic: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  searchContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  searchingText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default StartBuzzScreen;
