import { useTheme } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, Switch } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {

  const theme = useTheme();
  const styles = useStyles(theme)
  const globalStyles = require('../globalStyles');

  const [isLoading, setIsLoading] = useState(true);

  const [isEditUsername, setIsEditUsername] = useState(false);
  const [username, setUsername] = useState(null);
  const [usernameText, setUsernameText] = useState("");

  const [isServer, setIsServer] = useState(null);

  const [eventList, setEventList] = useState(["Waterloo", "Northbay"]);

  const [metricsList, setMetricsList] = useState(["Metrics 1", "Metrics 2"]);

  async function onLoad() {
    try {
      setIsServer(await getIsServer());
      setUsername(await getUsername());
      setMetricsList(await getMetricsList());
      setEventList(await getEventsList());
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    onLoad();
  }, []);

  async function getFromStorage(key, defaultValue) {
    try {
      const val = await AsyncStorage.getItem(key);
      return val == null ? defaultValue : JSON.parse(val);
    } catch (e) {
      console.log(`Error Fetching From ${key}`);
      console.log(e);
      return defaultValue;
    }
  }

  async function getUsername() {
    const storedUsername = await getFromStorage("username", "")
    return storedUsername;
  }

  async function getIsServer() {
    const storedIsServer = await getFromStorage("is_server", false)
    return storedIsServer;
  }

  async function getMetricsList() {
    const storedMetricsList = await getFromStorage("metrics_list", []);
    return storedMetricsList;
  }

  async function getEventsList() {
    const storedEventsList = await getFromStorage("events_list", []);
    return storedEventsList;
  }

  async function writeToStorage(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(`Error Writing to Key: ${key}`);
    }
  }

  async function changeUsername(newName) {
    setIsEditUsername(false);
    setUsername(newName);
    setUsernameText("");
    writeToStorage("username", newName)
  }

  async function serverToggled(newIsServer) {
    setIsServer(newIsServer);
    writeToStorage("is_server", newIsServer);
  }

  function ServerDisplay() {
    return (
      <View style={globalStyles.fullWidth}>
        <View style={styles.section}>
          <View style={styles.newBtns}>
            <Button title="Add New Event" onPress={() => navigation.navigate('New Event')}></Button>
          </View>

          {
            eventList.map((item, key) => (
              <View key={key}>
                <Text style={[styles.basicText, globalStyles.primaryText]}>{item}</Text>
                <Icon style={styles.editNameButton} name="edit" size={24} color="black"></Icon>
              </View>
            ))
          }
        </View>

        <View style={styles.section}>
          <View style={styles.newBtns}>
            <Button title="Add New Metrics" onPress={() => navigation.navigate('New Metrics')}></Button>
          </View>

          {
            metricsList.map((item, key) => (
              <View key={key}>
                <Text style={[styles.basicText, globalStyles.primaryText]}>{item}</Text>
                <Icon style={styles.editNameButton} name="edit" size={24} color="black"></Icon>
              </View>
            ))
          }
        </View>
      </View>
    );
  }

  function UserDisplay() {
    return (
      <View style={globalStyles.fullWidth}>
        <Text>User Layout</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>

      <View style={styles.section}>
        {
          isEditUsername ?
            <View style={styles.usernameContainer}>
              <TextInput style={styles.usernameField} placeholder={username} onChangeText={text => setUsernameText(text)}></TextInput>
              <Icon style={styles.confirmNameButton} name="check" size={24} color="black" onPress={() => changeUsername(usernameText)}></Icon>
            </View>
            :
            <View style={styles.usernameContainer}>
              <Text style={[styles.basicText, globalStyles.primaryText]}>{username}</Text>
              <Icon style={styles.editNameButton} name="edit" size={24} color="black" onPress={() => setIsEditUsername(true)}></Icon>
            </View>
        }

        <View style={styles.toggleServerContainer}>
          <Text style={[styles.basicText, globalStyles.primaryText]}>Toggle Server</Text>
          <Switch disabled={false} style={styles.serverSwitch} value={isServer} onValueChange={(value) => serverToggled(value)}></Switch>
        </View>
      </View>

      <View style={globalStyles.fullWidth}>
        {
          isServer ?
            <ServerDisplay></ServerDisplay>
            :
            <UserDisplay></UserDisplay>
        }
      </View>

    </View>
  );
};

const useStyles = theme => (StyleSheet.create(({
  section: {
    margin: 10,
    marginBottom: 0,
    alignSelf: 'stretch',
    backgroundColor: theme.colors.primary,
  },

  usernameContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
    marginBottom: 5,
    height: 32,
  },

  basicText: {
    alignSelf: 'stretch',
    paddingLeft: 4,
    marginRight: 10,
  },

  usernameField: {
    fontSize: 24,
    alignSelf: 'stretch',
    height: 32,
    textAlignVertical: 'center',
    padding: 1,
    paddingLeft: 4,
  },

  editNameButton: {
    right: 10,
    position: 'absolute',
    color: theme.colors.text,
  },

  confirmNameButton: {
    right: 10,
    position: 'absolute',
    color: 'green',
  },

  toggleServerContainer: {
    margin: 10,
    marginTop: 5,
    height: 32,
    flexDirection: 'row',
  },

  serverSwitch: {
    right: 0,
    position: 'absolute',
  },

  newBtns: {
    alignSelf: 'stretch',
    margin: 10,
  }

})));

export default HomeScreen;