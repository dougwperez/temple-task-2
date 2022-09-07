import React from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

const Playground = () => {
  const WebAPICode = `
  setTimeout(function() { document.querySelector(".ion-paintbrush").click(); }, 1000);
  setTimeout(function() { document.querySelector(".ion-grid").click(); }, 3000);
  setTimeout(function() { document.querySelector(".ion-grid").click(); }, 6000);
  true`;

  return (
    // <View style={{height: 1000, top: -160}}>
    <View style={{height: 1000, top: -10, right: 20}}>
      <WebView
        source={{uri: 'https://dougwperez.github.io/brick-playground/'}}
        // https://dougwperez.github.io/brick-playground/
        // https://brickbuilder.herokuapp.com/
        style={{flex: 1}}
        onMessage={event => {}}
        injectedJavaScript={WebAPICode}
        //       injectedJavaScriptBeforeContentLoaded={`
        //       document.querySelector('.button__button--3UeOv').click();
        // `}
      />
    </View>
  );
};
export default Playground;
