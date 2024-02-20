import React from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const CustomHeader = ({ navigation, back }) => {
  return (
    <Appbar.Header style={styles.header}>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} color="white" />
      ) : null}
      <Appbar.Content title="MEETY" titleStyle={styles.logo} />
      <View style={styles.profileIconContainer}>
        <Avatar.Icon
          icon="account"
          color={'white'}
          size={40}
          style={styles.profileIcon}
        />
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontFamily: 'Sarina',
    fontSize: 24,
    color: '',
  },
  header: {
    backgroundColor: '#8C1111',
  },
  profileIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  profileIcon: {
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: '#FBF4F4',
  },
});

export default CustomHeader;
