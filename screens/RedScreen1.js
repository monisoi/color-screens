import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class RedScreen1 extends React.Component {
  static navigationOptions = {
    title: '#FBEFEF',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Red2')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBEFEF',
  },
});
