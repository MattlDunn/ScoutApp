import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { RoboPreset } from "../../types/roboPreset";

const presets: RoboPreset[] = [];

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const UserPresetsScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={() => navigation.navigate("New Preset")}
          icon="plus"
        />
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <FlatList
        data={presets}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default UserPresetsScreen;
