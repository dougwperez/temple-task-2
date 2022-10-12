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
} from 'react-native';
import {IconButton, HStack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DataStore, Auth} from 'aws-amplify';
import {Todo} from '../.././src/models';

const GoalsModal = props => {
  const {setGoalModalVisible, goalModalVisible} = props;
  const [selectedId, setSelectedId] = useState(null);
  const [text, onChangeText] = React.useState('Add your task..');

  console.log('auth', Auth.user.attributes);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // const [user]
  const [todos, setTodos] = useState([]);

  console.log('AUTHHH', Auth.user.attributes.sub);

  async function addTodo() {
    await DataStore.save(
      new Todo({
        name,
        description,
        isComplete: false,
        userId: Auth.user.attributes.sub,
      }),
    );
    setName('');
    setDescription('');
  }

  async function deleteTodo(todo) {
    try {
      await DataStore.delete(todo);
    } catch (e) {
      console.log('Delete failed: $e');
    }
  }

  useEffect(() => {
    const subscription = DataStore.observeQuery(Todo).subscribe(snapshot => {
      const {items, isSynced} = snapshot;
      console.log('Koca: items in Goal Modal', items);

      setTodos(items);
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

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
          backgroundColor={{backgroundColor}}
          textColor={{color}}
        />
        <IconButton
          icon={props => <Icon name="lead-pencil" {...props} />}
          color="primary"
        />
        <IconButton
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
                  // value={text}
                />
                <IconButton
                  icon={props => <Icon name="plus" {...props} />}
                  color="primary"
                  onPress={addTodo}
                />
              </HStack>
              <FlatList
                data={todos}
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
    // margin: 2,
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
