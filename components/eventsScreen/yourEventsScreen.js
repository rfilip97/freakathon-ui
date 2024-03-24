import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EventSection from '../profileScreen/eventSection';
import mockedYourEvents from './mockedYourEvents';

const Tab = createMaterialTopTabNavigator();

const YourEventsScreen = () => {
  return (
    <View>
      <ScrollView >
        <EventSection events={mockedYourEvents } />
      </ScrollView>
    </View>
  );
}

export default YourEventsScreen;
