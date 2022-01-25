import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Button, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

const NewEventScreen = () => {
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

  function TeamList() {
    return (
      <View>
        {
          eventList.map((item, key) => (
            <View key = {key}>
              <Text>{ item.name }</Text>
            </View>
          ))
        } 
      </View>
    ) 
  }
    
  return (
    <View style = {styles.container}>
      {
        isLoading ?
        <Text>Loading</Text>
        :
        <View style = {styles.container}>
          <Searchbar placeholder = "Search for event" onChangeText = { onChangeSearch } value = { search }/>

          <SafeAreaView style = {styles.container}>
            <ScrollView>
                <TeamList />
            </ScrollView>
          </SafeAreaView>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

});

export default NewEventScreen;