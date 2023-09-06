import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Pressable } from 'react-native';
import { FlatList } from 'react-native';
import { List, Searchbar } from 'react-native-paper';
import { RoboEvent } from '../../../types/roboEvent'

export type Props = {
  navigation: NavigationProp<ParamListBase>;
}

const NewEventScreen: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState<string>('');
  const [allEvents, setAllEvents] = useState<RoboEvent[]>([]);
  const [displayedEvents, setDisplayedEvents] = useState<RoboEvent[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [prevEvent, setPrevEvent] = useState(null);

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

  function navigateToMetrics(eventInfo: RoboEvent) {
    navigation.navigate(
      'Select Metrics',
      { eventInfo }
    );
  }

  function compareEvents(event1: RoboEvent, event2: RoboEvent) {
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

  function sortEventList(events: RoboEvent[]) {
    events.sort(compareEvents);
    setAllEvents(events);
    setDisplayedEvents(events);
    setIsLoading(false);
  }

  const searchEvent = (text: string) => {
    setSearch(text)
    if (text.length > 0) {
      setDisplayedEvents(allEvents.filter((event) => {
        return event.name.toLowerCase().includes(search.toLowerCase().trim())
      }))
    } else {
      setDisplayedEvents(allEvents)
    }
  }

  return (
    <View>
      <Searchbar
        placeholder='Search...'
        onChangeText={searchEvent}
        value={search}
      />
      <SafeAreaView>
        <FlatList
          data={displayedEvents}
          renderItem={
            ({ item }) =>
              <Pressable onPress={() => {
                navigateToMetrics(item)
              }}>
                <List.Item title={item.name} />
              </Pressable>
          }
          contentContainerStyle={{
            paddingBottom: 120
          }}
        />
      </SafeAreaView>

    </View>
  );
};


export default NewEventScreen;
