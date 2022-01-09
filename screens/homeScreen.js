import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Switch} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const [isEditUsername, setIsEditUsername] = useState(false);
  const [username, setUsername] = useState("username");
  const [usernameText, setUsernameText] = useState("");

  function confirmUsername(newName) {
    setIsEditUsername(false);
    setUsername(newName);
    setUsernameText("");
  }

  return (
    <View style = {styles.container}>
      
      <View style = {styles.adminContainer}>
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
          <Switch style = {styles.serverSwitch}></Switch>
        </View>

        <View style = {styles.scoutBtnContainer}>
          <Button title = "scout" onPress = {() => navigation.navigate('Match Scout')}></Button>
        </View>
        
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  adminContainer: {
    margin: 10,
    alignSelf: 'stretch',
    backgroundColor: 'darkslateblue'
  },

  usernameContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
    height: 32
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
    paddingLeft: 4
  },

  editNameButton: {
    right: 10,
    position: 'absolute',
  },

  confirmNameButton: {
    right: 10,
    position: 'absolute',
    color: 'green'
  },

  toggleServerContainer: {
    backgroundColor: '#fff',
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    height: 32,
    flexDirection: 'row',
  },

  serverSwitch: {
    right: 0,
    position: 'absolute',
  },

  scoutBtnContainer: {
    alignSelf: 'stretch',
    margin: 10,
    marginTop: 5,
  },

});

export default HomeScreen;