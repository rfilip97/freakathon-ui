import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { FAB } from 'react-native-paper';
import theme from '../../theme';
import { Repository } from '../../repository';
import { useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/selectors';

function generateUserObjects(names) {
  return names.map((name, index) => {
    const [firstName, lastName] = name.split(' ');
    return {
      id: index + 1,
      imageUri: `https://picsum.photos/200?random=${index + 1}`,
      status: 'offline',
      firstName: firstName,
      lastName: lastName,
    };
  });
}

const FriendListScreen = ({ navigation }) => {
  const userDetails = useSelector(getUserDetails);
  const { id, token } = userDetails;
  const [friends, setFriends] = useState([]);
  const [pendingFriends, setPendingFriends] = useState([]);

  const getFriends = async () => {
    try {
      const response = await Repository.getFriends(token, id);
      if (response) {
        const friends = response.items[0].friend_list.map(
          (friend) => friend.name
        );
        const friendsData = generateUserObjects(friends);
        setFriends(friendsData);

        const pendingFriends = response.items[0].pending_list;
        setPendingFriends(pendingFriends);

        console.log('aaaaaa ' + JSON.stringify(pendingFriends));
      }
    } catch (error) {}
  };

  useEffect(() => {
    getFriends();
  }, []);

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
        <Text style={styles.friendName}>
          {item.lastName} {item.firstName}
        </Text>
        <View style={styles.statusContainer}>
          <View
            style={
              item.status === 'online'
                ? styles.statusDotOnline
                : styles.statusDotOffline
            }
          />
          <Text style={styles.friendStatus}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderPendingFriend = ({ item }) => (
    <View style={styles.pendingFriendContainer}>
      <View style={styles.pendingFriendLeftSide}>
      <Image source={{ uri: `https://picsum.photos/200?random=${item.id}` }} style={styles.friendImage} />
      <Text style={styles.pendingFriendName}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={styles.acceptButton}
        onPress={() => {/* handle accept friend request logic here */}}
      >
        <Text style={styles.acceptButtonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Friends</Text>
      <FlatList
        data={sortedFriends}
        renderItem={renderFriend}
        style={{ maxHeight: 10 * sortedFriends.length }}
        keyExtractor={(item) => `${item.id}`}
      />

      <Text style={styles.sectionTitle}>Friend Requests</Text>
      <FlatList
        data={pendingFriends}
        renderItem={renderPendingFriend}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No pending friend requests</Text>}
      />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('FindFriends')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  friendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.colors.secondary,
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
    fontSize: theme.fonts.big.fontSize,
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
    fontSize: theme.fonts.regular.fontSize,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  pendingFriendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16, 
  },
  friendInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  pendingFriendLeftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: theme.fonts.large.fontSize,
    paddingLeft: 10,
    paddingTop: 10
  }
});

export default FriendListScreen;
