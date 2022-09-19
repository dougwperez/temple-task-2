import React, {useRef, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';
import {DataStore} from 'aws-amplify';
import {TaskCounter} from '.././src/models';

const Playground = props => {
  const {gridStatus, selectedColor, selectedBrick} = props;

  const webViewRef = useRef(null);

  const toggleGridString = `
  setTimeout(function() { document.querySelector(".ion-grid").click(); }, 1);
  true`;

  const selectColorString = `
  setTimeout(function() { document.querySelector('[title="${selectedColor}"]').click() }, 1);
  true`;

  const selectBrickString = `
  setTimeout(function() { document.getElementsByClassName("brick-picker__brickThumb--QVXb4")[${selectedBrick}].click() }, "1");
  true`;

  const checkBrickCount = `
  const countText = document.getElementsByClassName("help__text--2hH-a")[0].textContent
  setTimeout(function () {
    window.ReactNativeWebView.postMessage(countText)
  }, 2000)
  true`;

  // setTimeout(function() { document.getElementsByClassName("help__text--2hH-a")[0].click() }, "1");

  useEffect(() => {
    webViewRef.current.injectJavaScript(toggleGridString);
    console.log('toggleGridString', toggleGridString);
  }, [gridStatus]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(selectColorString);
    console.log('use effect for color called');
  }, [selectedColor]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(selectBrickString);
    console.log('use effect for brick called');
  }, [selectedBrick]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(checkBrickCount);
    console.log('brickCount');
  }, [gridStatus]);

  return (
    <View style={{height: 1000, top: -160}}>
      {/* // <View style={{height: 1000, top: -10, right: 20}}> */}
      <WebView
        ref={webViewRef}
        source={{uri: 'https://dougwperez.github.io/brick-playground/'}}
        style={{flex: 1}}
        onMessage={event => {
          alert(event.nativeEvent.data);
        }}
      />
    </View>
  );
};
export default Playground;
