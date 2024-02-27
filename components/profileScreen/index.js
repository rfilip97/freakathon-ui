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
import EventSection from './eventSection';
import InterestsSection from './interestsSection';
import ProfileSection from './profileSection';

const ProfileScreen = () => {
  const [interests, setInterests] = useState(['Music', 'Sports', 'Coding']);
  const username = 'Popa Ionica';
  const userTag = '@maimutadepresiva21';

  return (
    <ScrollView style={styles.container}>
      <ProfileSection username={username} userTag={userTag} />
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
