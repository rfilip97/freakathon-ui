import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import theme from '../../theme';
import { Repository } from '../../repository';
import { useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/selectors';

const EventCard = ({
  id,
  title,
  description,
  emoji,
  location,
  participants,
  date,
  joined,
  refetchEvents,
}) => {
  const userDetails = useSelector(getUserDetails);
  const { token } = userDetails;

  const joinEvent = async () => {
    try {
      const response = await Repository.joinEvent(token, id);
      if (response) {
        refetchEvents && refetchEvents();
      }
    } catch (error) {
      console.error('Joining event failed:', error);
    }
  };

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
            {participants}/6 joined
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={joinEvent}>
        {joined ? (
          <View style={styles.cardFooterJoined}>
            <Text style={styles.footerText}>Joined on {date}</Text>
          </View>
        ) : (
          <View style={styles.cardFooter}>
            <Text style={styles.footerText}>Join on {date}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
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
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerEmoji: {
    fontSize: theme.fonts.large.fontSize,
    marginRight: 8,
  },
  headerText: {
    color: theme.colors.secondary,
    textAlign: 'center',
    fontSize: theme.fonts.big.fontSize,
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 10,
  },
  description: {
    fontSize: theme.fonts.regular.fontSize,
    marginBottom: 4,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  detailsLeft: {
    fontSize: theme.fonts.regular.fontSize,
    fontWeight: 'bold',
  },
  detailsRight: {
    fontSize: theme.fonts.regular.fontSize,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  emoji: {
    fontSize: theme.fonts.regular.fontSize,
  },
  cardFooter: {
    backgroundColor: theme.colors.primary,
    padding: 10,
  },
  cardFooterJoined: {
    backgroundColor: theme.colors.primaryFocused,
    padding: 10,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: theme.fonts.regular.fontSize,
  },
});

export default EventCard;
