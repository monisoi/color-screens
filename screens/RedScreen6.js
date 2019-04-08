import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class RedScreen6 extends React.Component {
  static navigationOptions = {
    title: '#FA5858',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Red7')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA5858',
  },
});
