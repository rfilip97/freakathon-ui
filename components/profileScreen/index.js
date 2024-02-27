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
import mockedEvents from './mockedEvents';
import { Avatar } from 'react-native-paper';
import EventCard from './eventCard';
import EventSection from './eventSection';

const Chip = ({ text, onRemove }) => (
  <View style={styles.chip}>
    <Text style={styles.chipText}>{text}</Text>
    <TouchableOpacity onPress={onRemove}>
      <Text style={styles.chipRemoveButton}>×</Text>
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
        <Chip
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
  const userTag = '@maimutadepresiva21';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Avatar.Icon size={100} icon="account" style={styles.avatar} />
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.tag}>{userTag}</Text>
      </View>
      <Interests interests={interests} setInterests={setInterests} />

      <EventSection events={mockedEvents}/>
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
  tag: {
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

  chip: {
    backgroundColor: '#8C1111',
    borderRadius: 20,
    paddingHorizontal: 9,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  chipText: {
    color: 'white',
    fontSize: 14,
    marginRight: 4,
  },
  chipRemoveButton: {
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
    margin: 4,
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
    paddingHorizontal: 20,
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
