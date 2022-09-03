import React from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

const TaskToolbar = () => {
  //   const comsTest = `
  //   document.body.style.backgroundColor = 'red';
  //   setTimeout(function() { window.alert('hi') }, 2000);
  //   true; // note: this is required, or you'll sometimes get silent failures
  // `;
  return (
    <View style={{height: 1000, top: -160}}>
      <WebView
        source={{uri: 'https://brickbuilder.herokuapp.com/'}}
        // https://nicmosc.github.io/brick-builder/
        style={{flex: 1}}
        // onMessage={event => {}}
        // injectedJavaScript={comsTest}
      />
    </View>
  );
};
export default TaskToolbar;
