/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true; //禁用黄色的警告
AppRegistry.registerComponent(appName, () => App);
