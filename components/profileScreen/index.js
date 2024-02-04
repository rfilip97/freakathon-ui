import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import mockedUserDetails from './mockedUserDetails';

const ProfileScreen = ({ route }) => {
  const { userId } = route.params;
  const userDetails = mockedUserDetails[userId];

  if (!userDetails) {
    return <Text>User not found.</Text>;
  }

  return (
    <View>
      <Text>{userDetails.fullName}</Text>
      <Text>{userDetails.tagName}</Text>
      <Text>Buddies: {userDetails.buddies}</Text>
      <Text>App Age: {userDetails.appAge}</Text>
      <View>
        {userDetails.interests.map((interest, index) => (
          <Text key={index}>
            {interest}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;
