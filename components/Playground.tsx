import React, {useRef, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

const Playground = props => {
  const {gridStatus, selectedColor} = props;
  console.log('Koca: selectedColor in playground ', selectedColor);

  const webViewRef = useRef(null);

  const toggleGridString = `
  setTimeout(function() { document.querySelector(".ion-grid").click(); }, 1);
  true`;

  const selectColorString = `
  setTimeout(function() { document.querySelector('[title="${selectedColor}"]').click() }, 1);
  true`;

  useEffect(() => {
    webViewRef.current.injectJavaScript(toggleGridString);
  }, [gridStatus]);

  useEffect(() => {
    webViewRef.current.injectJavaScript(selectColorString);
    console.log('use effect for color called');
  }, [selectedColor]);

  return (
    <View style={{height: 1000, top: -160}}>
      {/* // <View style={{height: 1000, top: -10, right: 20}}> */}
      <WebView
        ref={webViewRef}
        source={{uri: 'https://dougwperez.github.io/brick-playground/'}}
        style={{flex: 1}}
      />
    </View>
  );
};
export default Playground;
