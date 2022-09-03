import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {HStack} from '@react-native-material/core';
import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const ColorPicker = props => {
  const {toggleColorPicker, setColorPickerVisible, colorPickerVisible} = props;
  return (
    <View style={styles.modalContainer}>
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
        <View>
          <HStack style={styles.mainModal}>
            <HStack style={styles.colorBoxContainer}>
              <View
                style={[{backgroundColor: '#FF0000'}, styles.colorBox]}></View>
              <View
                style={[{backgroundColor: '#FF9800'}, styles.colorBox]}></View>
              <View
                style={[{backgroundColor: '#F0E100'}, styles.colorBox]}></View>
              <View
                style={[{backgroundColor: '#00DE00'}, styles.colorBox]}></View>
              <View
                style={[{backgroundColor: '#A1BC24'}, styles.colorBox]}></View>
              <View
                style={[{backgroundColor: '#0011CF'}, styles.colorBox]}></View>
              <View
                style={[{backgroundColor: '#FFFFFF'}, styles.colorBox]}></View>
              <View
                style={[{backgroundColor: '#000000'}, styles.colorBox]}></View>
              <View
                style={[{backgroundColor: '#652A0C'}, styles.colorBox]}></View>
            </HStack>
          </HStack>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    // height: 1,
  },
  mainModal: {
    marginHorizontal: -20,
    marginBottom: 623,
    backgroundColor: '#6226ee',
    // borderRadius: 20,
    padding: 20,
    height: 30,
    alignItems: 'center',
    // justifyContent: 'Center',
    borderTopColor: 'gray',
    borderTopWidth: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  colorBox: {
    width: 30,
    height: 30,
    margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
  },
  colorBoxContainer: {
    justifyContent: 'center',
  },
});
export default ColorPicker;
