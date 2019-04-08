import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { SafeAreaView } from '@react-navigation/native';
import { RedStack, RedDrawerItem } from './RedDrawerItem';
import { BlueStack, BlueDrawerItem } from './BlueDrawerItem';

const DrawerContents = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <RedDrawerItem navigation={navigation} />
      <BlueDrawerItem navigation={navigation} />
    </SafeAreaView>
  );
};

export default createDrawerNavigator(
  {
    RedStack,
    BlueStack,
  },
  {
    drawerBackgroundColor: 'black',
    contentComponent: DrawerContents,
    hideStatusBar: true,
  }
);
