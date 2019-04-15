import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import TouchableComponent from '../components/TouchableComponent';

const color = '#F8E0E0';
const nextScreen = 'Red3';

export default class RedScreen2 extends React.Component {
  static navigationOptions = {
    title: color,
  };
  render() {
    return TouchableComponent(this.props.navigation, color, nextScreen);
  }
}
