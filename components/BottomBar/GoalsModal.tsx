import React, {useState} from 'react';
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

const DATA = [
  {
    id: 'bd7acbea',
    title: 'Food Journal',
  },
  {
    id: '3ac68afc',
    title: 'Go to Gym for one hour',
  },
  {
    id: '58694a0f',
    title: 'Do Three Toy Problems',
  },
];

const GoalsModal = props => {
  const {setGoalModalVisible, goalModalVisible} = props;
  const [selectedId, setSelectedId] = useState(null);
  const [text, onChangeText] = React.useState('Add your task..');

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';

    const Item = ({item, onPress, backgroundColor, textColor}) => (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{`\u2022 ${item.title}`}</Text>
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
          icon={props => <Icon name="delete" {...props} />}
          color="primary"
        />
      </HStack>
    );
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setGoalModalVisible(!goalModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Edit My Tasks</Text>
            <SafeAreaView style={styles.container}>
              <HStack>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                />
                <IconButton
                  icon={props => <Icon name="plus" {...props} />}
                  color="primary"
                />
              </HStack>
              <FlatList
                data={DATA}
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
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 5,

    height: 40,
    margin: 12,
    padding: 10,
    width: 150,
  },
  title: {
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.1,
    padding: 10,
    width: 150,
    backgroundColor: '#e4f6f8',
    borderRadius: 10,
  },
  todoWrapper: {
    display: 'flex',
  },
});
export default GoalsModal;
