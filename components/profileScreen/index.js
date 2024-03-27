import React, { useState, useCallback } from 'react';
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
import { useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/selectors';
import { useEvents } from '../../hooks/useEvents';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = ({ navigation }) => {
  const [interests, setInterests] = useState(['Music', 'Sports', 'Coding']);
  const userDetails = useSelector(getUserDetails);
  const { events, refetchEvents } = useEvents();
  const { your_events: yourEvents } = events;

  const { name, tag } = userDetails;

  useFocusEffect(
    useCallback(() => {
      refetchEvents();
    }, [refetchEvents])
  );

  return (
    <View style={styles.fullScreen}>
      <ScrollView style={styles.container}>
        <ProfileSection username={name} userTag={tag} navigation={navigation} />
        <InterestsSection interests={interests} setInterests={setInterests} />
        <EventSection events={yourEvents} />
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
