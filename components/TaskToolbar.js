import React from 'react';
import {Text, View} from 'react-native';
import {Button, AppBar, HStack, IconButton} from '@react-native-material/core';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
import IconFont from 'react-native-vector-icons/FontAwesome';

const TaskToolbar = () => {
  return (
    <AppBar
      title="Coins: 2"
      leading={props => (
        <IconFont5 name="coins" {...props} stye={{color: 'Secondary'}} />
      )}
      variant="bottom"
      style={{
        position: 'absolute',
        start: 0,
        end: 0,
        bottom: 0,
        height: 75,
        paddingHorizontal: 13,
        paddingTop: 10,
      }}
      trailing={props => (
        <HStack spacing={8}>
          <Button
            // variant="outlined"
            title="Goals"
            color="white"
            tintColor="#EEBC1D"
            backgroundColor="white"
            leading={props => <IconFont name="trophy" {...props} />}
          />
          <Button
            // variant="outlined"
            title="Done!"
            color="white"
            tintColor="green"
            backgroundColor="white"
            leading={props => <IconIon name="checkmark-circle" {...props} />}
          />
          {/* <IconButton
            icon={props => <IconFoundation name="paint-bucket" {...props} />}
            {...props}
          />
          <IconButton
            icon={props => <IconMaterial name="toy-brick" {...props} />}
            {...props}
          />
          <IconButton
            icon={props => <IconMaterial name="delete" {...props} />}
            {...props}
          /> */}
        </HStack>
      )}
    />
  );
};
export default TaskToolbar;
