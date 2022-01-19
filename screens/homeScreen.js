import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Switch} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const [isEditUsername, setIsEditUsername] = useState(false);
  const [username, setUsername] = useState("username");
  const [usernameText, setUsernameText] = useState("");

  const [isServer, setIsServer] = useState(false);

  const [eventList, setEventList] = useState(["Waterloo", "Northbay"]);

  const [presetList, setPresetList] = useState(["Preset 1", "Preset 2"]);

  function confirmUsername(newName) {
    setIsEditUsername(false);
    setUsername(newName);
    setUsernameText("");
  }

  return (
    <View style = {styles.container}>
      
      <View style = {styles.section}>
        {
          isEditUsername ?
          <View style = {styles.usernameContainer}>
            <TextInput style = {styles.usernameField} placeholder = {username} onChangeText = {text => setUsernameText(text)}></TextInput>
            <Icon style = {styles.confirmNameButton} name = "check" size = {24} color = "black" onPress = {() => confirmUsername(usernameText)}></Icon> 
          </View>
          :
          <View style = {styles.usernameContainer}>
            <Text style = {styles.basicText}>{ username }</Text>
            <Icon style = {styles.editNameButton} name = "edit" size = {24} color = "black" onPress = {() => setIsEditUsername(true)}></Icon> 
          </View>
        }

        <View style = {styles.toggleServerContainer}>
          <Text style = {styles.basicText}>Toggle Server</Text>
          <Switch style = {styles.serverSwitch} value = {isServer} onValueChange = {() => setIsServer(!isServer)}></Switch>
        </View>
        
      </View>

      <View style = {styles.section}>
        
        <View style = {styles.newBtns}>
          <Button title = "Add New Event" onPress = {() => navigation.navigate('New Event')}></Button>
        </View>

        {
          eventList.map((item, key) => (
          <View key = {key}>
              <Text style = {styles.basicText}>{ item }</Text>
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
            <Text style = {styles.basicText}>{ item }</Text>
            <Icon style = {styles.editNameButton} name = "edit" size = {24} color = "black"></Icon>
          </View>
          ))
        }

      </View>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  section: {
    margin: 10,
    marginBottom: 0,
    alignSelf: 'stretch',
    backgroundColor: 'darkslateblue',
  },

  usernameContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    height: 32,
  },

  basicText: {
    fontSize: 24,
    alignSelf: 'stretch',
    paddingLeft: 4,
    marginRight: 10,
    color: 'black',
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
  },

  confirmNameButton: {
    right: 10,
    position: 'absolute',
    color: 'green',
  },

  toggleServerContainer: {
    backgroundColor: '#fff',
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

});

export default HomeScreen;