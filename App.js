import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import homeScreen from './screens/homeScreen';
import ScoutNav from './routes/scoutStack'
import matchScout from './screens/matchScout'

const App = () => {
  return (
    <NavigationContainer>
      <ScoutNav.Navigator initialRouteName = "Home">
        <ScoutNav.Screen name = "Home" component = {homeScreen} />
        <ScoutNav.Screen name = "Match Scout" component = {matchScout} />
      </ScoutNav.Navigator> 
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default App;