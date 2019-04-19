import React from 'react';
import TouchableComponent from '../components/TouchableComponent';

const colors = [
  '#EFEFFB',
  '#E0E0F8',
  '#CECEF6',
  '#A9A9F5',
  '#8181F7',
  '#5858FA',
  '#2E2EFE',
  '#0000FF',
];

export default class BlueScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('color', colors[0]),
    };
  };
  render() {
    return TouchableComponent(this.props.navigation, 'Blue', colors);
  }
}
