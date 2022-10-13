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
import {
  Avatar,
  Stack,
  TextInput,
  VStack,
  HStack,
} from '@react-native-material/core';

import {ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import {Auth} from 'aws-amplify';

const UserProfileModal = props => {
  const {userProfileModalVisible, setUserProfileModalVisible} = props;

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
            setUserProfileModalVisible(!userProfileModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.mainModal}>
              <Text style={styles.modalTitle}>
                {Auth.user.attributes.email}
              </Text>

              <VStack style={styles.contentStack} spacing={20}>
                <Avatar label="Doug Perez" style={styles.avatar} />
                <TextInput
                  style={styles.input}
                  label={'Username'}
                  variant="standard"
                />
              </VStack>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setUserProfileModalVisible(false)}>
                <Text style={styles.textStyle}>Save</Text>
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
  avatar: {},
  contentStack: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {width: '90%'},
});
export default UserProfileModal;
