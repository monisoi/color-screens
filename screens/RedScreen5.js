import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class RedScreen5 extends React.Component {
  static navigationOptions = {
    title: '#F78181',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Red6')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F78181',
  },
});
