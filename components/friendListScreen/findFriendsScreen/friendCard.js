import { StyleSheet, LogBox } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const FriendCard = ({ friend }) => {
  // TODO: fix warning :(
  LogBox.ignoreLogs(['When setting overflow to hidden on Surface']);

  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: friend.imageUri }} style={styles.cardCover} />
      <Card.Content style={styles.cardContent}>
        <Title>{friend.name}</Title>
        <Paragraph>{friend.tag}</Paragraph>
        <Paragraph>
          {friend.interests.slice(0, 3).join(', ') +
            (friend.interests.length > 3 ? '...' : '')}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    flex: 1 / 2,
    overflow: 'hidden',
  },
  cardCover: {
    height: 125,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,    // TODO: decide if we want rounded corners on bottom of card cover UwU
  },
});

export default FriendCard;
