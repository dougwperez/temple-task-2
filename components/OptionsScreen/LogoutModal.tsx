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

const LogoutModal = props => {
  const {logoutModalVisible, setLogoutModalVisible} = props;

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
            setLogoutModalVisible(!logoutModalVisible);
          }}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setLogoutModalVisible(false);
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
                  {/* <Text style={styles.modalText}>
                    Are you sure you want to logout?
                  </Text> */}
                </>
                <HStack style={styles.buttonRow}>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setLogoutModalVisible(false)}>
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
          </TouchableOpacity>
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
    // marginHorizontal: 100,
    color: 'black',
    marginLeft: 10,

    marginTop: 'auto',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    // marginHorizontal: 100,

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
    // margin: 3,
    marginLeft: -10,
    // marginTop: 7,
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 18,
    // fontWeight: 'bold',
    paddingTop: 1,
  },
  buttonRow: {
    marginTop: 'auto',
    marginHorizontal: 35,
  },
});
export default LogoutModal;
