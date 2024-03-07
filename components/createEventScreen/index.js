import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme';
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateEventScreen = () => {
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [limit, setLimit] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [errors, setErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const validateFields = () => {
    let valid = true;
    let newErrors = {};

    if (!eventName.trim()) {
      newErrors.eventName = 'Event name is required.';
      valid = false;
    }
    if (!location.trim()) {
      newErrors.location = 'Location is required.';
      valid = false;
    }
    if (!limit.trim()) {
      newErrors.limit = 'Limit is required.';
      valid = false;
    } else if (!Number.isInteger(Number(limit)) || Number(limit) <= 0) {
      newErrors.limit = 'Limit must be a positive whole number.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      // Submit data
    }
  };

  return (
    <View style={styles.fullScreen}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Create Your Event</Text>

        <View style={styles.inputWithErrorContainer}>
          {errors.eventName && (
            <Text style={styles.errorText}>{errors.eventName}</Text>
          )}
          <View style={styles.inputContainer}>
            <Icon name="text-box-outline" size={24} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Event name"
              placeholderTextColor="gray"
              value={eventName}
              onChangeText={setEventName}
            />
          </View>
        </View>

        <View style={styles.inputWithErrorContainer}>
          {errors.date && <Text style={styles.errorText}>{errors.date}</Text>}
          <View style={styles.inputContainer}>
        <Icon name="calendar-range" size={24} color="#FFF" />
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.input}>
            {date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showDatePicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDatePicker(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.datePickerContainer}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'inline' : 'calendar'}
              onChange={onDateChange}
              style={styles.datePicker}
            />
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => setShowDatePicker(false)}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </View>

        <View style={styles.inputWithErrorContainer}>
          {errors.location && (
            <Text style={styles.errorText}>{errors.location}</Text>
          )}
          <View style={styles.inputContainer}>
            <Icon name="map-marker-outline" size={24} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Location"
              placeholderTextColor="gray"
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>
        <View style={styles.inputWithErrorContainer}>
          {errors.limit && <Text style={styles.errorText}>{errors.limit}</Text>}
          <View style={styles.inputContainer}>
            <Icon name="account-group-outline" size={24} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Limit"
              placeholderTextColor="gray"
              value={limit}
              onChangeText={(text) => setLimit(text.replace(/[^0-9]/g, ''))}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.description]}
            placeholder="Description"
            placeholderTextColor="gray"
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Public:</Text>
          <Switch onValueChange={setIsPublic} value={isPublic} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton} onPress={handleSubmit}>
        <Text style={styles.floatingButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.secondary,
  },
  headerText: {
    fontSize: theme.fonts.large.fontSize,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  inputWithErrorContainer: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    color: 'white',
    fontSize: theme.fonts.regular.fontSize,
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
    color: 'white',
  },
  errorText: {
    position: 'absolute',
    top: -20,
    left: 10,
    color: 'red',
    fontSize: 14,
    zIndex: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  switchLabel: {
    fontSize: theme.fonts.regular.fontSize,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    elevation: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  floatingButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: theme.fonts.big.fontSize,
  },
  dateText: {
    color: 'white',
    fontSize: theme.fonts.regular.fontSize,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  datePickerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  datePicker: {
    width: '100%',
    backgroundColor: 'white',
  },
  doneButton: {
    marginTop: 10,
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreateEventScreen;
