import React, { useState } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import EventSection from '../profileScreen/eventSection';
import mockedAllEvents from './mockedAllEvents';
import { useEvents } from '../../hooks/useEvents';

const AllEventsScreen = () => {
  const { all_events: allEvents }= useEvents();

  return (
    <View>
      <ScrollView >
        <EventSection events={allEvents} />
      </ScrollView>
    </View>
  );
}

export default AllEventsScreen;
