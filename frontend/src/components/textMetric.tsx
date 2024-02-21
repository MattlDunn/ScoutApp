import React, { useState } from "react";
import { RoboMetric } from "../../types/roboMetric";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

type Props = {
  metric: RoboMetric;
};

const TextMetric: React.FC<Props> = ({ metric }) => {
  const [compMetric, setCompMetric] = useState<RoboMetric>(metric);

  const updateText = (text: string) => {
    let updated = new RoboMetric(
      compMetric.name,
      compMetric.type,
      text,
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
        columnGap: 20,
      }}
    >
      <Text variant="labelLarge">{metric.name}</Text>
      <TextInput
        style={{
          flexGrow: 1,
        }}
        value={compMetric.value.toString()}
        onChangeText={(text) => updateText(text)}
      />
    </View>
  );
};

export default TextMetric;
