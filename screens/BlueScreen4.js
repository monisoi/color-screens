import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class BlueScreen4 extends React.Component {
  static navigationOptions = {
    title: '#A9A9F5',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Blue5')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9F5',
  },
});
