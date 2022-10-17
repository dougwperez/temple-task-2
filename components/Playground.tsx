import React, {useRef, useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {View, TouchableWithoutFeedback} from 'react-native';
import {DataStore} from 'aws-amplify';
import {TaskCounter} from '.././src/models';

const Playground = props => {
  const {gridStatus, deleteStatus, selectedColor, selectedBrick} = props;
  const [brickCount, setBrickCount] = useState(Number);
  const [coins, SetCoins] = React.useState(0);

  const webViewRef = useRef(null);

  const toggleGridString = `
  setTimeout(function() { document.querySelector(".ion-grid").click(); }, 1);
  true`;

  const toggleDeleteString = `
  setTimeout(function() { document.querySelector(".ion-close").click(); }, 1);
  true`;

  const toggleRotateString = `
  setTimeout(function() { document.querySelector(".ion-nuclear").click(); }, 1);
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
    const subscription = DataStore.observeQuery(TaskCounter).subscribe(
      snapshot => {
        const {items, isSynced} = snapshot;
        console.log('items in Playground', items);

        SetCoins(items[0].count);
      },
    );

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    webViewRef.current.injectJavaScript(toggleGridString);
  }, [gridStatus]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(toggleDeleteString);
  }, [deleteStatus]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(selectColorString);
  }, [selectedColor]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(selectBrickString);
  }, [selectedBrick]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(checkBrickCount);
    // webViewRef.current.injectJavaScript(toggleDeleteString);
    // console.log('DELETE');
  });

  async function decrementCoinCount() {
    const models = await DataStore.query(TaskCounter);

    await DataStore.save(
      TaskCounter.copyOf(models[0], item => {
        item.count -= 1;
      }),
    );
  }

  const checkBrickFunction = () => {
    // decrementCoinCount();
    setTimeout(() => {
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
          // pointerEvents={coins === 0 ? 'none' : null}
          style={{flex: 1}}
          onMessage={event => {
            if (event.nativeEvent.data > brickCount) {
              // decrementCoinCount();
              setBrickCount(event.nativeEvent.data);
            }
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Playground;
