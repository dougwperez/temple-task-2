import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import {AppBar, IconButton, HStack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Feather';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorPicker from './ColorPicker';
import BrickPicker from './BrickPicker';
import ToolPicker from './ToolPicker';
import OptionsModal from '../OptionsScreen/OptionsModal';

import {
  Provider,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from '@react-native-material/core';
import TestPicker from './TestPicker';

const BuilderToolbar = props => {
  const {toggleGrid, selectColor, selectedColor, selectBrick, selectedBrick} =
    props;

  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [brickPickerVisible, setBrickPickerVisible] = useState(false);
  const [toolPickerVisible, setToolPickerVisible] = useState(false);
  // const [isOpenTop, setIsOpenTop] = React.useState(false);

  const animation = new Animated.Value(-350);

  const noColors = () => {
    return brickPickerVisible || optionsModalVisible ? true : false;
  };

  console.log('Koca: noColors ', noColors);

  const slideOut = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: -500,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const slideIn = () => {
    Animated.sequence([
      // Animated.timing(animation, {
      //   toValue: -300,
      //   duration: 1000,
      //   useNativeDriver: true,
      // }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const toggleModal = () => {
    setOptionsModalVisible(!optionsModalVisible);
  };

  const toggleColorPicker = () => {
    // setColorPickerVisible(!colorPickerVisible);
    // slideIn();

    if (colorPickerVisible) {
      slideOut();
      setTimeout(() => {
        setColorPickerVisible(false);
        console.log('Delayed for 1 second.');
      }, 500);
    } else {
      setColorPickerVisible(true);
    }
  };

  const toggleBrickPicker = () => {
    if (colorPickerVisible) {
      slideOut();
      setTimeout(() => {
        setColorPickerVisible(false);
        // setBrickPickerVisible(true);
        console.log('Delayed for 1 second.');
      }, 500);
      setTimeout(() => {
        setBrickPickerVisible(true);
        console.log('Delayed for 1 second.');
      }, 550);
    } else {
      setBrickPickerVisible(!brickPickerVisible);
    }

    // setBrickPickerVisible(!brickPickerVisible);
    // setColorPickerVisible(false);
  };

  const toggleToolPicker = () => {
    setToolPickerVisible(!toolPickerVisible);
  };

  return (
    <>
      <AppBar
        title="TempleTask"
        titleStyle={{
          fontWeight: '700',
          // color: '#4ce01a',
          color: 'white',
          // textShadowColor: 'rgba(0, 0, 0, 0.75)',
          // textShadowOffset: {width: -1, height: 1},
          // textShadowRadius: 10,
        }}
        leading={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name="menu" {...props} />}
              {...props}
              style={{marginRight: -12}}
              onPress={() => toggleModal()}
            />
            <Image
              style={styles.brickPicks}
              source={require('../Images/logoNoBackground.png')}
            />
          </HStack>
        )}
        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <IconIon name="hammer" {...props} />}
              onPress={() => toggleToolPicker()}
              {...props}
            />
            <IconButton
              icon={props => (
                <IconFoundation
                  name="paint-bucket"
                  {...props}
                  color={selectedColor}
                  onPress={() => toggleColorPicker()}
                />
              )}
              {...props}
            />

            <IconButton
              icon={props => (
                <IconMaterial
                  name="toy-brick"
                  {...props}
                  onPress={() => toggleBrickPicker()}
                />
              )}
              {...props}
            />
            {/* <IconButton
              icon={props => <IconMaterial name="delete" {...props} />}
              {...props}
            /> */}
          </HStack>
        )}
      />

      <OptionsModal
        toggleModal={toggleModal}
        setOptionsModalVisible={setOptionsModalVisible}
        isVisible={optionsModalVisible}
      />

      {colorPickerVisible ? (
        // <ColorPicker
        //   selectColor={selectColor}
        //   toggleColorPicker={toggleColorPicker}
        //   setColorPickerVisible={setColorPickerVisible}
        //   colorPickerVisible={colorPickerVisible}
        // />
        <TestPicker
          selectColor={selectColor}
          toggleColorPicker={toggleColorPicker}
          setColorPickerVisible={setColorPickerVisible}
          colorPickerVisible={colorPickerVisible}
          animation={animation}
          slideIn={slideIn}
          // animated={animated}
        />
      ) : null}
      {/* {!brickPickerVisible ? (
        <TestPicker
          selectColor={selectColor}
          toggleColorPicker={toggleColorPicker}
          setColorPickerVisible={setColorPickerVisible}
          colorPickerVisible={colorPickerVisible}
          // animated={animated}
          animation={animation}
          slideIn={slideIn}
          slideOut={slideOut}
        />
      ) : null} */}

      <BrickPicker
        selectBrick={selectBrick}
        toggleBrickPicker={toggleBrickPicker}
        setBrickPickerVisible={setBrickPickerVisible}
        isVisible={brickPickerVisible}
      />

      {toolPickerVisible ? (
        <ToolPicker
          toggleToolPicker={toggleToolPicker}
          setToolPickerVisible={setToolPickerVisible}
          toolPickerVisible={toolPickerVisible}
          toggleGrid={toggleGrid}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  brickPicks: {
    width: 42,
    height: 35,
    margin: 3,
    marginRight: -27,
    marginTop: 7,
  },
});

export default BuilderToolbar;
