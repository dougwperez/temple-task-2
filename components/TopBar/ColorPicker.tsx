import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const ColorPicker = props => {
  const {toggleColorPicker, setColorPickerVisible, colorPickerVisible} = props;
  return (
    <View>
      <Modal
        isVisible={colorPickerVisible}
        hasBackdrop={true}
        animationType="fade"
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        useNativeDriver={true}
        customBackdrop={
          <TouchableWithoutFeedback onPress={toggleColorPicker}>
            <View style={{flex: 1}} />
          </TouchableWithoutFeedback>
        }>
        <View style={styles.mainModal}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainModal: {
    marginHorizontal: -20,
    marginBottom: 580,
    backgroundColor: 'white',
    // borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default ColorPicker;
