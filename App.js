/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [colors] = useState([
    'crimson',
    'slateblue',
    '#010101',
    'goldenrod',
    'indigo',
    'purple',
  ]);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const textStyle = {
    color: isDarkMode ? 'white' : 'black',
    fontWeight: 'bold',
  };

  const changeColor = React.useCallback(() => {
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [colors]);

  return (
    <Pressable
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
      }}
      onPress={changeColor}>
      <SafeAreaView
        style={[
          style.centerItems,
          {
            backgroundColor: currentColor,
          },
        ]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Text style={textStyle}>React Native Test</Text>
      </SafeAreaView>
    </Pressable>
  );
};

const style = StyleSheet.create({
  centerItems: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
