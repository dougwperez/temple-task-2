import React, {useState, useEffect} from 'react';
// import {View} from 'react-native';
import {Button, AppBar, HStack, IconButton} from '@react-native-material/core';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import GoalsModal from './GoalsModal';
import CompletionModal from './CompletionModal';
import {DataStore} from 'aws-amplify';
import {TaskCounter} from '../.././src/models';

const TaskToolbar = () => {
  const [goalModalVisible, setGoalModalVisible] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const [coins, setCoins] = useState(Number);

  useEffect(() => {
    const subscription = DataStore.observeQuery(TaskCounter).subscribe(
      snapshot => {
        const {items, isSynced} = snapshot;
        setCoins(items[0].count);
      },
    );
    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak. Need to remove this line
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <AppBar
        title={`Coins ${coins}`}
        titleStyle={{
          fontWeight: '700',
          marginLeft: -5,
          marginRight: -10,
          color: '#EEBC1D',
        }}
        tintColor="#EEBC1D"
        leading={props => <IconFont5 name="coins" {...props} />}
        variant="bottom"
        style={{
          position: 'absolute',
          start: 0,
          end: 0,
          bottom: 0,
          height: 75,
          paddingHorizontal: 13,
          paddingTop: 10,
          backgroundColor: 'white',
        }}
        trailing={props => (
          <HStack spacing={8}>
            <Button
              // variant="outlined"
              title="Goals"
              color="white"
              // tintColor="#6226ee"
              tintColor={goalModalVisible ? '#6226ee' : '#6F7378'}
              style={{
                borderWidth: 0.6,
                borderColor: '#b6b6b6',
              }}
              backgroundColor="white"
              leading={props => <IconFont name="trophy" {...props} />}
              onPress={() => setGoalModalVisible(true)}
            />
            <Button
              // variant="outlined"
              title="Done!"
              color="white"
              tintColor={completionModalVisible ? 'green' : '#6F7378'}
              backgroundColor="white"
              style={{borderWidth: 0.6, borderColor: '#b6b6b6'}}
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
