import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import {AppBar, HStack, IconButton} from '@react-native-material/core';
import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const TestPicker = props => {
  const {
    toggleColorPicker,
    setColorPickerVisible,
    colorPickerVisible,

    selectColor,
  } = props;
  console.log('Koca: colorPickerVisible ', colorPickerVisible);

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };

  const animated = new Animated.Value(-300);
  const duration = 5000;

  useEffect(() => {
    Animated.sequence([
      // Animated.timing(animated, {
      //   toValue: -300,
      //   duration: 1000,
      //   useNativeDriver: true,
      // }),
      Animated.timing(animated, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    // <SafeAreaView style={backgroundStyle}>
    // <Animated.View
    //   style={[
    //     styles.fadingContainer,
    //     {
    //       // Bind opacity to animated value
    //       opacity: fadeAnim,
    //     },
    //   ]}>
    <AppBar
      // title="Title"
      style={{
        position: 'absolute',
        width: '100%',
        top: 100,

        transform: [{translateX: animated}],
      }}>
      {/* <HStack style={styles.mainModal}> */}
      <HStack style={styles.colorBoxContainer}>
        <TouchableOpacity
          style={[{backgroundColor: '#FF0000'}, styles.colorBox]}
          onPress={() => selectColor('#FF0000')}></TouchableOpacity>
        <TouchableOpacity
          style={[{backgroundColor: '#FF9800'}, styles.colorBox]}
          onPress={() => selectColor('#FF9800')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#F0E100'}, styles.colorBox]}
          onPress={() => selectColor('#F0E100')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#00DE00'}, styles.colorBox]}
          onPress={() => selectColor('#00DE00')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#A1BC24'}, styles.colorBox]}
          onPress={() => selectColor('#A1BC24')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#0011CF'}, styles.colorBox]}
          onPress={() => selectColor('#0011CF')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#FFFFFF'}, styles.colorBox]}
          onPress={() => selectColor('#FFFFFF')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#000000'}, styles.colorBox]}
          onPress={() => selectColor('#000000')}></TouchableOpacity>

        <TouchableOpacity
          style={[{backgroundColor: '#652A0C'}, styles.colorBox]}
          onPress={() => selectColor('#652A0C')}></TouchableOpacity>
      </HStack>
      {/* </HStack> */}
    </AppBar>
    // </Animated.View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: 1,
    position: 'relative',
    marginTop: 200,
  },
  appBarModal: {
    marginHorizontal: -20,
    position: 'absolute',
    marginBottom: 623,
    backgroundColor: '#6226ee',
    // borderRadius: 20,

    padding: 20,
    height: 30,
    alignItems: 'center',
    // justifyContent: 'Center',
    borderTopColor: 'gray',
    borderTopWidth: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainModal: {
    marginHorizontal: -20,
    marginBottom: 623,
    backgroundColor: '#6226ee',

    // borderRadius: 20,
    padding: 20,
    height: 30,
    alignItems: 'center',
    // justifyContent: 'Center',
    borderTopColor: 'gray',
    borderTopWidth: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  colorBox: {
    width: 30,
    height: 30,
    margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
  },
  colorBoxContainer: {
    justifyContent: 'center',
    marginTop: -45,
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
});
export default TestPicker;
