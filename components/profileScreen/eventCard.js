import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const EventCard = ({
  title,
  description,
  emoji,
  location,
  participants,
  date,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerEmoji}>{emoji}</Text>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.detailsLeft}>
            <Text style={styles.emoji}>📍</Text>
            {location}
          </Text>
          <Text style={styles.detailsRight}>
            <Text style={styles.emoji}>👥</Text>
            {participants}
          </Text>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>Join on {date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginVertical: 10,
    overflow: 'hidden',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    backgroundColor: '#8C1111',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerEmoji: {
    fontSize: 24,
    marginRight: 8,
  },
  headerText: {
    color: '#FBF4F4',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  detailsLeft: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsRight: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  emoji: {
    fontSize: 16,
  },
  cardFooter: {
    backgroundColor: '#8C1111',
    padding: 10,
  },
  footerText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default EventCard;