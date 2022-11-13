import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar, useTheme } from 'react-native-paper';

const NewEventScreen = ({ navigation }) => {
  const theme = useTheme();
  const styles = useStyles(theme)
  const globalStyles = require('../globalStyles');

  const [search, setSearch] = useState('');
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [prevEvent, setPrevEvent] = useState(null);

  const onChangeSearch = query => setSearch(query);

  useEffect(() => {
    const year = new Date().getFullYear();

    fetch(
      `https://www.thebluealliance.com/api/v3/events/${year}`, {
      headers: {
        'X-TBA-Auth-Key': 'wWPjDv3pnMgaH359r4b7EfK34zcKhlFagNTyBZuFV3Uj6Bpv967k4pTkHmNElfvo'
      }
    }
    ).then((response) => response.json()
    ).then((json) => sortEventList(json)
    ).catch((error) => console.log(error))
  }, []);

  function navigateToMetrics(eventInfo) {
    navigation.navigate(
      'Select Metrics',
      { eventInfo }
    );
  }

  function compareEvents(event1, event2) {
    // sort by week
    if (event1.week < event2.week) {
      return -1;
    }
    if (event1.week > event2.week) {
      return 1;
    }

    // sort alphabetically within the week
    if (event1.name < event2.name) {
      return -1;
    }
    if (event1.name > event2.name) {
      return 1;
    }

    return 0;
  }

  function sortEventList(events) {
    events.sort(compareEvents);
    setEventList(events);
    setIsLoading(false);
  }

  function DisplaySearched(props) {
    if (props.name.toLowerCase().includes(search.toLowerCase())) {
      return (
        <View style={[styles.eventTextBox, globalStyles.fullWwatidth]}>
          {
            // prevEvent.week == props.eventInfo.week ?

          }
          <TouchableOpacity style={globalStyles.fullWidth} onPress={() => navigateToMetrics(props.eventInfo)}>
            <Text style={styles.eventText}>{props.name}</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return null;
    }
  }

  function EventList() {
    return (
      <View styles={globalStyles.fullWidth}>
        {
          eventList.map((item, key) => (
            <DisplaySearched name={item.name} eventInfo={item} key={key} />
          ))
        }
      </View>
    )
  }

  return (
    <View style={globalStyles.container}>
      {
        isLoading ?
          <Text>Loading</Text>
          :
          <View style={globalStyles.container}>
            <Searchbar style={styles.search} placeholder="Search for event" onChangeText={onChangeSearch} value={search} />

            <SafeAreaView style={globalStyles.fullWidth}>
              <ScrollView style={globalStyles.fullWidth}>
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
