import React from 'react';
import 'react-native-gesture-handler';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import BottomNavigator from './src/navigation/bottomNavigator';

const App = () => {
  return (
    <PaperProvider theme={DarkTheme}>
      <BottomNavigator />
    </PaperProvider>
  );
};

export default App;
