import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {AppBar, HStack, IconButton} from '@react-native-material/core';
import Svg1x1 from '../Images/1x1svg';

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

        transform: [{translateX: animation}],
      }}>
      <HStack style={styles.colorBoxContainer}>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(0)}>
          {/* <Image
            style={styles.brickImg}
            source={require('../Images/1x1.png')}
          /> */}
          <Svg1x1 style={styles.brickImg} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(1)}>
          <Image
            style={styles.brickImg}
            source={require('../Images/1x2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(3)}>
          <Image
            style={styles.brickImg}
            source={require('../Images/1x3.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(5)}>
          <Image
            style={styles.brickImg}
            source={require('../Images/1x4.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(2)}>
          <Image
            style={styles.brickImg}
            source={require('../Images/2x2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(4)}>
          <Image
            style={styles.brickImg}
            source={require('../Images/2x3.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(6)}>
          <Image
            style={styles.brickImg}
            source={require('../Images/2x4.png')}
          />
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
    borderWidth: 1,
    borderColor: 'gray',
  },
  colorBoxContainer: {
    justifyContent: 'center',
    marginTop: -45,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
  brickPicks: {
    width: 42,
    height: 35,
    margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  brickImg: {
    width: 42,
    height: 35,
    marginTop: -1,
    // margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
export default ColorPicker;
