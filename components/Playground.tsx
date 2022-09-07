import React from 'react';
import {WebView} from 'react-native-webview';
import {View} from 'react-native';

const Playground = () => {
  const toggleGrid = `
  setTimeout(function() { document.querySelector(".ion-grid").click(); }, 1);
  setTimeout(function() { document.querySelector(".ion-grid").click(); }, 2000);
  true`;

  return (
    <View style={{height: 1000, top: -160}}>
      {/* // <View style={{height: 1000, top: -10, right: 20}}> */}
      <WebView
        source={{uri: 'https://dougwperez.github.io/brick-playground/'}}
        // https://dougwperez.github.io/brick-playground/
        // https://brickbuilder.herokuapp.com/
        style={{flex: 1}}
        onMessage={event => {}}
        injectedJavaScript={toggleGrid}
        //       injectedJavaScriptBeforeContentLoaded={`
        //       document.querySelector('.button__button--3UeOv').click();
        // `}
      />
    </View>
  );
};
export default Playground;
