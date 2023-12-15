import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>React Native Paper</Title>
          <Paragraph>This is a card from React Native Paper</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => console.log('Pressed')}>Press me</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    margin: 10,
  }
});

export default MainScreen;
