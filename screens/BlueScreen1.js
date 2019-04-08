import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class BlueScreen1 extends React.Component {
  static navigationOptions = {
    title: '#EFEFFB',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Blue2')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFFB',
  },
});
