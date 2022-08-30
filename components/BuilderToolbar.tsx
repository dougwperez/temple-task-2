import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, AppBar, IconButton, HStack} from '@react-native-material/core';
// import Icon from '@expo/vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Provider,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from '@react-native-material/core';

const BuilderToolbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <AppBar
      title="TempleTask"
      leading={props => (
        <IconButton
          icon={props => <Icon name="menu" {...props} />}
          {...props}
          style={{marginRight: -12}}
        />
      )}
      trailing={props => (
        <HStack>
          <IconButton
            icon={props => <IconIon name="hammer" {...props} />}
            {...props}
          />
          <IconButton
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
          />
        </HStack>
      )}
    />
  );
};
export default BuilderToolbar;
