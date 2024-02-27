import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Chip = ({ text, onRemove }) => (
  <View style={styles.chip}>
    <Text style={styles.chipText}>{text}</Text>
    <TouchableOpacity onPress={onRemove}>
      <Text style={styles.chipRemoveButton}>×</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#8C1111',
    borderRadius: 20,
    paddingHorizontal: 9,
    margin: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  chipText: {
    color: 'white',
    fontSize: 14,
    marginRight: 4,
  },
  chipRemoveButton: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Chip;
