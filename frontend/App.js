import React from 'react';
import 'react-native-gesture-handler';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import BottomNavigator from './src/navigation/bottomNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <PaperProvider theme={DarkTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomNavigator />
      </GestureHandlerRootView>
    </PaperProvider>
  );
};

export default App;
