import React from "react";
import { RoboMetric } from "../../types/roboMetric";
import { View } from "react-native";
import { Divider, Text, TextInput } from "react-native-paper";

type Props = {
  metric: RoboMetric;
};

const TextMetric: React.FC<Props> = ({ metric }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 20,
      }}
    >
      <Text variant="labelLarge">{metric.name}</Text>
      <TextInput
        style={{
          flexGrow: 1,
        }}
        value={metric.value.toString()}
      />
    </View>
  );
};

export default TextMetric;
