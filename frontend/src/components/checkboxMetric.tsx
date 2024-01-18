import React from "react";
import { RoboMetric } from "../../types/roboMetric";
import { View } from "react-native";
import { Checkbox, IconButton, Text } from "react-native-paper";

type Props = {
  metric: RoboMetric;
};

const CheckboxMetric: React.FC<Props> = ({ metric }) => {
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
      <Checkbox
        status={metric.value ? "checked" : "unchecked"}
        onPress={() => {
          metric.value = !metric.value;
        }}
      />
    </View>
  );
};

export default CheckboxMetric;
