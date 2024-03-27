import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import EventSection from '../profileScreen/eventSection';
import mockedYourEvents from './mockedYourEvents';
import { useEvents } from '../../hooks/useEvents';

const YourEventsScreen = () => {
  const { your_events: yourEvents }= useEvents();

  return (
    <View>
      <ScrollView >
        <EventSection events={yourEvents} />
      </ScrollView>
    </View>
  );
}

export default YourEventsScreen;
