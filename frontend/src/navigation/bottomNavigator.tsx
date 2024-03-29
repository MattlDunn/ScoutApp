import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SettingsScreen from "../screens/settingsScreen";
import EventsNavigation from "./eventsNavigation";
import React from "react";
import PresetsNavigation from "./presetsNavigation";

const Tab = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Events"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            if (route.name === "Events Stack") {
              iconName = "calendar-outline";
            } else if (route.name == "Presets Stack") {
              iconName = "analytics-outline";
            } else {
              iconName = "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Events Stack"
          component={EventsNavigation}
          options={{
            title: "Events",
          }}
        />
        <Tab.Screen
          name="Presets Stack"
          component={PresetsNavigation}
          options={{
            title: "Presets",
          }}
        />
        <Tab.Screen
          name="Settings Stack"
          component={SettingsScreen}
          options={{
            title: "Settings",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;
