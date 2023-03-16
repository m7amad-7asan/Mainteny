/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  import('./ReactotronConfig').then(() => {
    Object.defineProperty(console, 'tron', {
      get: () => Reactotron,
      configurable: false,
      enumerable: false,
    });
  });
}

AppRegistry.registerComponent(appName, () => App);
