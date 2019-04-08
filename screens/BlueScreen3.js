import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class BlueScreen3 extends React.Component {
  static navigationOptions = {
    title: '#CECEF6',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Blue4')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CECEF6',
  },
});
