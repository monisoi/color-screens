import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import TouchableComponent from '../components/TouchableComponent';

const color = '#FBEFEF';
const nextScreen = 'Red2';

export default class RedScreen1 extends React.Component {
  static navigationOptions = {
    title: color,
  };
  render() {
    return TouchableComponent(this.props.navigation, color, nextScreen);
  }
}
