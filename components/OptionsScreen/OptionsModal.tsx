import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';

// import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import UserProfileModal from './UserProfileModal';

const OptionsModal = props => {
  const {setOptionsModalVisible, optionsModalVisible} = props;
  const [userProfileModalVisible, setUserProfileModalVisible] = useState(false);
  console.log('Koca: userProfileModalVisible ', userProfileModalVisible);

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
            setOptionsModalVisible(!optionsModalVisible);
          }}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              setOptionsModalVisible(false);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.mainModal}>
                <Text style={styles.modalTitle}>Main Menu</Text>
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

                  <ListItem
                    title="Help"
                    leading={<Icon name="help" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                  />
                  <ListItem
                    title="Settings"
                    leading={<IconIon name="settings-outline" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                  />
                  <ListItem
                    title="Logout"
                    leading={<Icon name="logout" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() =>
                      setOptionsModalVisible(!optionsModalVisible)
                    }>
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </>
              </View>
            </View>
          </TouchableOpacity>
          {userProfileModalVisible ? (
            <UserProfileModal
              setUserProfileModalVisible={setUserProfileModalVisible}
              userProfileModalVisible={userProfileModalVisible}
            />
          ) : null}
        </Modal>
      </View>

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
    marginTop: '8%',
    // marginBottom: -10,
    // marginVertical: 50,
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
export default OptionsModal;
