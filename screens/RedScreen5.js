import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import TouchableComponent from '../components/TouchableComponent';

const color = '#F78181';
const nextScreen = 'Red6';

export default class RedScreen5 extends React.Component {
  static navigationOptions = {
    title: color,
  };
  render() {
    return TouchableComponent(this.props.navigation, color, nextScreen);
  }
}
