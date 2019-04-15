import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { getStackNavigator, DrawerItem } from './CommonDrawerItem';

import GreenScreen1 from '../screens/GreenScreen1';
import GreenScreen2 from '../screens/GreenScreen2';
import GreenScreen3 from '../screens/GreenScreen3';
import GreenScreen4 from '../screens/GreenScreen4';
import GreenScreen5 from '../screens/GreenScreen5';
import GreenScreen6 from '../screens/GreenScreen6';
import GreenScreen7 from '../screens/GreenScreen7';
import GreenScreen8 from '../screens/GreenScreen8';

const stackScreens = {
  Green1: GreenScreen1,
  Green2: GreenScreen2,
  Green3: GreenScreen3,
  Green4: GreenScreen4,
  Green5: GreenScreen5,
  Green6: GreenScreen6,
  Green7: GreenScreen7,
  Green8: GreenScreen8,
};

export const GreenStack = getStackNavigator(stackScreens, 'Green');

export const GreenDrawerItem = ({ navigation }) => (
  <DrawerItem navigation={navigation} rootName="Green" stackScreens={stackScreens} />
);
