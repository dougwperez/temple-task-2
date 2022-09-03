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

const ToolPicker = props => {
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
              <Image
                style={styles.brickPicks}
                source={require('../Images/1x1.png')}
              />
              <Image
                style={styles.brickPicks}
                source={require('../Images/1x2.png')}
              />
              <Image
                style={styles.brickPicks}
                source={require('../Images/1x3.png')}
              />
              <Image
                style={styles.brickPicks}
                source={require('../Images/1x4.png')}
              />
              <Image
                style={styles.brickPicks}
                source={require('../Images/2x2.png')}
              />
              <Image
                style={styles.brickPicks}
                source={require('../Images/2x3.png')}
              />
              <Image
                style={styles.brickPicks}
                source={require('../Images/2x4.png')}
              />
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
  brickPicks: {
    width: 42,
    height: 35,
    margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
export default ToolPicker;
