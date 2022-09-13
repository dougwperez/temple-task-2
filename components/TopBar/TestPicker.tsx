import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import {AppBar, HStack, IconButton} from '@react-native-material/core';
import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {Hidden} from 'native-base';

const TestPicker = props => {
  const {
    toggleColorPicker,
    setColorPickerVisible,
    colorPickerVisible,

    selectColor,
    // animated,
    animation,
    slideIn,
    slideOut,
  } = props;

  console.log('Koca: colorPickerVisible ', colorPickerVisible);

  // const slideIn = () => {
  //   Animated.sequence([
  //     Animated.timing(animation, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // };

  // const slideOut = () => {
  //   Animated.sequence([
  //     Animated.timing(animation, {
  //       toValue: -500,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // };

  useEffect(() => {
    slideIn();
  }, [colorPickerVisible]);

  // useEffect(() => {
  //   slideOut();
  // }, [colorPickerVisible]);

  return (
    // <SafeAreaView style={backgroundStyle}>
    // <Animated.View
    //   style={[
    //     styles.fadingContainer,
    //     {
    //       // Bind opacity to animated value
    //       opacity: fadeAnim,
    //     },
    //   ]}>
    <AppBar
      // title="Title"
      style={{
        position: 'absolute',
        width: '100%',
        top: 100,
        // opacity: 1,
        // opacity: colorPickerVisible ? 1 : 0,

        transform: [{translateX: animation}],
      }}>
      {/* <HStack style={styles.mainModal}> */}
      <HStack style={styles.colorBoxContainer}>
        <TouchableOpacity
          style={[{backgroundColor: '#FF0000'}, styles.colorBox]}
          onPress={() => selectColor('#FF0000')}></TouchableOpacity>
        <TouchableOpacity
          style={[{backgroundColor: '#FF9800'}, styles.colorBox]}
          onPress={() => selectColor('#FF9800')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#F0E100'}, styles.colorBox]}
          onPress={() => selectColor('#F0E100')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#00DE00'}, styles.colorBox]}
          onPress={() => selectColor('#00DE00')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#A1BC24'}, styles.colorBox]}
          onPress={() => selectColor('#A1BC24')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#0011CF'}, styles.colorBox]}
          onPress={() => selectColor('#0011CF')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#FFFFFF'}, styles.colorBox]}
          onPress={() => selectColor('#FFFFFF')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#000000'}, styles.colorBox]}
          onPress={() => selectColor('#000000')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#652A0C'}, styles.colorBox]}
          onPress={() => selectColor('#652A0C')}></TouchableOpacity>
      </HStack>
      {/* </HStack> */}
    </AppBar>
    // </Animated.View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: 1,
    position: 'relative',
    marginTop: 200,
  },
  appBarModal: {
    marginHorizontal: -20,
    position: 'absolute',
    marginBottom: 623,
    backgroundColor: '#6226ee',
    // borderRadius: 20,

    padding: 20,
    height: 30,
    alignItems: 'center',
    // justifyContent: 'Center',
    borderTopColor: 'gray',
    borderTopWidth: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainModal: {
    marginHorizontal: -20,
    marginBottom: 623,
    backgroundColor: '#6226ee',

    // borderRadius: 20,
    padding: 20,
    height: 30,
    alignItems: 'center',
    // justifyContent: 'Center',
    borderTopColor: 'gray',
    borderTopWidth: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  colorBox: {
    width: 30,
    height: 30,
    margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
  },
  colorBoxContainer: {
    justifyContent: 'center',
    marginTop: -45,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
});
export default TestPicker;
