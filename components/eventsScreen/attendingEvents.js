import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import EventSection from '../profileScreen/eventSection';
import mockedAttendingEvents from './mockedAttendingEvents';
import { useEvents } from '../../hooks/useEvents';

const AttendingEventsScreen = () => {
  const { attending_events: attendingEvents }= useEvents();

  return (
    <View>
      <ScrollView >
        <EventSection events={attendingEvents } />
      </ScrollView>
    </View>
  );
}

export default AttendingEventsScreen ;
