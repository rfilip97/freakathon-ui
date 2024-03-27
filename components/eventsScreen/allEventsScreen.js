import React, { useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import EventSection from '../profileScreen/eventSection';
import mockedAllEvents from './mockedAllEvents';
import { useEvents } from '../../hooks/useEvents';
import { useFocusEffect } from '@react-navigation/native';

const AllEventsScreen = () => {
  const { events, refetchEvents } = useEvents();
  const { all_events: allEvents } = events;

  useFocusEffect(
    useCallback(() => {
      refetchEvents();
    }, [refetchEvents])
  );

  return (
    <View>
      <ScrollView>
        <EventSection events={allEvents} refetchEvents={refetchEvents} />
      </ScrollView>
    </View>
  );
};

export default AllEventsScreen;
