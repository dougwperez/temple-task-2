// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import {HStack} from '@react-native-material/core';
// import Modal from 'react-native-modal';
// import {ListItem} from '@react-native-material/core';

// const BrickPicker = props => {
//   const {
//     toggleBrickPicker,
//     setBrickPickerVisible,
//     brickPickerVisible,
//     selectBrick,
//     isVisible,
//   } = props;
//   return (
//     <View style={styles.modalContainer}>
//       <Modal
//         isVisible={isVisible}
//         hasBackdrop={true}
//         // animationType="fade"
//         animationIn={'slideInLeft'}
//         animationOut={'slideOutLeft'}
//         useNativeDriver={true}
//         customBackdrop={
//           <TouchableWithoutFeedback onPress={toggleBrickPicker}>
//             <View style={{flex: 1}} />
//           </TouchableWithoutFeedback>
//         }>
//         <View>
//           <HStack style={styles.mainModal}>
//             <HStack style={styles.colorBoxContainer}>
//               <TouchableOpacity
//                 style={styles.brickPicks}
//                 onPress={() => selectBrick(0)}>
//                 <Image
//                   style={styles.brickImg}
//                   source={require('../Images/1x1.png')}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.brickPicks}
//                 onPress={() => selectBrick(1)}>
//                 <Image
//                   style={styles.brickImg}
//                   source={require('../Images/1x2.png')}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.brickPicks}
//                 onPress={() => selectBrick(3)}>
//                 <Image
//                   style={styles.brickImg}
//                   source={require('../Images/1x3.png')}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.brickPicks}
//                 onPress={() => selectBrick(5)}>
//                 <Image
//                   style={styles.brickImg}
//                   source={require('../Images/1x4.png')}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.brickPicks}
//                 onPress={() => selectBrick(2)}>
//                 <Image
//                   style={styles.brickImg}
//                   source={require('../Images/2x2.png')}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.brickPicks}
//                 onPress={() => selectBrick(4)}>
//                 <Image
//                   style={styles.brickImg}
//                   source={require('../Images/2x3.png')}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.brickPicks}
//                 onPress={() => selectBrick(6)}>
//                 <Image
//                   style={styles.brickImg}
//                   source={require('../Images/2x4.png')}
//                 />
//               </TouchableOpacity>
//             </HStack>
//           </HStack>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     // height: 1,
//   },
//   mainModal: {
//     marginHorizontal: -20,
//     marginBottom: 623,
//     backgroundColor: '#6226ee',
//     // borderRadius: 20,
//     padding: 20,
//     height: 30,
//     alignItems: 'center',
//     // justifyContent: 'Center',
//     borderTopColor: 'gray',
//     borderTopWidth: 1,

//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   colorBox: {
//     width: 20,
//     height: 20,
//     margin: 2,
//     // marginBottm: 100,
//     backgroundColor: 'red',
//   },
//   colorBoxContainer: {
//     justifyContent: 'center',
//   },
//   brickPicks: {
//     width: 42,
//     height: 35,
//     margin: 3,
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
//   brickImg: {
//     width: 42,
//     height: 35,
//     marginTop: -1,
//     // margin: 3,
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
// });
// export default BrickPicker;

import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Image,
} from 'react-native';
import {AppBar, HStack, IconButton} from '@react-native-material/core';
import Modal from 'react-native-modal';
import {ListItem} from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {Hidden} from 'native-base';

const ColorPicker = props => {
  const {
    toggleBrickPicker,
    setBrickPickerVisible,
    selectBrick,
    brickPickerVisible,
    animation,
    slideIn,
    slideOut,
  } = props;

  useEffect(() => {
    slideIn();
  }, [brickPickerVisible]);

  return (
    <AppBar
      style={{
        position: 'absolute',
        width: '100%',
        top: 91,

        transform: [{translateX: animation}],
      }}>
      <HStack style={styles.colorBoxContainer}>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(0)}>
          <Image
            style={styles.brickImg}
            source={require('../Images/1x1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.brickPicks}
          onPress={() => selectBrick(1)}>
          <Image
            style={styles.brickImg}
            source={require('../Images/1x2.png')}
          />
        </TouchableOpacity>

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
    </AppBar>
  );
};

const styles = StyleSheet.create({
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
  brickPicks: {
    width: 42,
    height: 35,
    margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
  },
  brickImg: {
    width: 42,
    height: 35,
    marginTop: -1,
    // margin: 3,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
export default ColorPicker;
