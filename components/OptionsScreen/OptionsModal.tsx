import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OptionsModal = props => {
  const {toggleModal, setOptionsModalVisible, optionsModalVisible} = props;
  return (
    <View>
      <Modal
        isVisible={optionsModalVisible}
        hasBackdrop={true}
        animationType="fade"
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        useNativeDriver={true}
        customBackdrop={
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={{flex: 1}} />
          </TouchableWithoutFeedback>
        }>
        <View style={styles.mainModal}>
          <>
            <ListItem
              title="User Profile"
              leading={<Icon name="account" size={24} />}
              trailing={props => <Icon name="chevron-right" {...props} />}
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
            {/* <ListItem
              title="Toggle Grid"
              leading={<Icon name="grid" size={24} />}
              trailing={props => <Icon name="chevron-right" {...props} />}
            /> */}
            <ListItem
              title="Help"
              leading={<Icon name="help" size={24} />}
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