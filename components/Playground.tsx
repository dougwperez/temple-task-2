import React from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

const TaskToolbar = () => {
  const WebAPICode = `test()`;
  const comsTest = `
    document.body.style.backgroundColor = 'red';
    setTimeout(function() { window.alert('hi') }, 500);
    true; // note: this is required, or you'll sometimes get silent failures
  `;
  // const injectedJavascript = `(function() {
  //   window.postMessage = function(data) {
  //     window.ReactNativeWebView.postMessage(data);
  //   };
  // })()`;
  return (
    <View style={{height: 1000, top: -160}}>
      <WebView
        source={{uri: 'https://dougwperez.github.io/brick-playground/'}}
        // https://dougwperez.github.io/brick-playground/
        // https://brickbuilder.herokuapp.com/
        style={{flex: 1}}
        onMessage={event => {}}
        injectedJavaScript={WebAPICode}
      />
    </View>
  );
};
export default TaskToolbar;
