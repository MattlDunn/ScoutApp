import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './screens/homeScreen';
import NewPresetScreen from './screens/newPresetScreen';
import NewEvent from './screens/newEventScreen';

const HomeNav = createNativeStackNavigator();

function Navigation({ theme }) {
  return (
    <NavigationContainer theme = { theme }>
      <HomeNav.Navigator initialRouteName = "Home" 
        screenOptions = {{ headerStyle: { backgroundColor: '#1C1C1C', alignItems: 'center' }, 
        headerTitleAlign: 'center', headerTitleStyle: { color: 'white' } }}>
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


export default App;