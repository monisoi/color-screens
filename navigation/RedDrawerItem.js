import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import RedScreen1 from '../screens/RedScreen1';
import RedScreen2 from '../screens/RedScreen2';
import RedScreen3 from '../screens/RedScreen3';
import RedScreen4 from '../screens/RedScreen4';
import RedScreen5 from '../screens/RedScreen5';
import RedScreen6 from '../screens/RedScreen6';
import RedScreen7 from '../screens/RedScreen7';
import RedScreen8 from '../screens/RedScreen8';

export const RedStack = createStackNavigator(
  {
    Red1: RedScreen1,
    Red2: RedScreen2,
    Red3: RedScreen3,
    Red4: RedScreen4,
    Red5: RedScreen5,
    Red6: RedScreen6,
    Red7: RedScreen7,
    Red8: RedScreen8,
  },
  {
    initialRouteName: 'Red1',
  }
);

export const RedDrawerItem = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Red1')} style={styles.drawerItem}>
      <Text style={styles.title}>Red</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    backgroundColor: 'red',
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: '600',
  },
});
