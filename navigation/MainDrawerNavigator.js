import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { SafeAreaView } from '@react-navigation/native';
import { RedStack, RedDrawerItem } from './RedDrawerItem';
import { GreenStack, GreenDrawerItem } from './GreenDrawerItem';
import { BlueStack, BlueDrawerItem } from './BlueDrawerItem';

const DrawerContents = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <RedDrawerItem navigation={navigation} />
      <GreenDrawerItem navigation={navigation} />
      <BlueDrawerItem navigation={navigation} />
    </SafeAreaView>
  );
};

export default createDrawerNavigator(
  {
    RedStack,
    GreenStack,
    BlueStack,
  },
  {
    drawerBackgroundColor: 'black',
    contentComponent: DrawerContents,
    hideStatusBar: true,
  }
);
