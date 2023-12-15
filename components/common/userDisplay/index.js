import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

const UserDetailsDisplay = ({ firstName, lastName }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{firstName} {lastName}</Text>
    </View>
);

const mapStateToProps = state => ({
    firstName: state.user.firstName,
    lastName: state.user.lastName
});

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 10
    },
    text: {
        fontSize: 16
    }
});

export default connect(mapStateToProps)(UserDetailsDisplay);
