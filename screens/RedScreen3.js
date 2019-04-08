import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class RedScreen3 extends React.Component {
  static navigationOptions = {
    title: '#F6CECE',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Red4')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6CECE',
  },
});
