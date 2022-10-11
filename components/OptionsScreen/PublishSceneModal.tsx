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
  TextInput,
} from 'react-native';

import {ListItem, HStack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';

const PublishSceneModal = props => {
  const {publishSceneModalVisible, setPublishSceneModalVisible} = props;

  return (
    <>
      <View>
        <Modal
          style={styles.goalModal}
          animationType="fade"
          transparent={false}
          visible={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setPublishSceneModalVisible(!publishSceneModalVisible);
          }}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setPublishSceneModalVisible(false);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.mainModal}>
                <Text style={styles.modalTitle}>
                  Publish Scene to Hall of Fame
                </Text>
                <TextInput
                  style={styles.input}
                  // onChangeText={setName}
                  value={'Enter Title Here'}
                />
                <Image
                  style={styles.modalImage}
                  source={require('../Images/trophy.png')}
                />
                <Text style={styles.modalText}>
                  Only your scene will be published to the Hall of Fame. Your
                  tasks are private.
                </Text>

                <HStack style={styles.buttonRow}>
                  <Pressable
                    style={[styles.confirmButton]}
                    onPress={() => setPublishSceneModalVisible(false)}>
                    <Text style={styles.textStyle}>Yes, Publish Scene</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.cancelButton]}
                    onPress={() => setPublishSceneModalVisible(false)}>
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
  cancelText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: -25,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 1,
    lineHeight: 25,
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 0.1,
    padding: 10,
    width: 205,
    marginTop: 60,
    marginHorizontal: 40,
    marginVertical: 30,
    backgroundColor: '#e4f6f8',
    borderRadius: 10,
  },
  modalImage: {
    resizeMode: 'contain',
    height: 300,
    width: 200,
    marginHorizontal: 40,
    marginTop: -70,
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 1,
    lineHeight: 20,
    marginTop: -50,
  },
  buttonRow: {
    marginTop: 'auto',
    marginHorizontal: 15,
  },
});
export default PublishSceneModal;
