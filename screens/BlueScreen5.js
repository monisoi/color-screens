import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class BlueScreen5 extends React.Component {
  static navigationOptions = {
    title: '#8181F7',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Blue6')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8181F7',
  },
});
