import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import theme from '../../../theme';

const { height } = Dimensions.get('window');

const QRCodeScreen = ({ route }) => {
  const { username, userTag } = route.params;

  // TMP. Update after starting the development server
  const qrValue = `exp://192.168.10.171:19000/--/profile/${userTag}`;

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
    justifyContent: 'flex-start',
    paddingTop: height / 12,
    paddingHorizontal: 20,
  },
  username: {
    fontSize: theme.fonts.large.fontSize,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userTag: {
    fontSize: theme.fonts.big.fontSize,
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
