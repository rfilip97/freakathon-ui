import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../theme';

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
        <TouchableOpacity onPress={handlePress}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.tag, { color: colors.primary }]}>
              {userTag}
            </Text>
            <Icon
              name="qrcode-scan"
              size={24}
              color={colors.primary}
              style={styles.qrIcon}
            />
          </View>
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
    backgroundColor: theme.colors.primary,
  },
  name: {
    fontSize: theme.fonts.large.fontSize,
    fontWeight: 'bold',
    marginTop: '3%',
  },
  tag: {
    fontSize: theme.fonts.regular.fontSize,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '4%',
  },
  qrIcon: {
    marginLeft: 2,
  },
});

export default ProfileSection;
