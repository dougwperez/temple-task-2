import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Modal as RNModal,
} from 'react-native';

import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import UserProfileModal from './UserProfileModal';

const OptionsModal = props => {
  const {toggleModal, setOptionsModalVisible, optionsModalVisible, isVisible} =
    props;
  const [userProfileModalVisible, setUserProfileModalVisible] = useState(false);
  console.log('Koca: userProfileModalVisible ', userProfileModalVisible);

  return (
    <>
      <View>
        <Modal
          isVisible={isVisible}
          hasBackdrop={true}
          backdropColor="black"
          // animationIn={'slideInLeft'}
          // animationOut={'slideOutLeft'}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          useNativeDriver={true}
          customBackdrop={
            <TouchableWithoutFeedback onPress={toggleModal}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'black',
                  // backgroundOpacity: 1,
                }}
              />
            </TouchableWithoutFeedback>
          }>
          <View style={styles.mainModal}>
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
            </>
          </View>
        </Modal>
      </View>
      {/* {userProfileModalVisible ? (
        <UserProfileModal
          setGoalModalVisible={setUserProfileModalVisible}
          goalModalVisible={userProfileModalVisible}
        />
      ) : null} */}
      <UserProfileModal
        setGoalModalVisible={setUserProfileModalVisible}
        goalModalVisible={userProfileModalVisible}
        isVisible={userProfileModalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  mainModal: {
    // marginLeft: -20,

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
});
export default OptionsModal;
