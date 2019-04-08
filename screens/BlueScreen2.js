import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class BlueScreen2 extends React.Component {
  static navigationOptions = {
    title: '#E0E0F8',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Blue3')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0F8',
  },
});
