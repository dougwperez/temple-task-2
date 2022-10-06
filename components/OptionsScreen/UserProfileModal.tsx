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

const UserProfileModal = props => {
  const {setOptionsModalVisible, optionsModalVisible, isVisible} = props;
  console.log('Koca: isVisible ', isVisible);

  return (
    <View>
      <Modal
        isVisible={isVisible}
        hasBackdrop={true}
        backdropColor="black"
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        // animationIn={'fadeIn'}
        // animationOut={'fadeOut'}
        useNativeDriver={true}
        customBackdrop={
          <TouchableWithoutFeedback>
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
              title="Something Something"
              leading={<Icon name="account" size={24} />}
              trailing={props => <Icon name="chevron-right" {...props} />}
              onPress={() => console.log('clicked')}
            />
          </>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainModal: {
    marginLeft: -20,

    marginVertical: 100,
    backgroundColor: 'red',
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
export default UserProfileModal;
