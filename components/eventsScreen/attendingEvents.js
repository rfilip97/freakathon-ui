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
import mockedAttendingEvents from './mockedAttendingEvents';

const Tab = createMaterialTopTabNavigator();

const AttendingEventsScreen = () => {
  return (
    <View>
      <ScrollView >
        <EventSection events={mockedAttendingEvents} />
      </ScrollView>
    </View>
  );
}

export default AttendingEventsScreen ;
