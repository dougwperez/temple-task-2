import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
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

const BuilderToolbar = props => {
  const {toggleGrid} = props;

  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [brickPickerVisible, setBrickPickerVisible] = useState(false);
  const [toolPickerVisible, setToolPickerVisible] = useState(false);
  // const [isOpenTop, setIsOpenTop] = React.useState(false);

  const toggleModal = () => {
    setOptionsModalVisible(!optionsModalVisible);
  };

  const toggleColorPicker = () => {
    setColorPickerVisible(!colorPickerVisible);
  };

  const toggleBrickPicker = () => {
    setBrickPickerVisible(!brickPickerVisible);
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
          color: '#50eb1a',
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10,
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
      {optionsModalVisible ? (
        <OptionsModal
          toggleModal={toggleModal}
          setOptionsModalVisible={setOptionsModalVisible}
          optionsModalVisible={optionsModalVisible}
        />
      ) : null}
      {colorPickerVisible ? (
        <ColorPicker
          toggleColorPicker={toggleColorPicker}
          setColorPickerVisible={setColorPickerVisible}
          colorPickerVisible={colorPickerVisible}
        />
      ) : null}
      {brickPickerVisible ? (
        <BrickPicker
          toggleBrickPicker={toggleBrickPicker}
          setBrickPickerVisible={setBrickPickerVisible}
          brickPickerVisible={brickPickerVisible}
        />
      ) : null}
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
