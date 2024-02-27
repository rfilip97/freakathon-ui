import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

const ProfileSection = ({username, userTag}) => {
  return (
    <View style={styles.profileSection}>
      <Avatar.Icon size={100} icon="account" style={styles.avatar} />
      <Text style={styles.name}>{username}</Text>
      <Text style={styles.tag}>{userTag}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ProfileSection;
