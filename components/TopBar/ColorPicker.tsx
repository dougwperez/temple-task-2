import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {HStack} from '@react-native-material/core';
import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const ColorPicker = props => {
  const {
    toggleColorPicker,
    setColorPickerVisible,
    colorPickerVisible,
    selectColor,
  } = props;
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
              <TouchableOpacity
                style={[{backgroundColor: '#FF0000'}, styles.colorBox]}
                onPress={() => selectColor('#FF0000')}></TouchableOpacity>
              <TouchableOpacity
                style={[{backgroundColor: '#FF9800'}, styles.colorBox]}
                onPress={() => selectColor('#FF9800')}></TouchableOpacity>

              <TouchableOpacity
                style={[{backgroundColor: '#F0E100'}, styles.colorBox]}
                onPress={() => selectColor('#F0E100')}></TouchableOpacity>

              <TouchableOpacity
                style={[{backgroundColor: '#00DE00'}, styles.colorBox]}
                onPress={() => selectColor('#00DE00')}></TouchableOpacity>

              <TouchableOpacity
                style={[{backgroundColor: '#A1BC24'}, styles.colorBox]}
                onPress={() => selectColor('#A1BC24')}></TouchableOpacity>

              <TouchableOpacity
                style={[{backgroundColor: '#0011CF'}, styles.colorBox]}
                onPress={() => selectColor('#0011CF')}></TouchableOpacity>

              <TouchableOpacity
                style={[{backgroundColor: '#FFFFFF'}, styles.colorBox]}
                onPress={() => selectColor('#FFFFFF')}></TouchableOpacity>

              <TouchableOpacity
                style={[{backgroundColor: '#000000'}, styles.colorBox]}
                onPress={() => selectColor('#000000')}></TouchableOpacity>

              <TouchableOpacity
                style={[{backgroundColor: '#652A0C'}, styles.colorBox]}
                onPress={() => selectColor('#652A0C')}></TouchableOpacity>
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
