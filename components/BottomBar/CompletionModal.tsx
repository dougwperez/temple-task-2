import React, {useState, useEffect} from 'react';
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
import {DataStore} from 'aws-amplify';
import {Todo} from '../.././src/models';
import {TaskCounter} from '../.././src/models';

const CompletionModal = props => {
  const {setCompletionModalVisible, completionModalVisible} = props;
  const [todos, setTodos] = useState([]);
  const [dailyScore, setDailyScore] = React.useState(0);

  const [totalScore, setTotalScore] = React.useState(0);

  // useEffect(() => {
  //   DataStore.save(new TaskCounter({1}));
  // }, []);

  async function updateCount() {
    setCompletionModalVisible(!completionModalVisible);

    const models = await DataStore.query(TaskCounter);
    console.log('MODELS IN COMPLETION MODAL: models ', models);

    await DataStore.save(
      TaskCounter.copyOf(models[0], item => {
        item.count += dailyScore;
      }),
      //SAVE LINE BELOW TO INIT NEW DB
      // new TaskCounter({
      //   count: 10,
      // }),
    );
  }

  useEffect(() => {
    // setTotalScore(10);
    const subscription = DataStore.observeQuery(Todo).subscribe(snapshot => {
      const {items, isSynced} = snapshot;
      console.log('Koca: items ', items);

      setTodos(items);
    });

    //unsubscribe to data updates when component is destroyed so that we don’t introduce a memory leak.
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  const renderItem = ({item}) => (
    <BouncyCheckbox
      size={25}
      fillColor="green"
      unfillColor="#FFFFFF"
      text={item.name}
      iconStyle={{borderColor: 'red'}}
      innerIconStyle={{borderWidth: 2}}
      onPress={(isChecked: boolean) => {
        isChecked
          ? setDailyScore(dailyScore + 1)
          : setDailyScore(dailyScore - 1);
      }}
      style={{marginBottom: 10}}
    />
  );

  return (
    <View>
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
            <Text style={styles.modalTitle}>Daily Check In</Text>

            <FlatList
              data={todos}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <Text
              style={{
                color: dailyScore === 0 ? '#6F7378' : '#EEBC1D',
                ...styles.trackerText,
              }}>
              {dailyScore} Coins Earned Today
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => updateCount()}>
              <Text style={styles.textStyle}>Finished!</Text>
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
    // marginHorizontal: 10,
    marginVertical: 100,
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
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 15,
  },
  trackerText: {
    marginBottom: 17,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 15,
    // color: dailyScore === 0 ? 'red' : 'green',
  },
});
export default CompletionModal;
