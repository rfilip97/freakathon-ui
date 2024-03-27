import React, { useCallback } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import EventSection from '../profileScreen/eventSection';
import mockedYourEvents from './mockedYourEvents';
import { useEvents } from '../../hooks/useEvents';
import { useFocusEffect } from '@react-navigation/native';

const YourEventsScreen = () => {
  const { events, refetchEvents } = useEvents();
  const { your_events: yourEvents } = events;

  useFocusEffect(
    useCallback(() => {
      refetchEvents();
    }, [refetchEvents])
  );

  return (
    <View>
      <ScrollView >
        <EventSection events={yourEvents} />
      </ScrollView>
    </View>
  );
}

export default YourEventsScreen;
