import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import {IconButton, HStack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DataStore, Auth, API, graphqlOperation} from 'aws-amplify';
import {Todo} from '../.././src/models';
// import * as mutations from './graphql/mutations';
import {
  createTodo,
  updateTodo,
  deleteTodo,
} from '../.././src/graphql/mutations';

import * as mutations from '../.././src/graphql/mutations';
import * as subscriptions from '../.././src/graphql/subscriptions';
import {keyboardDismissHandlerManager} from 'native-base';

const GoalsModal = props => {
  const {setGoalModalVisible, goalModalVisible, allTodos, getAllTodos} = props;
  const [selectedId, setSelectedId] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  async function addTodo() {
    try {
      // setName('');
      Keyboard.dismiss();
      const todoVar = {
        name,
        description,
        isComplete: false,
        userId: Auth.user.attributes.sub,
        isLocked: false,
      };

      await API.graphql(graphqlOperation(createTodo, {input: todoVar}));
      setName('');
      setDescription('');
      getAllTodos();
    } catch (e) {
      console.log('create failed: $e', e);
    }
  }

  async function deleteTodo(todo) {
    console.log('Koca: todo ', todo);
    try {
      const todoDetails = {
        id: todo.id,
        _version: todo._version,
      };

      await API.graphql({
        query: mutations.deleteTodo,
        variables: {input: todoDetails},
      });
      getAllTodos();
    } catch (e) {
      console.log('Delete failed: $e', e);
    }
  }

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';

    const Item = ({item, onPress, backgroundColor, textColor}) => (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{`${item.name}`}</Text>
      </TouchableOpacity>
    );

    return (
      <HStack>
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          // backgroundColor={{backgroundColor}}
          textColor="black"
        />
        {/* <IconButton
          icon={props => <Icon name="lead-pencil" {...props} />}
          color="primary"
        /> */}
        <IconButton
          style={styles.deleteButton}
          icon={props => <Icon name="delete" {...props} />}
          color="primary"
          onPress={() => deleteTodo(item)}
        />
      </HStack>
    );
  };

  return (
    <View>
      <Modal
        style={styles.goalModal}
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setGoalModalVisible(!goalModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Edit My Tasks</Text>
            <SafeAreaView style={styles.container}>
              <HStack>
                <TextInput
                  style={styles.input}
                  onChangeText={setName}
                  value={name}
                />
                <IconButton
                  icon={props => <Icon name="plus" {...props} />}
                  color="primary"
                  onPress={addTodo}
                />
              </HStack>
              <FlatList
                data={allTodos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
              />
            </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setGoalModalVisible(!goalModalVisible)}>
              <Text style={styles.textStyle}>Save Tasks</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  goalModal: {
    // width: 200,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    margin: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '85%',
    height: '65%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'green',
  },
  deleteButton: {
    marginLeft: 45,
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
    paddingTop: 15,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 0,
    height: 40,
    padding: 10,
    width: 170,
  },
  title: {
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.1,
    padding: 10,
    width: 205,
    backgroundColor: '#e4f6f8',
    borderRadius: 10,
  },
  todoWrapper: {
    display: 'flex',
  },
});
export default GoalsModal;
