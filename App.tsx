/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TaskToolbar from './components/BottomBar/TaskToolbar';
import BuilderToolbar from './components/TopBar/BuilderToolbar';
import Playground from './components/Playground';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [gridStatus, setGridStatus] = useState(true);
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedBrick, setSelectedBrick] = useState(3);

  const toggleGrid = () => {
    setGridStatus(!gridStatus);
  };

  const selectColor = (color: string) => {
    setSelectedColor(color);
  };

  const selectBrick = (brickNum: number) => {
    setSelectedBrick(brickNum);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={backgroundStyle}>
        <BuilderToolbar
          toggleGrid={toggleGrid}
          selectColor={selectColor}
          selectedColor={selectedColor}
          selectBrick={selectBrick}
          selectedBrick={selectedBrick}
        />
        <Playground
          gridStatus={gridStatus}
          selectedColor={selectedColor}
          selectedBrick={selectedBrick}
        />

        <TaskToolbar />
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
});

export default App;
