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
import HallOfFameModal from './HallOfFameModal';
import PublishSceneModal from './PublishSceneModal';
import ResetSceneModal from './ResetSceneModal';
import SettingsModal from './SettingsModal';
import LogoutModal from './LogoutModal';

const OptionsModal = props => {
  const {setOptionsModalVisible, optionsModalVisible} = props;
  const [userProfileModalVisible, setUserProfileModalVisible] = useState(false);
  const [hallofFameModalVisible, setHallofFameModalVisible] = useState(false);
  const [publishSceneModalVisible, setPublishSceneModalVisible] =
    useState(false);
  const [resetSceneModalVisible, setResetSceneModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  return (
    <>
      <View>
        <Modal
          style={styles.goalModal}
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
              // setOptionsModalVisible(false);
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
                    onPress={() => setHallofFameModalVisible(true)}
                  />
                  <ListItem
                    title="Publish Scene"
                    leading={<Icon name="publish" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                    onPress={() => setPublishSceneModalVisible(true)}
                  />
                  <ListItem
                    title="Reset Scene"
                    leading={<Icon name="lock-reset" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                    onPress={() => setResetSceneModalVisible(true)}
                  />

                  <ListItem
                    title="Settings"
                    leading={<IconIon name="settings-outline" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                    onPress={() => setSettingsModalVisible(true)}
                  />
                  <ListItem
                    title="Logout"
                    leading={<Icon name="logout" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                    onPress={() => {
                      setLogoutModalVisible(true);
                    }}
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
          {hallofFameModalVisible ? (
            <HallOfFameModal
              setHallofFameModalVisible={setHallofFameModalVisible}
              hallofFameModalVisible={hallofFameModalVisible}
            />
          ) : null}
          {publishSceneModalVisible ? (
            <PublishSceneModal
              setPublishSceneModalVisible={setPublishSceneModalVisible}
              publishSceneModalVisible={publishSceneModalVisible}
            />
          ) : null}
          {resetSceneModalVisible ? (
            <ResetSceneModal
              setResetSceneModalVisible={setResetSceneModalVisible}
              resetSceneModalVisible={resetSceneModalVisible}
            />
          ) : null}
          {settingsModalVisible ? (
            <SettingsModal
              setSettingsModalVisible={setSettingsModalVisible}
              settingsModalVisible={settingsModalVisible}
            />
          ) : null}
          {logoutModalVisible ? (
            <LogoutModal
              setLogoutModalVisible={setLogoutModalVisible}
              logoutModalVisible={logoutModalVisible}
            />
          ) : null}
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainModal: {
    display: 'flex',
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
});
export default OptionsModal;
