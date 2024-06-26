import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import { connect } from 'react-redux';
import theme from '../../../theme';

const UserDetailsDisplay = ({ firstName, lastName }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {firstName} {lastName}
    </Text>
  </View>
);

const mapStateToProps = (state) => ({
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: StatusBar.currentHeight || '7%',
    right: '5%',
    padding: 10,
  },
  text: {
    fontSize: theme.fonts.regular.fontSize,
  },
});

export default connect(mapStateToProps)(UserDetailsDisplay);
