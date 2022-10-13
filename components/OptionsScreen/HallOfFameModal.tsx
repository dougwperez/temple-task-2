import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const HallOfFameModal = props => {
  const {hallofFameModalVisible, setHallofFameModalVisible} = props;

  return (
    <>
      <View>
        <Modal
          style={styles.goalModal}
          onBack
          animationType="fade"
          transparent={false}
          visible={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setHallofFameModalVisible(!hallofFameModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.mainModal}>
              <Text style={styles.modalTitle}>Hall of Fame</Text>
              <></>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setHallofFameModalVisible(false)}>
                <Text style={styles.textStyle}>Back</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainModal: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    marginVertical: 100,
    backgroundColor: 'white',
    // borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',

    // marginHorizontal: 20,
    marginTop: '10%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 100,
    marginTop: 'auto',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 1,
  },
});
export default HallOfFameModal;
