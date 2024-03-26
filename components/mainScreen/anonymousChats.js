import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme';

const DATA = [
  {
    id: '1',
    groupName: 'Dungeons & Dragons Forest',
    lastMessage: 'FluffyBear12: Do we play tomorrow?',
    icon: 'forest',
    category: 'D&D',
    timeAgo: '43h 12m',
  },
  {
    id: '2',
    groupName: 'Soccer Field',
    lastMessage: 'SlyFox32: Do we play tomorrow?',
    icon: 'soccer',
    timeAgo: '23h 45m',
    category: 'Soccer',
  },
];

const AnonymousGroupsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Anonymous Groups:</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.friendContainer}
            onPress={() => navigation.navigate('Chat', { friend: item })}
            activeOpacity={0.6}
          >
            <View style={styles.groupContainer}>
              <View style={styles.iconContainer}>
                <Icon name={item.icon} size={30} style={styles.icon} />
              </View>
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>{item.groupName}</Text>
                <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              </View>
              <View style={styles.groupMeta}>
                <Text style={styles.timeAgo}>{item.timeAgo}</Text>
                <Text style={styles.category}>{item.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  groupContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: theme.colors.primary + '99',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {},
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontWeight: 'bold',
  },
  lastMessage: {
    color: '#555',
  },
  groupMeta: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '6%',
  },
  timeAgo: {
    fontSize: 12,
    color: '#999',
  },
  category: {
    marginTop: 4,
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    overflow: 'hidden',
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
});

export default AnonymousGroupsScreen;
