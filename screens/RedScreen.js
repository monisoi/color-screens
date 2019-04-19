import React from 'react';
import TouchableComponent from '../components/TouchableComponent';

const colors = [
  '#FBEFEF',
  '#F8E0E0',
  '#F6CECE',
  '#F5A9A9',
  '#F78181',
  '#FA5858',
  '#FE2E2E',
  '#FF0000',
];

export default class RedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('color', colors[0]),
    };
  };
  render() {
    return TouchableComponent(this.props.navigation, 'Red', colors);
  }
}
