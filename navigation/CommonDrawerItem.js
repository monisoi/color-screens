import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default rootName => {};

export const getStackNavigator = (stackScreens, rootName) =>
  createStackNavigator(stackScreens, {
    initialRouteName: `${rootName}1`,
  });

const resetAction = rootName =>
  StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: `${rootName}1` })],
  });

const getBackgroundColor = rootName => {
  switch (rootName) {
    case 'Red':
      return 'red';
    case 'Blue':
      return 'blue';
    case 'Green':
      return 'green';
    default:
      return 'white';
  }
};

export const DrawerItem = props => {
  return (
    <TouchableOpacity
      onPress={() =>
        Object.keys(props.stackScreens).includes(props.navigation.state.routeName)
          ? resetAction(props.rootName)
          : props.navigation.navigate(`${props.rootName}1`)
      }
      style={{ backgroundColor: getBackgroundColor(props.rootName) }}
    >
      <Text style={styles.title}>{props.rootName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: '600',
  },
});
