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
import Svg1x1 from '../Images/1x1svg';
import Svg1x2 from '../Images/1x2svg';
import Svg1x3 from '../Images/1x3svg';
import Svg1x4 from '../Images/1x4svg';
import Svg2x2 from '../Images/2x2svg';
import Svg2x3 from '../Images/2x3svg';
import Svg2x4 from '../Images/2x4svg';
import Palette from '../Images/palettesvg';

import {
  Provider,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from '@react-native-material/core';

const BuilderToolbar = props => {
  const {
    toggleBuild,
    togglePaint,
    toggleGrid,
    toggleDelete,
    toggleRotate,
    setDeleteStatus,
    selectColor,
    selectedColor,
    selectBrick,
    selectedBrick,
  } = props;

  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [brickPickerVisible, setBrickPickerVisible] = useState(false);
  const [toolPickerVisible, setToolPickerVisible] = useState(false);
  const [selectedTool, setSelectedTool] = useState('build');

  const animation = new Animated.Value(-350);

  const noColors = () => {
    return brickPickerVisible || optionsModalVisible ? true : false;
  };

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
  };

  return (
    <>
      <AppBar
        style={{backgroundColor: 'white'}}
        title="TempleTask"
        titleStyle={{
          fontWeight: '700',
          color: 'green',
          // color: '#EEBC1D',
        }}
        leading={props => (
          <HStack>
            <IconButton
              icon={props => <Icon name="menu" {...props} />}
              {...props}
              style={{marginRight: -12}}
              onPress={() => toggleModal()}
              color="#6F7378"
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
              color="#6F7378"
            />
            <IconButton
              icon={props => (
                <Palette fill="red" />
                // <IconIon
                //   name="md-color-palette"
                //   {...props}
                //   color={selectedColor}
                // />
              )}
              onPress={() => toggleColorPicker()}
              {...props}
            />

            <IconButton
              icon={props =>
                selectedBrick === 0 ? (
                  <Svg1x1 />
                ) : selectedBrick === 1 ? (
                  <Svg1x2 />
                ) : selectedBrick === 3 ? (
                  <Svg1x3 />
                ) : selectedBrick === 5 ? (
                  <Svg1x4 />
                ) : selectedBrick === 2 ? (
                  <Svg2x2 />
                ) : selectedBrick === 4 ? (
                  <Svg2x3 />
                ) : selectedBrick === 6 ? (
                  <Svg2x4 />
                ) : (
                  <Svg1x1 />
                )
              }
              onPress={() => toggleBrickPicker()}
              {...props}
            />
          </HStack>
        )}
      />
      {optionsModalVisible ? (
        <OptionsModal
          toggleModal={toggleModal}
          setOptionsModalVisible={setOptionsModalVisible}
          optionsModalVisible={optionsModalVisible}
        />
      ) : null}

      {colorPickerVisible ? (
        <ColorPicker
          selectColor={selectColor}
          toggleColorPicker={toggleColorPicker}
          setColorPickerVisible={setColorPickerVisible}
          colorPickerVisible={colorPickerVisible}
          animation={animation}
          slideIn={slideIn}
          style={{top: 1000}}
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
          toggleBuild={toggleBuild}
          togglePaint={togglePaint}
          toggleGrid={toggleGrid}
          toggleDelete={toggleDelete}
          toggleRotate={toggleRotate}
          animation={animation}
          slideIn={slideIn}
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
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
