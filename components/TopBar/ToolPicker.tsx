import React, {useRef, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {AppBar, HStack, IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ColorPicker = props => {
  const {
    toggleGrid,
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
        // top: 91,
        marginBottom: -45,
        height: 45,
        backgroundColor: 'white',

        transform: [{translateX: animation}],
      }}>
      <HStack style={styles.colorBoxContainer}>
        <IconButton
          icon={props => (
            <Icon name="drag-variant" {...props} color="#6F7378" />
          )}
          {...props}
        />
        <IconButton
          icon={props => (
            <Icon name="cursor-default-click" {...props} color="#6F7378" />
          )}
          {...props}
        />
        <IconButton
          icon={props => (
            <Icon name="rotate-right" {...props} color="#6F7378" />
          )}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="grid" {...props} color="#6F7378" />}
          {...props}
          onPress={() => toggleGrid()}
        />
        <IconButton
          icon={props => (
            <Icon
              name="trash-can"
              {...props}
              color="#6F7378"
              // onPress={() => toggleBrickPicker()}
            />
          )}
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
