import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class RedScreen4 extends React.Component {
  static navigationOptions = {
    title: '#F5A9A9',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Red5')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5A9A9',
  },
});
