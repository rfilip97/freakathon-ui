import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventCard from './eventCard';
import theme from '../../theme';

const EventSection = ({ events, refetchEvents }) => {
  return (
    <View style={styles.eventsSection}>
      <Text style={styles.sectionTitle}>Your Events:</Text>
      {events && events.map((event, index) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          emoji={event.emoji}
          description={event.description}
          location={event.location}
          date={event.date}
          participants={event.attendants_count}
          joined={!event.can_attend}
          refetchEvents={refetchEvents}
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
