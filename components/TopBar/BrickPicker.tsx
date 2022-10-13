import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {AppBar, HStack, IconButton} from '@react-native-material/core';
import Svg1x1 from '../Images/1x1svg';
import Svg1x2 from '../Images/1x2svg';
import Svg1x3 from '../Images/1x3svg';
import Svg1x4 from '../Images/1x4svg';
import Svg2x2 from '../Images/2x2svg';
import Svg2x3 from '../Images/2x3svg';
import Svg2x4 from '../Images/2x4svg';

const ColorPicker = props => {
  const {
    toggleBrickPicker,
    setBrickPickerVisible,
    selectBrick,
    brickPickerVisible,
    animation,
    slideIn,
    slideOut,
  } = props;

  useEffect(() => {
    slideIn();
  }, [brickPickerVisible]);

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
          style={styles.brickPicks}
          onPress={() => selectBrick(0)}>
          <Svg1x1 style={styles.brickImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(1)}>
          <Svg1x2 style={styles.brickImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(3)}>
          <Svg1x3 style={styles.brickImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(5)}>
          <Svg1x4 style={styles.brickImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(2)}>
          <Svg2x2 style={styles.brickImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(4)}>
          <Svg2x3 style={styles.brickImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(6)}>
          <Svg2x4 style={styles.brickImg} />
        </TouchableOpacity>
      </HStack>
    </AppBar>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    width: 30,
    height: 30,
    margin: 3,
  },
  colorBoxContainer: {
    justifyContent: 'center',
    marginTop: -45,
  },
  brickPicks: {
    width: 42,
    height: 35,
    margin: 3,
    backgroundColor: 'white',
    borderRadius: 7,
  },
  brickImg: {
    width: 42,
    height: 35,
    marginTop: -1,
    borderColor: '#6F7378',
    borderWidth: 0.5,
    borderRadius: 7,
  },
});
export default ColorPicker;
