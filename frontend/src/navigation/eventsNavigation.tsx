import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UserEventsScreen from "../screens/userEventsScreen";
import NewEventScreen from "../screens/newEventScreen";

const EventNav = createNativeStackNavigator();

const EventsNavigation: React.FC = () => {
  return (
    <EventNav.Navigator>
      <EventNav.Screen name="Events" component={UserEventsScreen} />
      <EventNav.Screen name="New Event" component={NewEventScreen} />
    </EventNav.Navigator>
  );
};

export default EventsNavigation;
