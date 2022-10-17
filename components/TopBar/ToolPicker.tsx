import React, {useRef, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {AppBar, HStack, IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/Octicons';

const ColorPicker = props => {
  const [selectedTool, setSelectedTool] = useState('#ffbe0b');
  const {
    toggleGrid,
    toggleDelete,
    toggleRotate,
    selectBrick,
    toolPickerVisible,
    animation,
    slideIn,
    slideOut,
  } = props;

  useEffect(() => {
    slideIn();
  }, [toolPickerVisible]);

  const deleteContainerFunc = () => {};

  return (
    <AppBar
      style={{
        position: 'relative',
        width: '100%',
        marginBottom: -45,
        height: 45,
        backgroundColor: 'white',

        transform: [{translateX: animation}],
      }}>
      <HStack style={styles.colorBoxContainer}>
        <IconButton
          icon={props => (
            <Icon
              name="cursor-default-click"
              {...props}
              color={selectedTool === 'drag' ? '#ffbe0b' : '#6F7378'}
            />
          )}
          {...props}
          onPress={() =>
            selectedTool === 'drag'
              ? setSelectedTool('')
              : setSelectedTool('drag')
          }
        />
        <IconButton
          icon={props => (
            <IconFont
              name="paintbrush"
              {...props}
              color={selectedTool === 'brush' ? '#ffbe0b' : '#6F7378'}
            />
          )}
          {...props}
          onPress={() => {
            selectedTool === 'brush'
              ? setSelectedTool('')
              : setSelectedTool('brush');
          }}
        />
        <IconButton
          icon={props => (
            <Icon
              name="rotate-right"
              {...props}
              color={selectedTool === 'rotate' ? '#ffbe0b' : '#6F7378'}
            />
          )}
          {...props}
          onPress={() => {
            toggleRotate();
            selectedTool === 'rotate'
              ? setSelectedTool('')
              : setSelectedTool('rotate');
          }}
        />
        <IconButton
          icon={props => <Icon name="grid" {...props} color="#6F7378" />}
          {...props}
          onPress={() => {
            toggleGrid();
            setSelectedTool('');
          }}
        />
        <IconButton
          icon={props => (
            <Icon
              name="trash-can"
              {...props}
              color={selectedTool === 'delete' ? '#ffbe0b' : '#6F7378'}
            />
          )}
          onPress={() => {
            toggleDelete();
            selectedTool === 'delete'
              ? setSelectedTool('')
              : setSelectedTool('delete');
          }}
          {...props}
        />
      </HStack>
    </AppBar>
  );
};

const styles = StyleSheet.create({
  colorBoxContainer: {
    justifyContent: 'center',
    marginTop: -45,
  },
});
export default ColorPicker;
