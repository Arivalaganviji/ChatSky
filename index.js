/**
 * @format
 */

import {AppRegistry, Text, TextInput} from 'react-native';
import App from './src/navigation/AppNavigation';
import {name as appName} from './app.json';
import { LogBox } from 'react-native';
import { COLORS } from './src/utilities/colors';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();
Text.defaultProps = {color: COLORS.black}
TextInput.defaultProps = {color: COLORS.black}
Text.defaultProps = {color: COLORS.black, maxFontSizeMultiplier: 1.5, allowFontScaling: false};
AppRegistry.registerComponent(appName, () => App);
