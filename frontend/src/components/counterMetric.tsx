import React, { useState } from "react";
import { RoboMetric } from "../../types/roboMetric";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";

type Props = {
  metric: RoboMetric;
};

const CounterMetric: React.FC<Props> = ({ metric }) => {
  const [compMetric, setCompMetric] = useState<RoboMetric>(metric);

  const increment = () => {
    let updated = new RoboMetric(
      compMetric.name,
      compMetric.type,
      (compMetric.value as number) + 1,
      compMetric.id
    );
    setCompMetric(updated);
  };

  const decrement = () => {
    let updated = new RoboMetric(
      compMetric.name,
      compMetric.type,
      (compMetric.value as number) - 1,
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton icon="minus" onPress={decrement} />
        <Text>{compMetric.value}</Text>
        <IconButton icon="plus" onPress={increment} />
      </View>
    </View>
  );
};

export default CounterMetric;
