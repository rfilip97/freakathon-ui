import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

const ChatScreen = ({ route }) => {
  const { friend } = route.params;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const hardcodedResponses = ['Javascript is my life!', 'Yes, daddy UwU'];

  const sendMessage = () => {
    if (text) {
      const newMessage = { id: `user_${Date.now()}`, text, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setText('');

      setTimeout(() => {
        setIsTyping(true);

        setTimeout(() => {
          const randomResponse =
            hardcodedResponses[
              Math.floor(Math.random() * hardcodedResponses.length)
            ];
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
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
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
    paddingBottom: '10%',
    paddingTop: '20%',
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

export default ChatScreen;
