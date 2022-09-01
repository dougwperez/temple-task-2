import React from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import {Popover, Button, Box, Center, NativeBaseProvider} from 'native-base';

const BrickPicker = () => {
  return (
    <View style={{height: 1000, top: -160}}>
      <WebView
        source={{uri: 'https://brickbuilder.herokuapp.com/'}}
        // https://nicmosc.github.io/brick-builder/
        style={{flex: 1}}
      />
    </View>
  );
};
export default BrickPicker;
