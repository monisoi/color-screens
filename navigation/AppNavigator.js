import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainDrawerNavigator from './MainDrawerNavigator';

export default createAppContainer(createSwitchNavigator({
  Main: MainDrawerNavigator,
}));