import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have this installed
import theme from '../../../theme';

const FindFriendsScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');
  const [found, setFound] = useState(false);
  const [inviteSent, setInviteSent] = useState(false);

  const handleSearch = () => {
    setFound(true);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Find Friends" />
      </Appbar.Header>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Search tags..."
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleSearch}>
          <MaterialIcons name="search" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
      {found && (
        <View style={styles.resultSection}>
          <View style={styles.circle}>
            <Image
              source={require('../../../assets/emo-fox.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.tagText}>@{inputValue}</Text>
          <TouchableOpacity style={styles.addButton}>
            {inviteSent === true ? (
              <MaterialIcons
                name="check"
                size={24}
                color={theme.colors.primary}
                onPress={() => setInviteSent(false)}
              />
            ) : (
              <Text style={styles.addButtonText} onPress={() => setInviteSent(true)}>+</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.secondary,
    paddingTop: 10,
  },
  magnifyIcon: {
    marginRight: 10,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 10,
    width: '90%',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
    color: '#424242',
    borderRadius: 20,
  },
  addButton: {
    marginLeft: 10,
    color: theme.colors.primary,
  },
  addButtonText: {
    fontSize: 32,
    color: '#000000',
    color: theme.colors.primary,
  },
  resultSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '90%',
    marginVertical: 10,
    marginLeft: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000000',
  },
  tagText: {
    color: '#000',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // padding: 10,
    borderColor: '#000',
    // marginRight: 10,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    resizeMode: 'contain',
    borderRadius: 25,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FindFriendsScreen;
