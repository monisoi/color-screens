import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import TouchableComponent from '../components/TouchableComponent';

const color = '#F6CECE';
const nextScreen = 'Red4';

export default class RedScreen3 extends React.Component {
  static navigationOptions = {
    title: color,
  };
  render() {
    return TouchableComponent(this.props.navigation, color, nextScreen);
  }
}
