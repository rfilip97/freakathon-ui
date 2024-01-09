import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const friends = [
  {
    id: '1',
    firstName: 'Daniel',
    lastName: 'Mocanu',
    status: 'online',
    imageUri: 'https://picsum.photos/200',
  },
  {
    id: '2',
    firstName: 'Michael',
    lastName: 'Jackson',
    status: 'offline',
    imageUri: 'https://picsum.photos/201',
  },
  {
    id: '3',
    firstName: 'Catgirl',
    lastName: 'Ur',
    status: 'online',
    imageUri: 'https://picsum.photos/202',
  },
];

const FriendListScreen = ({ navigation }) => {
  const sortedFriends = [...friends].sort((a, b) => {
    if (a.status === 'online' && b.status === 'offline') {
      return -1;
    }
    if (a.status === 'offline' && b.status === 'online') {
      return 1;
    }
    return 0;
  });

  const renderFriend = ({ item }) => (
    <TouchableOpacity 
      style={styles.friendContainer}
      onPress={() => navigation.navigate('Chat', { friend: item })}
      activeOpacity={0.6}
    >
      <Image source={{ uri: item.imageUri }} style={styles.friendImage} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.lastName} {item.firstName}</Text>
        <View style={styles.statusContainer}>
          <View style={item.status === 'online' ? styles.statusDotOnline : styles.statusDotOffline} />
          <Text style={styles.friendStatus}>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={sortedFriends}
      renderItem={renderFriend}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  friendInfo: {
    justifyContent: 'center',
  },
  friendName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDotOnline: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 5,
  },
  statusDotOffline: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
    marginRight: 5,
  },
  friendStatus: {
    fontSize: 16,
  },
});

export default FriendListScreen;
