import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../theme';
import image from '../../assets/peepos.png';
import AnonymousGroups from './anonymousChats';

const MainScreen = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [haveActiveChat, setHaveActiveChat] = useState(true);

  const handlePress = () => {
    setIsSearching(true);
  };

  const NoChatView = () => {
    return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.description}>
          Engage in intriguing, anonymous chats with like-minded individuals
          through our "Anonymous Conversation" feature. Over a 24/48 hour
          period, connect, share, and decide whether to reveal your identities
          and maintain the group, or leave the chat with the mystery preserved.
          A single tap initiates a tailored matchmaking process, aligning
          interests and preferences for a meaningful exchange.
        </Text>
        <TouchableOpacity
          style={[
            styles.button,
            isSearching ? styles.buttonInactive : styles.buttonActive,
          ]}
          onPress={handlePress}
          disabled={isSearching}
        >
          {isSearching ? (
            <Ionicons name="hourglass" size={20} color="white" />
          ) : (
            <Icon name="incognito" size={20} color="white" />
          )}
          <Text style={styles.buttonText}>Request an anonymous chat</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const WithActiveChat = () => {
    return (
      <View style={styles.container}>
        <AnonymousGroups />
        <TouchableOpacity
          style={[
            styles.button,
            isSearching ? styles.buttonInactive : styles.buttonActive,
          ]}
          onPress={handlePress}
          disabled={isSearching}
        >
          {isSearching ? (
            <Ionicons name="hourglass" size={20} color="white" />
          ) : (
            <Icon name="incognito" size={20} color="white" />
          )}
          <Text style={styles.buttonText}>Request an anonymous chat</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return haveActiveChat ? <WithActiveChat /> : <NoChatView />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: theme.colors.secondary,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  description: {
    fontSize: theme.fonts.regular.fontSize,
    textAlign: 'left',
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
  },
  bannerText: {
    color: 'white',
    marginLeft: 10,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
  },
  buttonActive: {
    backgroundColor: theme.colors.primary,
  },
  buttonInactive: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MainScreen;
