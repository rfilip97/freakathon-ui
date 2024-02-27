import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
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

      <EventSection events={mockedEvents} />
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
});

export default ProfileScreen;
