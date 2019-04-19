import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { getStackNavigator, DrawerItem } from './CommonDrawerItem';

import GreenScreen from '../screens/GreenScreen';
import GreenEndScreen from '../screens/GreenEndScreen';

const stackScreens = {
  Green: GreenScreen,
  GreenEnd: GreenEndScreen,
};

export const GreenStack = getStackNavigator(stackScreens, 'Green');

export const GreenDrawerItem = ({ navigation }) => (
  <DrawerItem navigation={navigation} rootName="Green" stackScreens={stackScreens} />
);
