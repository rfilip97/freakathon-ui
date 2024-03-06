import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import mockedEvents from './mockedEvents';
import EventSection from './eventSection';
import InterestsSection from './interestsSection';
import ProfileSection from './profileSection';
import theme from '../../theme';

const ProfileScreen = ({navigation}) => {
  const [interests, setInterests] = useState(['Music', 'Sports', 'Coding']);
  const username = 'Popa Ionica';
  const userTag = '@maimutadepresiva21';

  return (
    <ScrollView style={styles.container}>
      <ProfileSection username={username} userTag={userTag} navigation={navigation} />
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
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: theme.fonts.big.fontSize,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
