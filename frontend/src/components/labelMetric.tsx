import React from "react";
import { RoboMetric } from "../../types/roboMetric";
import { View } from "react-native";
import { Divider, Text } from "react-native-paper";

type Props = {
  metric: RoboMetric;
};

const LabelMetric: React.FC<Props> = ({ metric }) => {
  return (
    <View>
      <Text variant="titleLarge">{metric.name}</Text>
      <Divider />
    </View>
  );
};

export default LabelMetric;
