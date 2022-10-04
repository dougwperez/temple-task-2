import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';

const OptionsModal = props => {
  const {toggleModal, setOptionsModalVisible, optionsModalVisible, isVisible} =
    props;

  const animation = new Animated.Value(-350);

  const slideOut = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: -500,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const slideIn = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View>
      <Modal
        isVisible={isVisible}
        hasBackdrop={true}
        backdropColor="black"
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
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
          <Animated.View
            style={{
              // position: 'absolute',
              // width: '100%',
              // top: 91,
              transform: [{translateX: animation}],
            }}>
            <ListItem
              title="User Profile"
              leading={<Icon name="account" size={24} />}
              trailing={props => <Icon name="chevron-right" {...props} />}
              onPress={() => slideOut()}
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
          </Animated.View>
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
