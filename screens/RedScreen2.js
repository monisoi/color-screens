import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class RedScreen2 extends React.Component {
  static navigationOptions = {
    title: '#F8E0E0',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Red3')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E0E0',
  },
});
