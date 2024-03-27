import React, { useCallback } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import EventSection from '../profileScreen/eventSection';
import mockedAttendingEvents from './mockedAttendingEvents';
import { useEvents } from '../../hooks/useEvents';
import { useFocusEffect } from '@react-navigation/native';

const AttendingEventsScreen = () => {
  const { events, refetchEvents } = useEvents();
  const { attending_events: attendingEvents } = events;

  useFocusEffect(
    useCallback(() => {
      refetchEvents();
    }, [refetchEvents])
  );

  return (
    <View>
      <ScrollView >
        <EventSection events={attendingEvents } />
      </ScrollView>
    </View>
  );
}

export default AttendingEventsScreen ;
