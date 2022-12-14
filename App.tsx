/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {AppBar} from '@react-native-material/core';

import {Amplify, Auth, API} from 'aws-amplify';
import {withAuthenticator, Authenticator} from 'aws-amplify-react-native';
import * as queries from './src/graphql/queries';

// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

import TaskToolbar from './components/BottomBar/TaskToolbar';
import BuilderToolbar from './components/TopBar/BuilderToolbar';
import Playground from './components/Playground';

const App: () => Node = ({signOut, user}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [buildStatus, setBuildStatus] = useState(true);
  const [paintStatus, setPaintStatus] = useState(false);
  const [gridStatus, setGridStatus] = useState(true);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [rotateStatus, setRotateStatus] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#ffbe0b');
  const [selectedBrick, setSelectedBrick] = useState(0);
  const [coinCount, setCoinCount] = useState(Number);
  const [counterId, setCounterId] = useState('');

  console.log('Koca: coinCount ', coinCount);
  console.log('Koca: counterIdApp ', counterId);

  const toggleBuild = () => {
    setBuildStatus(!buildStatus);
  };

  const togglePaint = () => {
    setPaintStatus(!paintStatus);
  };

  const toggleGrid = () => {
    setGridStatus(!gridStatus);
  };

  const toggleDelete = () => {
    setDeleteStatus(!deleteStatus);
  };

  const toggleRotate = () => {
    setRotateStatus(!rotateStatus);
  };

  const selectColor = (color: string) => {
    setSelectedColor(color);
  };

  const selectBrick = (brickNum: number) => {
    setSelectedBrick(brickNum);
  };

  async function getTaskCounterApp() {
    try {
      let filterByUserID = {
        userId: {
          eq: Auth.user.attributes.sub, // filter priority = 1
        },
      };

      const allTaskCounters = await API.graphql({
        query: queries.listTaskCounters,
        variables: {filter: filterByUserID},
      });
      console.log('Koca: allTaskCounters ', allTaskCounters);

      const counterCount =
        allTaskCounters.data?.listTaskCounters.items[0]?.count;
      const counterIdValue =
        allTaskCounters.data?.listTaskCounters.items[0]?.id;
      console.log('Koca: counterIdValue ', counterIdValue);
      setCounterId(counterIdValue);
      setCoinCount(counterCount);

      // const notDeletedTodos = todoList.filter(todo => todo._deleted === null);

      // await setAllTodos(notDeletedTodos);
    } catch (err) {
      console.log('error checking data:', err);
    }
  }

  useEffect(() => {
    getTaskCounterApp();
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={backgroundStyle}>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            zIndex: 3,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <BuilderToolbar
          toggleBuild={toggleBuild}
          togglePaint={togglePaint}
          toggleGrid={toggleGrid}
          toggleDelete={toggleDelete}
          toggleRotate={toggleRotate}
          setDeleteStatus={setDeleteStatus}
          setRotateStatus={setRotateStatus}
          selectColor={selectColor}
          selectedColor={selectedColor}
          selectBrick={selectBrick}
          selectedBrick={selectedBrick}
        />

        <Playground
          counterId={counterId}
          buildStatus={buildStatus}
          paintStatus={paintStatus}
          gridStatus={gridStatus}
          deleteStatus={deleteStatus}
          rotateStatus={rotateStatus}
          selectedColor={selectedColor}
          selectedBrick={selectedBrick}
          getTaskCounterApp={getTaskCounterApp}
          coinCount={coinCount}
        />
        {/* <>
          <TouchableOpacity onPress={signOut}>Sign out</TouchableOpacity>
        </> */}
        <TaskToolbar
          coinCount={coinCount}
          getTaskCounterApp={getTaskCounterApp}
          counterId={counterId}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  statusBarStyle: {},
});

export default withAuthenticator(App);
