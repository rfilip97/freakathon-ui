import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme';

const CreateEventScreen = () => {
  const { colors } = useTheme();
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [limit, setLimit] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  return (
    <View style={styles.fullScreen}>
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Create Your Event</Text>

        <View style={styles.inputContainer}>
          <Icon name="text-box-outline" size={24} color="#FFF" />
          <TextInput
            style={styles.input}
            placeholder="Event name"
            placeholderTextColor="#FFF"
            value={eventName}
            onChangeText={setEventName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="calendar-range" size={24} color="#FFF" />
          <TextInput
            style={styles.input}
            placeholder="Date, time"
            placeholderTextColor="#FFF"
            value={date}
            onChangeText={setDate}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="map-marker-outline" size={24} color="#FFF" />
          <TextInput
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#FFF"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="account-group-outline" size={24} color="#FFF" />
          <TextInput
            style={styles.input}
            placeholder="Limit"
            placeholderTextColor="#FFF"
            value={limit}
            onChangeText={setLimit}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.description]}
            placeholder="Description"
            placeholderTextColor="#FFF"
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
      <TouchableOpacity style={styles.floatingButton} onPress={() => {}}>
        <Text style={styles.floatingButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
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
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: theme.fonts.big.fontSize,
    fontWeight: 'bold',
  },
  fullScreen: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: 80,
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
});

export default CreateEventScreen;
