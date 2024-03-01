import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen = ({ route }) => {
  const { username, userTag } = route.params;
  const qrValue = `https://meety.com/profile/${userTag}`;

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.userTag}>{userTag}</Text>
      <View style={styles.qrCodeContainer}>
        <QRCode value={qrValue} size={200} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userTag: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 20,
  },
  qrCodeContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
  },
});

export default QRCodeScreen;
