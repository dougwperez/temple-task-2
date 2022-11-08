/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Amplify, Auth, API, graphqlOperation} from 'aws-amplify';
import awsconfig from './src/aws-exports';

// import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);

AppRegistry.registerComponent(appName, () => App);
