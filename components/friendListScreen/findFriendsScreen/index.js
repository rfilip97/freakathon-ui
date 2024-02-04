import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';
import FriendCard from './friendCard';
import mockedFriendsData from './mockedFriends';

const FindFriendsScreen = ({ navigation }) => {
  const [nameQuery, setNameQuery] = useState('');
  const [hobbyQuery, setHobbyQuery] = useState('');

  // TODO: fetch instead of mock
  const friends = mockedFriendsData

  const filteredFriends = friends.filter((friend) => {
    const nameMatch = friend.name.toLowerCase().includes(nameQuery.toLowerCase());
    const tagMatch = friend.tag.toLowerCase().includes(nameQuery.toLowerCase());
    const hobbyMatch = hobbyQuery
      ? friend.interests.some((interest) =>
          interest.toLowerCase().includes(hobbyQuery.toLowerCase())
        )
      : true;
    return (nameMatch || tagMatch) && hobbyMatch;
  });

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Find Friends" />
      </Appbar.Header>

      <TextInput
        placeholder="Search by name"
        value={nameQuery}
        onChangeText={setNameQuery}
        style={styles.input}
      />
      <TextInput
        placeholder="Search by hobbies"
        value={hobbyQuery}
        onChangeText={setHobbyQuery}
        style={styles.input}
      />
      <FlatList
        data={filteredFriends}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <FriendCard friend={item} />}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '10%'
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  input: {
    margin: 8,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default FindFriendsScreen;
