import React, {useRef, useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {View, TouchableWithoutFeedback} from 'react-native';
import {DataStore} from 'aws-amplify';
import {TaskCounter} from '.././src/models';
import {even} from '@react-native-material/core';

const Playground = props => {
  const {gridStatus, selectedColor, selectedBrick} = props;
  const [brickCount, setBrickCount] = useState(Number);
  const [coins, SetCoins] = React.useState(0);
  console.log('Koca: coins ', coins);
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

  useEffect(() => {
    // setTotalScore(10);
    const subscription = DataStore.observeQuery(TaskCounter).subscribe(
      snapshot => {
        const {items, isSynced} = snapshot;
        console.log('Koca: items in Playground ', items[0].count);

        SetCoins(items[0].count);
      },
    );

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    // decrementCoinCount();
    // webViewRef.current.injectJavaScript(checkBrickCount);
  }, [brickCount]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(toggleGridString);
  }, [gridStatus]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(selectColorString);
  }, [selectedColor]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(selectBrickString);
    // console.log('use effect for brick called');
  }, [selectedBrick]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(checkBrickCount);
    // console.log('brickCount');
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
    setTimeout(() => {
      console.log('screen touched');
      webViewRef.current.injectJavaScript(checkBrickCount);
    }, 100);
  };

  return (
    <TouchableWithoutFeedback onPress={() => checkBrickFunction()}>
      <View style={{height: 1000, top: -160}}>
        {/* // <View style={{height: 1000, top: -10, right: 20}}> */}
        <WebView
          ref={webViewRef}
          source={{uri: 'https://dougwperez.github.io/brick-playground/'}}
          pointerEvents={coins === 0 ? 'none' : null}
          style={{flex: 1}}
          onMessage={event => {
            // setBrickCount(event.nativeEvent.data);
            console.log('event.nativeEvent.data PG', event.nativeEvent.data);

            console.log('brickCount PG', brickCount);
            // setBrickCount(event.nativeEvent.data);
            if (event.nativeEvent.data > brickCount) {
              decrementCoinCount();
              setBrickCount(event.nativeEvent.data);
            }
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Playground;
