import React, {useState} from 'react';
import {View} from 'react-native';
import {AppBar, IconButton, HStack} from '@react-native-material/core';
// import Icon from '@expo/vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {Popover, Button, Box, Center, NativeBaseProvider} from 'native-base';
import ColorPicker from './ColorPicker';
import CompletionModal from '../BottomBar/CompletionModal';
import OptionsModal from '../OptionsScreen/OptionsModal';

import {
  Provider,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from '@react-native-material/core';

const BuilderToolbar = () => {
  const [optionsModalVisible, setOptionsModalVisible] = useState(false);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  // const [isOpenTop, setIsOpenTop] = React.useState(false);

  const toggleModal = () => {
    setOptionsModalVisible(!optionsModalVisible);
  };

  const toggleColorPicker = () => {
    setColorPickerVisible(!colorPickerVisible);
  };

  return (
    <>
      <AppBar
        title="TempleTask"
        leading={props => (
          <IconButton
            icon={props => <Icon name="menu" {...props} />}
            {...props}
            style={{marginRight: -12}}
            onPress={() => toggleModal()}
          />
        )}
        trailing={props => (
          <HStack>
            <IconButton
              icon={props => <IconIon name="hammer" {...props} />}
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
              icon={props => <IconMaterial name="toy-brick" {...props} />}
              {...props}
            />
            <IconButton
              icon={props => <IconMaterial name="delete" {...props} />}
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
          toggleColorPicker={toggleColorPicker}
          setColorPickerVisible={setColorPickerVisible}
          colorPickerVisible={colorPickerVisible}
        />
      ) : null}
    </>
  );
};
export default BuilderToolbar;
