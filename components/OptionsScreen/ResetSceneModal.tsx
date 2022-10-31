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
  Image,
} from 'react-native';

import {ListItem, HStack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';

const ResetSceneModal = props => {
  const {resetSceneModalVisible, setResetSceneModalVisible} = props;

  return (
    <>
      <View>
        <Modal
          style={styles.goalModal}
          onBack
          animationType="fade"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setResetSceneModalVisible(!resetSceneModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.mainModal}>
              <Text style={styles.modalTitle}>
                Are you sure you want to reset your scene?
              </Text>
              <Image
                style={styles.modalImage}
                source={require('../Images/trash.png')}
              />
              <Text style={styles.modalText}>
                This action cannot be undone.
              </Text>

              <HStack style={styles.buttonRow}>
                <Pressable
                  style={[styles.confirmButton]}
                  onPress={() => setResetSceneModalVisible(false)}>
                  <Text style={styles.textStyle}>Yes, Reset Scene</Text>
                </Pressable>
                <Pressable
                  style={[styles.cancelButton]}
                  onPress={() => setResetSceneModalVisible(false)}>
                  <Text style={styles.cancelText}>No, Cancel</Text>
                </Pressable>
              </HStack>
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
    height: 500,
    marginVertical: 100,
    backgroundColor: 'white',
    borderRadius: 20,
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

    marginHorizontal: 20,
    marginTop: 10,
  },
  cancelButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    color: 'black',
    marginLeft: 10,
    marginTop: 'auto',
  },
  confirmButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 'auto',
    backgroundColor: 'red',
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
  cancelText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 1,
    lineHeight: 25,
  },
  modalImage: {
    resizeMode: 'contain',
    height: 300,
    width: 200,
    marginHorizontal: 40,
    marginTop: -40,
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 1,
  },
  buttonRow: {
    marginTop: 'auto',
    marginHorizontal: 23,
  },
});
export default ResetSceneModal;
