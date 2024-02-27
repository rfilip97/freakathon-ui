import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { Avatar } from 'react-native-paper';

const EventCard = ({ title, description, location, participants, date }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerEmoji}>🎮</Text>
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

const Tag = ({ text, onRemove }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{text}</Text>
    <TouchableOpacity onPress={onRemove}>
      <Text style={styles.tagRemoveButton}>×</Text>
    </TouchableOpacity>
  </View>
);

const Interests = ({ interests, setInterests }) => {
  const removeInterest = (interestToRemove) => {
    setInterests(interests.filter((interest) => interest !== interestToRemove));
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [newInterest, setNewInterest] = useState('');

  const addInterest = () => {
    if (newInterest.trim()) {
      setInterests([...interests, newInterest]);
      setNewInterest('');
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.interestsContainer}>
      {interests.map((interest, index) => (
        <Tag
          key={index}
          text={interest}
          onRemove={() => removeInterest(interest)}
        />
      ))}

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>Add +</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Type new interest..."
              value={newInterest}
              onChangeText={setNewInterest}
              style={styles.inputField}
            />
            <TouchableOpacity onPress={addInterest} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ProfileScreen = () => {
  const [interests, setInterests] = useState(['Music', 'Sports', 'Coding']);

  const username = 'Popa Ionica';
  const userHandle = '@maimutadepresiva21';
  const events = [
    {
      title: 'Dungeons & Dragons Night',
      description:
        'Greetings, Brave Adventurer! You are cordially invited to a night of mystery, magic, and endless adventure.',
      location: 'Razvan Residence Nr.14',
      date: '23 Feb 2024 17:00',
      participants: '3/6 joined',
    },
    {
      title: 'Chess Night',
      description:
        'Greetings, Brave Adventurer! You are cordially invited to a night of mystery, magic, and endless adventure.',
      location: 'Hilton Hotel Nr.14',
      date: '23 Feb 2024 17:00',
      participants: '1/6 joined',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Avatar.Icon size={100} icon="account" style={styles.avatar} />
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.handle}>{userHandle}</Text>
      </View>
      <Interests interests={interests} setInterests={setInterests} />

      <View style={styles.eventsSection}>
        <Text style={styles.sectionTitle}>Your Events:</Text>
        {events.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            location={event.location}
            date={event.date}
            participants={event.participants}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create new Events</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#8C1111',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#FBF4F4',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    backgroundColor: '#8C1111',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: '3%',
  },
  handle: {
    fontSize: 16,
    color: 'grey',
    marginBottom: '4%',
  },
  interestsSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  chip: {
    margin: 4,
  },
  eventsSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventCard: {
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#FFF',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    elevation: 4,
  },
  cardLeftStyle: {
    marginRight: 10,
  },
  cardTitleStyle: {
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  eventLocation: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  eventParticipants: {
    fontSize: 14,
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
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
  cardContent: {
    padding: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  participants: {
    fontSize: 16,
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
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
  button: {
    backgroundColor: '#8C1111',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  redLine: {
    height: 4,
    backgroundColor: '#8C1111',
  },
  circle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#8C1111',
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
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
  tag: {
    backgroundColor: '#8C1111',
    borderRadius: 20,
    paddingHorizontal: 9,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  tagText: {
    color: 'white',
    fontSize: 14,
    marginRight: 4,
  },
  tagRemoveButton: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  addButton: {
    backgroundColor: 'gray',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 4
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputField: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 200,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 8,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 20
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 30,
    color: 'gray',
  },
});

export default ProfileScreen;
