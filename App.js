import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';

import homeScreen from './screens/homeScreen';
import NewMetricsScreen from './screens/newMetricsScreen';
import NewEvent from './screens/newEventScreen';
import SelectMetricsScreen from './screens/selectMetricsScreen';

const HomeNav = createNativeStackNavigator();

function Navigation({ theme }) {
  return (
    <NavigationContainer theme={theme}>
      <HomeNav.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#1C1C1C', alignItems: 'center' },
          headerTitleAlign: 'center', headerTitleStyle: { color: 'white' }
        }}>
        <HomeNav.Screen name="Home" component={homeScreen} />
        <HomeNav.Screen name="New Event" component={NewEvent} />
        <HomeNav.Screen name="New Metrics" component={NewMetricsScreen} />
        <HomeNav.Screen name="Select Metrics" component={SelectMetricsScreen} />
      </HomeNav.Navigator>
    </NavigationContainer>
  );
}

// const theme = {
//   ...DarkTheme,
//   colors: {
//     ...DarkTheme.colors,
//     primary: '#28B67E',
//     accent: '#1C1C1C',
//     background: '#0D1321',
//     text: '#ECE9E9'
//   }
// };

const App = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};


export default App;
