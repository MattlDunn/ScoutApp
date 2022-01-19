import React, { useState } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { Searchbar } from 'react-native-paper';

const NewEventScreen = () => {
  const [search, setSearch] = useState('');

  const onChangeSearch = query => setSearch(query);

  const events = async () => {
    const year = new Date().getFullYear();
    
    try {
      const response = await fetch(
        'https://www.thebluealliance.com/api/v3/events/${year}/simple', {
          headers: {
            Authentication: 'wWPjDv3pnMgaH359r4b7EfK34zcKhlFagNTyBZuFV3Uj6Bpv967k4pTkHmNElfvo'
          }
        }
      );
      
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }
    
  return (
    <View style = {styles.container}>
      <Searchbar placeholder = "Search for event" onChangeText = { onChangeSearch } value = { search }/>

      <View>

      {
        events.map((item, key) => (
        <View key = {key}>
            <Text style = {styles.basicText}>{ item.name }</Text>
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

});

export default NewEventScreen;