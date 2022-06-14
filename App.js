/* eslint-disable react-native/no-inline-styles */
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
  View,
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
    fontSize: 54,
  };

  const changeColor = React.useCallback(() => {
    setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [colors]);

  const [count, setCount] = useState(0);

  const increment = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = React.useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <Pressable
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
        <Text style={textStyle}>{count}</Text>
        <View style={style.btns}>
          <Pressable onPress={increment} style={style.btn}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
              }}>
              +
            </Text>
          </Pressable>
          <Pressable onPress={decrement} style={style.btn}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
              }}>
              -
            </Text>
          </Pressable>
        </View>
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
  btns: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    right: 0,
    backgroundColor: 'white',
    borderRadius: 100,
    marginVertical: 50,
    marginHorizontal: 20,
  },
  btn: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
});

export default App;
