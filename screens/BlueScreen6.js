import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class BlueScreen6 extends React.Component {
  static navigationOptions = {
    title: '#5858FA',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Blue7')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5858FA',
  },
});
