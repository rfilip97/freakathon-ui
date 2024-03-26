import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import theme from '../../theme';

const GroupChatScreen = ({ route }) => {
  const { friend } = route.params;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const hardcodedResponses = [
    'Javascript is my life!',
    'Hold on, let me overthink this.',
    'Beep boop, I am a human. Totally.',
    'I’m not lazy, I’m on energy-saving mode.',
    'Can confirm, I’m not a robot. I’ve never even seen a captcha.',
    'Just dropped my taco...crisis mode activated!',
    'I would tell you a UDP joke, but you might not get it.',
    'I’m not arguing, I’m just explaining why I’m right.',
    'I’m not superstitious, but I am a little stitious.',
    'I’m not insulting you, I’m describing you.',
    'I’m really good at stuff until people watch me do that stuff.',
    'Some days, the best thing about my job is that the chair spins.',
    'Smile while you still have teeth.',
    'If at first you don’t succeed, then skydiving definitely isn’t for you.',
  ];

  const sendMessage = () => {
    if (text) {
      const newMessage = { id: `user_${Date.now()}`, text, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setText('');

      setTimeout(() => {
        setIsTyping(true);

        setTimeout(() => {
          const randomIndex = Math.floor(
            Math.random() * hardcodedResponses.length
          );
          const randomResponse = hardcodedResponses[randomIndex];

          const responseMessage = {
            id: `friend_${Date.now()}`,
            text: randomResponse,
            sender: 'friend',
          };
          setIsTyping(false);
          setMessages((prevMessages) => [...prevMessages, responseMessage]);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image source={{ uri: friend.imageUri }} style={styles.friendImage} />
          <Text style={styles.friendName}>
            {friend.lastName} {friend.firstName}
          </Text>
        </View>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <Text
            style={
              item.sender === 'user' ? styles.userMessage : styles.friendMessage
            }
          >
            {item.text}
          </Text>
        )}
      />
      {isTyping && (
        <Text style={styles.typingText}>{friend.firstName} is typing...</Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  friendName: {
    fontSize: theme.fonts.big.fontSize,
    fontWeight: 'bold',
    marginTop: 5,
  },
  list: {
    paddingTop: '10%',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#ddf',
    padding: 10,
    borderRadius: 10,
    marginVertical: 2,
  },
  friendMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fdd',
    padding: 10,
    borderRadius: 10,
    marginVertical: 2,
  },
  typingText: {
    alignSelf: 'flex-start',
    marginVertical: 5,
    marginLeft: 10,
    fontStyle: 'italic',
  },
});

export default GroupChatScreen;
