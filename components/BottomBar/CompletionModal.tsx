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
import {DataStore, Auth, API, graphqlOperation} from 'aws-amplify';
import {Todo} from '../.././src/models';
import {TaskCounter} from '../.././src/models';
import * as queries from '../.././src/graphql/queries';
import * as mutations from '../.././src/graphql/mutations';
import * as subscriptions from '../.././src/graphql/subscriptions';

const CompletionModal = props => {
  const {
    setCompletionModalVisible,
    completionModalVisible,
    allTodos,
    coinCount,
    counterId,
    getTaskCounterApp,
  } = props;
  const [dailyScore, setDailyScore] = React.useState(0);

  async function updateCount() {
    setCompletionModalVisible(!completionModalVisible);

    try {
      const taskCounterDetails = {
        id: counterId,
        count: coinCount + dailyScore,
      };
      await API.graphql({
        query: mutations.updateTaskCounter,
        variables: {input: taskCounterDetails},
      });
      await getTaskCounterApp();
    } catch (e) {
      console.log('error on update', e);
    }

    // CREATE NEW COUNT INSTANCE
    // try {
    //   const taskVar = {
    //     count: 7,
    //     userId: Auth.user.attributes.sub,
    //   };
    //   await API.graphql(
    //     graphqlOperation(mutations.createTaskCounter, {input: taskVar}),
    //   );
    // } catch (e) {
    //   console.log('error on creation', e);
    // }
  }

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
              data={allTodos}
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
  },
});
export default CompletionModal;
