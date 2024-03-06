import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../../theme';

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
    backgroundColor: theme.colors.primary,
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
    fontSize: theme.fonts.medium.fontSize,
    marginRight: 4,
  },
  chipRemoveButton: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Chip;
