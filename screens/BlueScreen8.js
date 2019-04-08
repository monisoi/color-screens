import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class BlueScreen8 extends React.Component {
  static navigationOptions = {
    title: '#0000FF',
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
    backgroundColor: '#0000FF',
  },
});
