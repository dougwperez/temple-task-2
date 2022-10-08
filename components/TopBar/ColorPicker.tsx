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

const ColorPicker = props => {
  const {
    toggleColorPicker,
    setColorPickerVisible,
    colorPickerVisible,
    selectColor,
    animation,
    slideIn,
    slideOut,
  } = props;

  useEffect(() => {
    slideIn();
  }, [colorPickerVisible]);

  return (
    <AppBar
      style={{
        position: 'absolute',
        width: '100%',
        top: 91,
        backgroundColor: 'white',

        transform: [{translateX: animation}],
      }}>
      <HStack style={styles.colorBoxContainer}>
        <TouchableOpacity
          style={[{backgroundColor: '#f94144'}, styles.colorBox]}
          onPress={() => selectColor('#f94144')}></TouchableOpacity>
        <TouchableOpacity
          style={[{backgroundColor: '#f3722c'}, styles.colorBox]}
          onPress={() => selectColor('#f3722c')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#ffbe0b'}, styles.colorBox]}
          onPress={() => selectColor('#ffbe0b')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#90be6d'}, styles.colorBox]}
          onPress={() => selectColor('#90be6d')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#43aa8b'}, styles.colorBox]}
          onPress={() => selectColor('#43aa8b')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#1e6091'}, styles.colorBox]}
          onPress={() => selectColor('#1e6091')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#faf9f9'}, styles.colorBox]}
          onPress={() => selectColor('#faf9f9')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#212529'}, styles.colorBox]}
          onPress={() => selectColor('#212529')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#774936'}, styles.colorBox]}
          onPress={() => selectColor('#774936')}></TouchableOpacity>
      </HStack>
    </AppBar>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    width: 30,
    height: 30,
    margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 7,
  },
  colorBoxContainer: {
    justifyContent: 'center',
    marginTop: -45,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
});
export default ColorPicker;
