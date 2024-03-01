import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileSection = ({ username, userTag, navigation }) => {
  const { colors } = useTheme();

  const handlePress = () => {
    navigation.navigate('QRCodeScreen', { username, userTag });
  };

  return (
    <View style={styles.profileSection}>
      <Avatar.Icon size={100} icon="account" style={styles.avatar} />
      <Text style={styles.name}>{username}</Text>
      <View style={styles.tagContainer}>
        <Text style={[styles.tag, { color: colors.primary }]}>{userTag}</Text>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="qrcode-scan" size={24} color={colors.primary} style={styles.qrIcon} />
        </TouchableOpacity>
      </View>
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
    marginRight: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '4%',
  },
  qrIcon: {
    marginLeft: 5, // Adjust spacing between text and icon as needed
  },
});

export default ProfileSection;
