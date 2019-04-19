import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { getStackNavigator, DrawerItem } from './CommonDrawerItem';

import BlueScreen from '../screens/BlueScreen';
import BlueEndScreen from '../screens/BlueEndScreen';

const stackScreens = {
  Blue: BlueScreen,
  BlueEnd: BlueEndScreen,
};

export const BlueStack = getStackNavigator(stackScreens, 'Blue');

export const BlueDrawerItem = ({ navigation }) => (
  <DrawerItem navigation={navigation} rootName="Blue" stackScreens={stackScreens} />
);
