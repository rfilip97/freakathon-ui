import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const AllEventsScreen = () => {
  return (
    <View>
      <Text>Linking Locals</Text>
    </View>
  );
}

export default AllEventsScreen;
