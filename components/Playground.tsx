import React, {useRef, useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {View, TouchableWithoutFeedback} from 'react-native';
import {DataStore} from 'aws-amplify';
import {TaskCounter} from '.././src/models';

const Playground = props => {
  const {gridStatus, selectedColor, selectedBrick} = props;
  const [brickCount, setBrickCount] = useState(Number);
  console.log('Koca: brickCount ', brickCount);

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
  setTimeout(function () {
    const countText = document.getElementsByClassName("topbar__title--1eC9U")[0].textContent
    window.ReactNativeWebView.postMessage(countText)
  }, 1);
  true`;

  // setTimeout(function() { document.getElementsByClassName("help__text--2hH-a")[0].click() }, "1");

  useEffect(() => {
    decrementCoinCount();
  }, [brickCount]);

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
  }, []);

  async function decrementCoinCount() {
    const models = await DataStore.query(TaskCounter);
    console.log('modelCount IN PLAYGROUND', models[0].count);

    await DataStore.save(
      TaskCounter.copyOf(models[0], item => {
        item.count -= 1;
      }),
    );
  }

  const checkBrickFunction = () => {
    // decrementCoinCount();
    // setTimeout(() => {
    webViewRef.current.injectJavaScript(checkBrickCount);
    // }, 500);
  };

  return (
    <TouchableWithoutFeedback onPress={() => checkBrickFunction()}>
      <View style={{height: 1000, top: -160}}>
        {/* // <View style={{height: 1000, top: -10, right: 20}}> */}
        <WebView
          ref={webViewRef}
          source={{uri: 'https://dougwperez.github.io/brick-playground/'}}
          style={{flex: 1}}
          onMessage={event => {
            console.log('Testing Feedback', event.nativeEvent.data);
            setBrickCount(event.nativeEvent.data);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Playground;
