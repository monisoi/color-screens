import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const getNextColor = (colors, color) => {
  const index = colors.findIndex(x => x === color);
  if (index < colors.length - 1) {
    return colors[index + 1];
  }
  return colors[0];
};

const navigateToNextScreen = (navigation, screen, colors, color) => {
  const nextColor = getNextColor(colors, color);
  return nextColor === colors[colors.length - 1]
    ? navigation.navigate(`${screen}End`)
    : navigation.push(screen, {
        color: nextColor,
      });
};

export default (navigation, screen, colors) => {
  const color = navigation.getParam('color', colors[0]);
  return (
    <TouchableOpacity
      onPress={() => navigateToNextScreen(navigation, screen, colors, color)}
      style={{ backgroundColor: color, flex: 1 }}
    />
  );
};
