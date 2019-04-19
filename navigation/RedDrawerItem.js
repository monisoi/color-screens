import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { getStackNavigator, DrawerItem } from './CommonDrawerItem';

import RedScreen from '../screens/RedScreen';
import RedEndScreen from '../screens/RedEndScreen';

const stackScreens = {
  Red: RedScreen,
  RedEnd: RedEndScreen,
};

export const RedStack = getStackNavigator(stackScreens, 'Red');

export const RedDrawerItem = ({ navigation }) => (
  <DrawerItem navigation={navigation} rootName="Red" stackScreens={stackScreens} />
);
