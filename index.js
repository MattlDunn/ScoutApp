/**
 * @format
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#28B67E',
    accent: '#1C1C1C',
    background : '#0D1321',
    text: '#ECE9E9'
  }
};

export default function Main() {
    return (
      <PaperProvider theme = { theme }>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
