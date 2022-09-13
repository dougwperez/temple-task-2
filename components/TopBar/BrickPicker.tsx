import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HStack} from '@react-native-material/core';
import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';

const BrickPicker = props => {
  const {
    toggleBrickPicker,
    setBrickPickerVisible,
    brickPickerVisible,
    selectBrick,
    isVisible,
  } = props;
  return (
    <View style={styles.modalContainer}>
      <Modal
        isVisible={isVisible}
        hasBackdrop={true}
        // animationType="fade"
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
              <TouchableOpacity
                style={styles.brickPicks}
                onPress={() => selectBrick(0)}>
                <Image
                  style={styles.brickImg}
                  source={require('../Images/1x1.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.brickPicks}
                onPress={() => selectBrick(1)}>
                <Image
                  style={styles.brickImg}
                  source={require('../Images/1x2.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.brickPicks}
                onPress={() => selectBrick(3)}>
                <Image
                  style={styles.brickImg}
                  source={require('../Images/1x3.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.brickPicks}
                onPress={() => selectBrick(5)}>
                <Image
                  style={styles.brickImg}
                  source={require('../Images/1x4.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.brickPicks}
                onPress={() => selectBrick(2)}>
                <Image
                  style={styles.brickImg}
                  source={require('../Images/2x2.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.brickPicks}
                onPress={() => selectBrick(4)}>
                <Image
                  style={styles.brickImg}
                  source={require('../Images/2x3.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.brickPicks}
                onPress={() => selectBrick(6)}>
                <Image
                  style={styles.brickImg}
                  source={require('../Images/2x4.png')}
                />
              </TouchableOpacity>
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
  brickImg: {
    width: 42,
    height: 35,
    marginTop: -1,
    // margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
export default BrickPicker;
