import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventCard from './eventCard';
import theme from '../../theme';

const EventSection = ({ events }) => {
  return (
    <View style={styles.eventsSection}>
      <Text style={styles.sectionTitle}>Your Events:</Text>
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          emoji={event.emoji}
          description={event.description}
          location={event.location}
          date={event.date}
          participants={event.participants}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  eventsSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: theme.fonts.big.fontSize,
    fontWeight: 'bold',
  },
});

export default EventSection;
