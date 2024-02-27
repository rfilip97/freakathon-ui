import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import Chip from './chip';

const InterestsSection = ({ interests, setInterests }) => {
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

const styles = StyleSheet.create({
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
export default InterestsSection;