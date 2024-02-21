import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UserPresetsScreen from "../screens/userPresetsScreen";
import NewPresetScreen from "../screens/newPresetScreen";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

const PresetsNav = createNativeStackNavigator();

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const PresetsNavigation: React.FC<Props> = ({ navigation }) => {
  return (
    <PresetsNav.Navigator>
      <PresetsNav.Screen name="Presets" component={UserPresetsScreen} />
      <PresetsNav.Screen name="New Preset" component={NewPresetScreen} />
    </PresetsNav.Navigator>
  );
};

export default PresetsNavigation;
