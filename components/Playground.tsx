import React, {useRef, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

const Playground = props => {
  const {gridStatus} = props;

  const webViewRef = useRef(null);

  const toggleGrid = `
  setTimeout(function() { document.querySelector(".ion-grid").click(); }, 1);
  true`;

  useEffect(() => {
    webViewRef.current.injectJavaScript(toggleGrid);
  }, [gridStatus]);

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
