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

import {HStack, ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import {Auth} from 'aws-amplify';

const LogoutModal = props => {
  const {logoutModalVisible, setLogoutModalVisible} = props;

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
            setLogoutModalVisible(!logoutModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.mainModal}>
              <Text style={styles.modalTitle}>
                Are you sure you want to Log Out from TempleTask?
              </Text>
              <>
                <Image
                  style={styles.modalImage}
                  source={require('../Images/logoNoBackground.png')}
                />
              </>
              <HStack style={styles.buttonRow}>
                <Pressable
                  style={[styles.confirmButton]}
                  onPress={() => Auth.signOut()}>
                  <Text style={styles.textStyle}>Yes, Log Out</Text>
                </Pressable>
                <Pressable
                  style={[styles.cancelButton]}
                  onPress={() => setLogoutModalVisible(false)}>
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
    backgroundColor: 'green',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
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
    width: 336,
    height: 280,
    marginLeft: -15,
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 1,
  },
  buttonRow: {
    marginTop: 'auto',
    marginHorizontal: 35,
  },
});
export default LogoutModal;
