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
// import TestPicker from './TestPicker';

const BuilderToolbar = props => {
  const {toggleGrid, selectColor, selectedColor, selectBrick, selectedBrick} =
    props;

  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [brickPickerVisible, setBrickPickerVisible] = useState(false);
  const [toolPickerVisible, setToolPickerVisible] = useState(false);

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
      }, 500);
    } else if (brickPickerVisible) {
      slideOut();
      setTimeout(() => {
        setBrickPickerVisible(false);
      }, 500);
      setTimeout(() => {
        setColorPickerVisible(true);
      }, 510);
    } else if (toolPickerVisible) {
      slideOut();
      setTimeout(() => {
        setToolPickerVisible(false);
      }, 500);
      setTimeout(() => {
        setColorPickerVisible(true);
      }, 510);
    } else {
      setColorPickerVisible(true);
    }
  };

  const toggleBrickPicker = () => {
    if (brickPickerVisible) {
      slideOut();
      setTimeout(() => {
        setBrickPickerVisible(false);
      }, 500);
    } else if (colorPickerVisible) {
      slideOut();
      setTimeout(() => {
        setColorPickerVisible(false);
      }, 500);
      setTimeout(() => {
        setBrickPickerVisible(true);
      }, 510);
    } else if (toolPickerVisible) {
      slideOut();
      setTimeout(() => {
        setToolPickerVisible(false);
      }, 500);
      setTimeout(() => {
        setBrickPickerVisible(true);
      }, 510);
    } else {
      setBrickPickerVisible(true);
    }
  };

  const toggleToolPicker = () => {
    if (toolPickerVisible) {
      slideOut();
      setTimeout(() => {
        setToolPickerVisible(false);
      }, 500);
    } else if (colorPickerVisible) {
      slideOut();
      setTimeout(() => {
        setColorPickerVisible(false);
      }, 500);
      setTimeout(() => {
        setToolPickerVisible(true);
      }, 510);
    } else if (brickPickerVisible) {
      slideOut();
      setTimeout(() => {
        setBrickPickerVisible(false);
      }, 500);
      setTimeout(() => {
        setToolPickerVisible(true);
      }, 510);
    } else {
      setToolPickerVisible(true);
    }
    // setToolPickerVisible(!toolPickerVisible);
  };

  return (
    <>
      <AppBar
        title="TempleTask"
        titleStyle={{
          fontWeight: '700',
          color: 'white',
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
                  // style={{borderWidth: 1}}
                />
              )}
              onPress={() => toggleColorPicker()}
              {...props}
            />

            <IconButton
              icon={props => <IconMaterial name="toy-brick" {...props} />}
              onPress={() => toggleBrickPicker()}
              {...props}
            />
          </HStack>
        )}
      />

      <OptionsModal
        toggleModal={toggleModal}
        setOptionsModalVisible={setOptionsModalVisible}
        isVisible={optionsModalVisible}
      />

      {colorPickerVisible ? (
        <ColorPicker
          selectColor={selectColor}
          toggleColorPicker={toggleColorPicker}
          setColorPickerVisible={setColorPickerVisible}
          colorPickerVisible={colorPickerVisible}
          animation={animation}
          slideIn={slideIn}
        />
      ) : null}

      {brickPickerVisible ? (
        <BrickPicker
          selectBrick={selectBrick}
          toggleBrickPicker={toggleBrickPicker}
          setBrickPickerVisible={setBrickPickerVisible}
          brickPickerVisible={brickPickerVisible}
          animation={animation}
          slideIn={slideIn}
        />
      ) : null}

      {toolPickerVisible ? (
        <ToolPicker
          toggleToolPicker={toggleToolPicker}
          setToolPickerVisible={setToolPickerVisible}
          toolPickerVisible={toolPickerVisible}
          toggleGrid={toggleGrid}
          animation={animation}
          slideIn={slideIn}
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
