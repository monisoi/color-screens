import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class RedScreen7 extends React.Component {
  static navigationOptions = {
    title: '#FE2E2E',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Red8')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FE2E2E',
  },
});
