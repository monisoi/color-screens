import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default (navigation, color, nextScreen) => (
  <TouchableOpacity
    onPress={() => navigation.navigate(nextScreen)}
    style={{ backgroundColor: color, flex: 1 }}
  />
);
