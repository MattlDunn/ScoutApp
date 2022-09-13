import { useTheme } from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button, Switch} from 'react-native';
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

  const [presetList, setPresetList] = useState(["Preset 1", "Preset 2"]);

  async function onLoad() {
    try {
      _isServer = await getIsServer();
      setIsServer(_isServer);
      _username = await getUsername();
      changeUsername(_username);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    onLoad();
  }, []);

  async function getUsername() {
    try {
      const val = await AsyncStorage.getItem("username");
      if (val !== null) {
        return val;
      } else {
        return "username";
      }
    } catch {
      console.log("error fetching from username");
      return "username";
    }
  }

  async function getIsServer() {
    try {
      const val = await AsyncStorage.getItem("is_server");
      if (val !== null) {
        return JSON.parse(val);
      } else {
        return false;
      }
    } catch {
      console.log("error fetching from is_server");
      return false;
    }
  }

  async function changeUsername(newName) {
    setIsEditUsername(false);
    setUsername(newName);
    setUsernameText("");
    try {
      await AsyncStorage.setItem("username", newName);
    } catch (e) {
      console.log("error writing to key: username");
    }
  }

  async function serverToggled(value) {
    setIsServer(value);
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("is_server", jsonValue);
    } catch (e) {
      console.log("error writing to key: is_server");
    }
  }

  function ServerDisplay() {
    return (
      <View style = {globalStyles.fullWidth}>
        <View style = {styles.section}>
          <View style = {styles.newBtns}>
            <Button title = "Add New Event" onPress = {() => navigation.navigate('New Event')}></Button>
          </View>

          {
            eventList.map((item, key) => (
            <View key = {key}>
                <Text style = {[styles.basicText, globalStyles.primaryText]}>{ item }</Text>
                <Icon style = {styles.editNameButton} name = "edit" size = {24} color = "black"></Icon>
            </View>
            ))
          }
        </View>

        <View style = {styles.section}>
          <View style = {styles.newBtns}>
            <Button title = "Add New Preset" onPress = {() => navigation.navigate('New Preset')}></Button>
          </View>

          {
            presetList.map((item, key) => (
            <View key = {key}>
              <Text style = {[styles.basicText, globalStyles.primaryText]}>{ item }</Text>
              <Icon style = {styles.editNameButton} name = "edit" size = {24} color = "black"></Icon>
            </View>
            ))
          }
        </View>
      </View>
    );
  }

  function UserDisplay() {
    return (
      <View style = {globalStyles.fullWidth}>
        <Text>User Layout</Text>
      </View>
    );
  }

  return (
    <View style = {globalStyles.container}>
      
      <View style = {styles.section}>
        {
          isEditUsername ?
          <View style = {styles.usernameContainer}>
            <TextInput style = {styles.usernameField} placeholder = {username} onChangeText = {text => setUsernameText(text)}></TextInput>
            <Icon style = {styles.confirmNameButton} name = "check" size = {24} color = "black" onPress = {() => changeUsername(usernameText)}></Icon> 
          </View>
          :
          <View style = {styles.usernameContainer}>
            <Text style = {[styles.basicText, globalStyles.primaryText]}>{ username }</Text>
            <Icon style = {styles.editNameButton} name = "edit" size = {24} color = "black" onPress = {() => setIsEditUsername(true)}></Icon> 
          </View>
        }

        <View style = {styles.toggleServerContainer}>
          <Text style = {[styles.basicText, globalStyles.primaryText]}>Toggle Server</Text>
          <Switch disabled = {false} style = {styles.serverSwitch} value = {isServer} onValueChange = {(value) => serverToggled(value)}></Switch>
        </View>
      </View>

      <View style = {globalStyles.fullWidth}>
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