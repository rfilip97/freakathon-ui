import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import theme from '../../../theme';

const CustomHeader = ({ navigation, back }) => {
  const handleProfileIconPress = () => {
    navigation.navigate('Profile');
  };

  return (
    <Appbar.Header style={styles.header}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} color="white" />
      ) : null}
      <Appbar.Content title="Linking Locals" titleStyle={styles.logo} />
      <View style={styles.profileIconContainer}>
        <TouchableOpacity
          onPress={handleProfileIconPress}
          style={styles.profileIconContainer}
        >
          <Avatar.Icon
            icon="account"
            color="white"
            size={40}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  logo: {
    ...theme.fonts.logo,
  },
  header: {
    backgroundColor: theme.colors.primary,
  },
  profileIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profileIcon: {
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: theme.colors.secondary,
  },
});

export default CustomHeader;
