import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import mockedEvents from './mockedEvents';
import EventSection from './eventSection';
import InterestsSection from './interestsSection';
import ProfileSection from './profileSection';
import theme from '../../theme';

const ProfileScreen = ({ navigation }) => {
  const [interests, setInterests] = useState(['Music', 'Sports', 'Coding']);
  const username = 'Popa Ionica';
  const userTag = '@maimutadepresiva21';

  return (
    <View style={styles.fullScreen}>
      <ScrollView style={styles.container}>
        <ProfileSection
          username={username}
          userTag={userTag}
          navigation={navigation}
        />
        <InterestsSection interests={interests} setInterests={setInterests} />
        <EventSection events={mockedEvents} />
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('CreateEvent')}
      >
        <Text style={styles.floatingButtonText}>Create new Events</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: 80,
  },
  container: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  floatingButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: theme.fonts.big.fontSize,
  },
});

export default ProfileScreen;
