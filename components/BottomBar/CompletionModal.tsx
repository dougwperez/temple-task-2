import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const DATA = [
  {
    id: 'bd7acbea',
    title: 'Food Journal',
  },
  {
    id: '3ac68afc',
    title: 'Go to Gym',
  },
  {
    id: '58694a0f',
    title: 'Do Toy Problem',
  },
];

const Item = ({title}) => (
  <BouncyCheckbox
    size={25}
    fillColor="green"
    unfillColor="#FFFFFF"
    text="Custom Checkbox"
    iconStyle={{borderColor: 'red'}}
    innerIconStyle={{borderWidth: 2}}
    // textStyle={{fontFamily: 'JosefinSans-Regular'}}
    onPress={(isChecked: boolean) => {}}
    style={{marginBottom: 10}}
  />
);

const CompletionModal = props => {
  const {setCompletionModalVisible, completionModalVisible} = props;

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setCompletionModalVisible(!completionModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Completion Modal</Text>

            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <Text style={styles.modalText}>X Coins Earned Today</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>
                setCompletionModalVisible(!completionModalVisible)
              }>
              <Text style={styles.textStyle}>Hide Modal</Text>
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
    marginTop: 22,
  },
  modalView: {
    marginHorizontal: 10,
    marginVertical: 100,
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
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default CompletionModal;
