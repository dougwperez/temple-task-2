import React, {useState} from 'react';
// import {View} from 'react-native';
import {Button, AppBar, HStack, IconButton} from '@react-native-material/core';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';
// import {
//   Provider,
//   Dialog,
//   DialogHeader,
//   DialogContent,
//   DialogActions,
//   Text,
// } from '@react-native-material/core';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import GoalsModal from './GoalsModal';
import CompletionModal from './CompletionModal';

const TaskToolbar = () => {
  const [goalModalVisible, setGoalModalVisible] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);

  return (
    <>
      <AppBar
        title="Coins: 2"
        leading={props => (
          <IconFont5 name="coins" {...props} stye={{color: 'Secondary'}} />
        )}
        variant="bottom"
        style={{
          position: 'absolute',
          start: 0,
          end: 0,
          bottom: 0,
          height: 75,
          paddingHorizontal: 13,
          paddingTop: 10,
        }}
        trailing={props => (
          <HStack spacing={8}>
            <Button
              // variant="outlined"
              title="Goals"
              color="white"
              tintColor="#EEBC1D"
              backgroundColor="white"
              leading={props => <IconFont name="trophy" {...props} />}
              onPress={() => setGoalModalVisible(true)}
            />
            <Button
              // variant="outlined"
              title="Done!"
              color="white"
              tintColor="green"
              backgroundColor="white"
              leading={props => <IconIon name="checkmark-circle" {...props} />}
              onPress={() => setCompletionModalVisible(true)}
            />
          </HStack>
        )}
      />
      {goalModalVisible ? (
        <GoalsModal
          setGoalModalVisible={setGoalModalVisible}
          goalModalVisible={goalModalVisible}
        />
      ) : null}
      {completionModalVisible ? (
        <CompletionModal
          setCompletionModalVisible={setCompletionModalVisible}
          completionModalVisible={completionModalVisible}
        />
      ) : null}
    </>
  );
};

export default TaskToolbar;