import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class RedEndScreen extends React.Component {
  static navigationOptions = {
    title: '#FF0000',
  };
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
  },
});
