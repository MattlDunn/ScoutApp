import React, { useState } from "react";
import { RoboMetric } from "../../types/roboMetric";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = {
  metric: RoboMetric;
};

const CheckboxMetric: React.FC<Props> = ({ metric }) => {
  const [compMetric, setCompMetric] = useState<RoboMetric>(metric);

  const toggle = () => {
    let updated = new RoboMetric(
      compMetric.name,
      compMetric.type,
      !(compMetric.value as boolean),
      compMetric.id
    );
    setCompMetric(updated);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text variant="labelLarge">{metric.name}</Text>
      <TouchableOpacity onPress={toggle}>
        <Ionicons
          name={compMetric.value ? "checkbox-outline" : "square-outline"}
          size={24}
        ></Ionicons>
      </TouchableOpacity>
    </View>
  );
};

export default CheckboxMetric;
