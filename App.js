import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './screens/homeScreen';
import NewPresetScreen from './screens/newPresetScreen';
import NewEvent from './screens/newEventScreen';

const HomeNav = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <HomeNav.Navigator initialRouteName = "Home" screenOptions = {{ headerStyle: { backgroundColor: 'green', alignItems: 'center' }, headerTitleAlign: 'center' }}>
        <HomeNav.Screen name = "Home" component = {homeScreen} />
        <HomeNav.Screen name = "New Event" component = {NewEvent} />
        <HomeNav.Screen name = "New Preset" component = {NewPresetScreen} />
      </HomeNav.Navigator> 
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <Navigation />
  );
};

const styles = StyleSheet.create({
  
});

export default App;