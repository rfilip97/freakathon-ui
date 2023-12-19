import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

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
    firstName: 'Carmen',
    lastName: 'Serban',
    status: 'online',
    imageUri: 'https://picsum.photos/202',
  },
];

const FriendListScreen = () => {
  const renderFriend = ({ item }) => (
    <View style={styles.friendContainer}>
      <Image source={{ uri: item.imageUri }} style={styles.friendImage} />
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{item.lastName} {item.firstName}</Text>
        <View style={styles.statusContainer}>
          <View style={item.status === 'online' ? styles.statusDotOnline : styles.statusDotOffline} />
          <Text style={styles.friendStatus}>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={friends}
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
