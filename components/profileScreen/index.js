import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import mockedEvents from './mockedEvents';
import { Avatar } from 'react-native-paper';
import EventCard from './eventCard';
import EventSection from './eventSection';
import InterestsSection from './interestsSection';

const ProfileScreen = () => {
  const [interests, setInterests] = useState(['Music', 'Sports', 'Coding']);
  const username = 'Popa Ionica';
  const userTag = '@maimutadepresiva21';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Avatar.Icon size={100} icon="account" style={styles.avatar} />
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.tag}>{userTag}</Text>
      </View>
      <InterestsSection interests={interests} setInterests={setInterests} />

      <EventSection events={mockedEvents}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create new Events</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    backgroundColor: '#8C1111',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: '3%',
  },
  tag: {
    fontSize: 16,
    color: 'grey',
    marginBottom: '4%',
  },
  interestsSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  location: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  participants: {
    fontSize: 16,
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#8C1111',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  redLine: {
    height: 4,
    backgroundColor: '#8C1111',
  },
  circle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#8C1111',
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 200,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 8,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ProfileScreen;
