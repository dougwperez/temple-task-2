import React, {useRef, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {AppBar, HStack, IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconOcti from 'react-native-vector-icons/Octicons';

const ColorPicker = props => {
  const [selectedTool, setSelectedTool] = useState('build');
  const {
    toggleBuild,
    togglePaint,
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
            <IconMaterial
              name="add-box"
              {...props}
              color={selectedTool === 'build' ? '#ffbe0b' : '#6F7378'}
            />
          )}
          {...props}
          onPress={() => {
            toggleBuild();
            selectedTool === 'build'
              ? setSelectedTool('')
              : setSelectedTool('build');
          }}
        />
        <IconButton
          icon={props => (
            <IconOcti
              name="paintbrush"
              {...props}
              color={selectedTool === 'brush' ? '#ffbe0b' : '#6F7378'}
            />
          )}
          {...props}
          onPress={() => {
            togglePaint();
            selectedTool === 'brush'
              ? setSelectedTool('build')
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
              ? setSelectedTool('build')
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
              ? setSelectedTool('build')
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
