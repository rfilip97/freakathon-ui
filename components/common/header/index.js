import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomHeader = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Buzz Buddy" titleStyle={styles.title} />
      <Appbar.Action icon="account" onPress={() => {}} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'MochiyPopOne',
  },
});

export default CustomHeader;
