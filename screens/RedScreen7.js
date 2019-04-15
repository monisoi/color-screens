import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import TouchableComponent from '../components/TouchableComponent';

const color = '#FE2E2E';
const nextScreen = 'Red8';

export default class RedScreen7 extends React.Component {
  static navigationOptions = {
    title: color,
  };
  render() {
    return TouchableComponent(this.props.navigation, color, nextScreen);
  }
}
