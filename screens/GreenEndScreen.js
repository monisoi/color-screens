import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class GreenEndScreen extends React.Component {
  static navigationOptions = {
    title: '#00FF00',
  };
  render() {
    return (
      <View
        style={styles.container}
      >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF00',
  },
});
