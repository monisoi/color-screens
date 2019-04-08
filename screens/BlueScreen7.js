import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default class BlueScreen7 extends React.Component {
  static navigationOptions = {
    title: '#2E2EFE',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Blue8')}
        style={styles.container}
      >
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2EFE',
  },
});
