import React from 'react';
import { View, StyleSheet } from 'react-native';
import EventsMenu from './eventsMenu';

const EventsScreen = () => {
  return (
    <View style={styles.container}>
      <EventsMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EventsScreen;
