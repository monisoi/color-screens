import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class RedScreen8 extends React.Component {
  static navigationOptions = {
    title: '#FF0000',
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
    backgroundColor: '#FF0000',
  },
});
