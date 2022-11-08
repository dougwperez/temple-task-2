/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Amplify, Auth, API, graphqlOperation} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import CronJob from 'react-native-cron-job';
// import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsconfig);

// const CronJobTask = async () => {
//   // Do your task here.
//   console.log('TESTING CRON JOB');
//   // Be sure to call completeTask at the end.
//   CronJob.completeTask();
// };

// CronJob.startCronJob(22, 40);
// AppRegistry.registerHeadlessTask('CRONJOB', () => CronJobTask);

AppRegistry.registerComponent(appName, () => App);
