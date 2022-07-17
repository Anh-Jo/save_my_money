/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppWithProvider from './src';
import { name as appName } from './app.json';
import './src/config/dayjs';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { withAuthenticator } from 'aws-amplify-react-native';



Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
})
AppRegistry.registerComponent(appName, () => withAuthenticator(AppWithProvider));
