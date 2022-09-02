import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {HStack} from '@react-native-material/core';
import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';

const BrickPicker = props => {
  const {toggleBrickPicker, setBrickPickerVisible, brickPickerVisible} = props;
  return (
    <View style={styles.modalContainer}>
      <Modal
        isVisible={brickPickerVisible}
        hasBackdrop={true}
        animationType="fade"
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        useNativeDriver={true}
        customBackdrop={
          <TouchableWithoutFeedback onPress={toggleBrickPicker}>
            <View style={{flex: 1}} />
          </TouchableWithoutFeedback>
        }>
        <View>
          <HStack style={styles.mainModal}>
            <HStack style={styles.colorBoxContainer}>
              <View style={styles.colorBox}></View>

              <Image source={require('../Images/3005.png')} />
              <Image source={require('../Images/3005.png')} />
              <View style={styles.colorBox}></View>
              <View style={styles.colorBox}></View>
              <View style={styles.colorBox}></View>
              <View style={styles.colorBox}></View>
              <View style={styles.colorBox}></View>
              <View style={styles.colorBox}></View>
              <View style={styles.colorBox}></View>
              <View style={styles.colorBox}></View>
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
    width: 20,
    height: 20,
    margin: 2,
    // marginBottm: 100,
    backgroundColor: 'red',
  },
  colorBoxContainer: {
    justifyContent: 'center',
  },
});
export default BrickPicker;
