import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

const GroupChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      timestamp: Date.now() - 3000,
      sender: 'FluffyBear92',
      value: 'Hey there!',
      color: '#DFF8C8',
    },
    {
      timestamp: Date.now() - 2000,
      sender: 'HappyFrog56',
      value: "Hello, my new friends! I'm happy to meet you. What's up?",
      color: '#FED8B1',
    },
  ]);
  const [text, setText] = useState('');
  const currentUser = 'SlyFox43';

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  };

  const sendMessage = () => {
    if (text) {
      const newMessage = {
        timestamp: Date.now(),
        sender: currentUser,
        value: text,
        color: '#FFFFFF',
      };

      setMessages([...messages, newMessage]);
      setText('');
    }
  };

  const renderMessage = ({ item }) => {
    const isCurrentUser = item.sender === currentUser;
    const messageStyle = isCurrentUser
      ? styles.currentUserMessage
      : styles.otherUserMessage;
    const messageBoxStyle = {
      ...styles.messageBox,
      backgroundColor: item.color,
      alignSelf: isCurrentUser ? 'flex-end' : 'flex-start',
    };

    return (
      <View style={messageStyle}>
        <View style={messageBoxStyle}>
          <Text style={styles.senderName}>{item.sender}</Text>
          <Text style={styles.messageValue}>{item.value}</Text>
          <Text style={styles.messageTime}>{formatTime(item.timestamp)}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ChatHeader />
      <View style={styles.messagesContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.timestamp.toString()}
          renderItem={renderMessage}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ChatHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.imagesOverlapContainer}>
        <View
          style={[
            styles.circle,
            styles.leftCircle,
            { backgroundColor: '#FFD700' },
          ]}
        >
          <Image
            source={require('../../assets/emo-bear.png')}
            style={styles.animalImage}
          />
        </View>
        <View
          style={[
            styles.circle,
            styles.middleCircle,
            { backgroundColor: '#008000' },
          ]}
        >
          <Image
            source={require('../../assets/emo-frog.png')}
            style={styles.animalImage}
          />
        </View>
        <View
          style={[
            styles.circle,
            styles.rightCircle,
            { backgroundColor: '#FFA500' },
          ]}
        >
          <Image
            source={require('../../assets/emo-fox.png')}
            style={styles.animalImage}
          />
        </View>
      </View>
      <Text style={styles.descriptionText}>
        One day, SlyFox43 met HappyFrog56 and FluffyBear92 in the forest, and
        this was the beginning of a long friendship.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  list: {
    flex: 1,
  },
  messageBox: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 2,
    maxWidth: '80%',
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 2,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  currentUserMessage: {
    backgroundColor: '#ddf',
    alignSelf: 'flex-end',
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
  currentUserMessage: {
    alignSelf: 'flex-end',
    marginVertical: 4,
  },
  otherUserMessage: {
    alignSelf: 'flex-start',
    marginVertical: 4,
  },
  currentUserMessageBox: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  otherUserMessageBox: {
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 2,
    marginRight: '20%',
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  senderName: {
    fontWeight: 'bold',
  },
  messageValue: {
    marginTop: 2,
  },
  messageTime: {
    alignSelf: 'flex-end',
    fontSize: 10,
    opacity: 0.6,
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
  // header styles
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagesOverlapContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15,
    zIndex: 1,
  },
  animalImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  overlapImage: {
    zIndex: 2,
    marginLeft: -15,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 20,
    color: 'gray',
    paddingVertical: 20,
  },
  imagesOverlapContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animalImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  overlapImage: {
    position: 'absolute',
  },
  leftCircle: {
    zIndex: 1,
  },
  middleCircle: {
    zIndex: 3,
    marginLeft: -20,
    marginTop: 30,
  },
  rightCircle: {
    zIndex: 1,
    marginLeft: -20,
  },
});

export default GroupChatScreen;
