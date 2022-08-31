import React, {useState} from 'react';
import {View} from 'react-native';
import {AppBar, IconButton, HStack} from '@react-native-material/core';
// import Icon from '@expo/vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import {Popover, Button, Box, Center, NativeBaseProvider} from 'native-base';

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
          {/* <NativeBaseProvider>
            <Popover
              trigger={triggerProps => {
                return (
                  <Button {...triggerProps} colorScheme="danger">
                    Delete Customer
                  </Button>
                );
              }}>
              <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                <Popover.Arrow />
                <Popover.CloseButton />
                <Popover.Header>Delete Customer</Popover.Header>
                <Popover.Body>
                  This will remove all data relating to Alex. This action cannot
                  be reversed. Deleted data can not be recovered.
                </Popover.Body>
                <Popover.Footer justifyContent="flex-end">
                  <Button.Group space={2}>
                    <Button colorScheme="coolGray" variant="ghost">
                      Cancel
                    </Button>
                    <Button colorScheme="danger">Delete</Button>
                  </Button.Group>
                </Popover.Footer>
              </Popover.Content>
            </Popover>
          </NativeBaseProvider> */}
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
