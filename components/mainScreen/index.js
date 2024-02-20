import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/peepos.png')} style={styles.image} />
      <Text style={styles.description}>
        Engage in intriguing, anonymous chats with like-minded individuals
        through our "Anonymous Conversation" feature. Over a 24/48 hour period,
        connect, share, and decide whether to reveal your identities and
        maintain the group, or leave the chat with the mystery preserved. A
        single tap initiates a tailored matchmaking process, aligning interests
        and preferences for a meaningful exchange.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Icon name="incognito" size={20} color="white" />
        <Text style={styles.buttonText}>Request an anonymous chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    backgroundColor: '#8C1111',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default MainScreen;
