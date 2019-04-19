import React from 'react';
import TouchableComponent from '../components/TouchableComponent';

const colors = [
  '#EFFBEF',
  '#E0F8E0',
  '#CEF6CE',
  '#A9F5A9',
  '#81F781',
  '#58FA58',
  '#2EFE2E',
  '#00FF00',
];

export default class GreenScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('color', colors[0]),
    };
  };
  render() {
    return TouchableComponent(this.props.navigation, 'Green', colors);
  }
}
