import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

import BlueScreen1 from '../screens/BlueScreen1';
import BlueScreen2 from '../screens/BlueScreen2';
import BlueScreen3 from '../screens/BlueScreen3';
import BlueScreen4 from '../screens/BlueScreen4';
import BlueScreen5 from '../screens/BlueScreen5';
import BlueScreen6 from '../screens/BlueScreen6';
import BlueScreen7 from '../screens/BlueScreen7';
import BlueScreen8 from '../screens/BlueScreen8';

const stackScreens = {
  Blue1: BlueScreen1,
  Blue2: BlueScreen2,
  Blue3: BlueScreen3,
  Blue4: BlueScreen4,
  Blue5: BlueScreen5,
  Blue6: BlueScreen6,
  Blue7: BlueScreen7,
  Blue8: BlueScreen8,
};

export const BlueStack = createStackNavigator(
  stackScreens,
  {
    initialRouteName: 'Blue1',
  }
);

const resetAction = StackActions.reset({
  index: 0,
  key: null,
  actions: [
    NavigationActions.navigate({ routeName: 'Blue1' }),
  ],
});

export const BlueDrawerItem = props => {
  return (
    <TouchableOpacity
      onPress={() => Object.keys(stackRouters).includes(props.navigation.state.routeName) ?
        resetAction :
        props.navigation.navigate('Blue1')}
      style={styles.drawerItem}
    >
      <Text style={styles.title}>Blue</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    backgroundColor: 'blue',
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: '600',
  },
});
