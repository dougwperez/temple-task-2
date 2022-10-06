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

import {ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';

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
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setUserProfileModalVisible(false);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.mainModal}>
                <Text style={styles.modalTitle}>User Profile</Text>
                <>
                  <ListItem
                    title="User Profile"
                    leading={<Icon name="account" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                    onPress={() => setUserProfileModalVisible(true)}
                  />
                  <ListItem
                    title="Hall of Fame"
                    leading={<Icon name="trophy-award" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                  />
                  <ListItem
                    title="Publish Scene"
                    leading={<Icon name="publish" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                  />
                  <ListItem
                    title="Reset Scene"
                    leading={<Icon name="lock-reset" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                  />
                </>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setUserProfileModalVisible(false)}>
                  <Text style={styles.textStyle}>Save</Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      {/* {userProfileModalVisible ? (
        <UserProfileModal
          setGoalModalVisible={setUserProfileModalVisible}
          goalModalVisible={userProfileModalVisible}
        />
      ) : null} */}
      {/* <UserProfileModal
        setGoalModalVisible={setUserProfileModalVisible}
        goalModalVisible={userProfileModalVisible}
        isVisible={userProfileModalVisible}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  mainModal: {
    // marginLeft: -20,
    height: 500,
    marginVertical: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
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
    // alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    // width: 200,
    marginHorizontal: 100,
    // marginTop: '20%',
    marginBottom: 110,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
export default UserProfileModal;
