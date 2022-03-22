import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar, useTheme } from 'react-native-paper';

const NewEventScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyles(theme)
  const globalStyles = require('../globalStyles');

  const [search, setSearch] = useState('');
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeSearch = query => setSearch(query);

  useEffect(() => {
    const year = new Date().getFullYear();

    fetch(
      `https://www.thebluealliance.com/api/v3/events/${year}/simple`, {
        headers: {
          'X-TBA-Auth-Key': 'wWPjDv3pnMgaH359r4b7EfK34zcKhlFagNTyBZuFV3Uj6Bpv967k4pTkHmNElfvo'
        }
      }
    ).then((response) => response.json()
    ).then((json) => setEventList(json)
    ).catch((error) => console.log(error)
    ).finally(() => setIsLoading(false));
  }, []);

  function navigateToPreset(eventInfo) {
    navigation.navigate(
      'Select Preset',
      { eventInfo }
    );
  }

  function DisplaySearched(props) {
    if (props.name.toLowerCase().includes(search)) {
      return (
        <TouchableOpacity style = {styles.eventTextBox} onPress = {() => navigateToPreset(props.eventInfo) }>
          <Text style = {styles.eventText}>{ props.name }</Text>
        </TouchableOpacity>
      )
    } else {
      return null;
    }
  }

  function EventList() {
    return (
      <View styles = {globalStyles.fullWidth}>
        {
          eventList.map((item, key) => (
            <DisplaySearched name = {item.name} eventInfo = {item} key = {key}/>
          ))
        } 
      </View>
    ) 
  }
    
  return (
    <View style = {globalStyles.container}>
      {
        isLoading ?
        <Text>Loading</Text>
        :
        <View style = {globalStyles.container}>
          <Searchbar style = {styles.search} placeholder = "Search for event"  onChangeText = { onChangeSearch } value = { search }/>

          <SafeAreaView style = {globalStyles.container}>
            <ScrollView style = {globalStyles.fullWidth}>
                <EventList />
            </ScrollView>
          </SafeAreaView>
        </View>
      }
    </View>
  );
};

const useStyles = theme => (StyleSheet.create(({
  search: {
    borderRadius: 0,
  },

  eventTextBox: {
    flex: 1,
    borderWidth: 1,
    alignContent: 'center',
    height: 40,
    textAlignVertical: 'center'
  },

  eventText: {
    flex: 1,
    textAlignVertical: 'center',
    marginLeft: 10
  },

})));

export default NewEventScreen;