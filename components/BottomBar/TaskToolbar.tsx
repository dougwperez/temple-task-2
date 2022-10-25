import React, {useState, useEffect} from 'react';
// import {View} from 'react-native';
import {Button, AppBar, HStack, IconButton} from '@react-native-material/core';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import GoalsModal from './GoalsModal';
import CompletionModal from './CompletionModal';
import {DataStore, Auth, API, graphqlOperation} from 'aws-amplify';
import {TaskCounter} from '../.././src/models';
import * as queries from '../.././src/graphql/queries';

const TaskToolbar = props => {
  const {coinCount, getTaskCounterApp, counterId} = props;
  const [goalModalVisible, setGoalModalVisible] = useState(false);
  const [completionModalVisible, setCompletionModalVisible] = useState(false);
  const [coins, setCoins] = useState(Number);
  // const [counterId, setCounterId] = useState('');
  const [allTodos, setAllTodos] = useState('');

  console.log('coins', coins);
  console.log('Koca: allTodos!!!!!! ', allTodos);

  async function getAllTodos() {
    try {
      let filterByUserID = {
        userId: {
          eq: Auth.user.attributes.sub, // filter priority = 1
        },
      };

      const allTodos = await API.graphql({
        query: queries.listTodos,
        variables: {filter: filterByUserID},
      });

      const todoList = allTodos.data?.listTodos?.items;
      // console.log('Koca: todoList ', todoList);

      await setAllTodos(todoList);
    } catch (err) {
      console.log('error checking data:', err);
    }
  }

  useEffect(() => {
    getAllTodos();
    getTaskCounterApp();
  }, []);

  return (
    <>
      <AppBar
        title={`Coins ${coinCount}`}
        titleStyle={{
          fontWeight: '700',
          marginLeft: -5,
          marginRight: -10,
          color: coinCount === 65 ? 'red' : '#EEBC1D',
        }}
        tintColor={coinCount === 65 ? 'red' : '#EEBC1D'}
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
              title="Goals"
              color="white"
              tintColor={goalModalVisible ? '#6226ee' : '#6F7378'}
              style={{
                color: 'red',
                borderWidth: 0.6,
                borderColor: '#b6b6b6',
              }}
              backgroundColor="white"
              leading={props => <IconFont name="trophy" {...props} />}
              onPress={() => setGoalModalVisible(true)}
            />
            <Button
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
          allTodos={allTodos}
          getAllTodos={getAllTodos}
        />
      ) : null}
      {completionModalVisible ? (
        <CompletionModal
          setCompletionModalVisible={setCompletionModalVisible}
          completionModalVisible={completionModalVisible}
          allTodos={allTodos}
          getTaskCounterApp={getTaskCounterApp}
          counterId={counterId}
          coinCount={coinCount}
        />
      ) : null}
    </>
  );
};

export default TaskToolbar;
