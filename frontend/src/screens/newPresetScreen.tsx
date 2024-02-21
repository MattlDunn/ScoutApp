import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Dialog, Divider, Portal, TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MetricTypes, RoboMetric } from "../../types/roboMetric";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import LabelMetric from "../components/labelMetric";
import TextMetric from "../components/textMetric";
import CounterMetric from "../components/counterMetric";
import CheckboxMetric from "../components/checkboxMetric";

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const MetricTypeIcons = {
  [MetricTypes.Label]: "pricetag-outline",
  [MetricTypes.Text]: "text-outline",
  [MetricTypes.Counter]: "swap-vertical-outline",
  [MetricTypes.Checkbox]: "checkbox-outline",
};

const NewPresetScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={saveMetrics}>Done</Button>,
    });
  }, [navigation]);

  const [metricItems, setMetricItems] = useState<RoboMetric[]>([]);
  const [newMetricName, setNewMetricName] = useState<string>("");
  const [newMetricType, setNewMetricType] = useState<MetricTypes>(
    MetricTypes.Label
  );
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const saveMetrics = () => {
    
  };

  const metricType = (metricType: string) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: "center",
        }}
        onPress={() => {
          setNewMetricType(MetricTypes[metricType as keyof typeof MetricTypes]);
          setShowDialog(true);
        }}
      >
        <Ionicons
          name={MetricTypeIcons[metricType as keyof typeof MetricTypes]}
          size={24}
        />
        <Text>{metricType}</Text>
      </TouchableOpacity>
    );
  };

  const metricItem = ({
    item,
    drag,
    isActive,
  }: RenderItemParams<RoboMetric>) => {
    const Metric = () => {
      switch (item.type) {
        case MetricTypes.Label:
          return <LabelMetric metric={item} />;
        case MetricTypes.Text:
          return <TextMetric metric={item} />;
        case MetricTypes.Counter:
          return <CounterMetric metric={item} />;
        case MetricTypes.Checkbox:
          return <CheckboxMetric metric={item} />;
      }
    };

    return (
      <TouchableOpacity
        onLongPress={drag}
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Metric />
      </TouchableOpacity>
    );
  };

  const dialogCancelPressed = () => {
    setNewMetricName("");
    setShowDialog(false);
  };

  const dialogCreatePressed = () => {
    setNewMetricName("");
    setMetricItems((old) => [
      ...old,
      new RoboMetric(newMetricName, newMetricType),
    ]);
    setShowDialog(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <FlatList
          data={Object.keys(MetricTypes)}
          renderItem={({ item }) => metricType(item)}
          horizontal={true}
          scrollEnabled={false}
          contentContainerStyle={{
            justifyContent: "space-around",
            flexGrow: 1,
          }}
        />
      </SafeAreaView>
      <Divider bold={true} />
      <SafeAreaView style={{ flexGrow: 1 }}>
        <DraggableFlatList
          data={metricItems}
          renderItem={metricItem}
          keyExtractor={(item) => item.id}
          onDragEnd={({ data }) => setMetricItems(data)}
          contentContainerStyle={{
            rowGap: 10,
          }}
          containerStyle={{
            flex: 1,
          }}
        />
      </SafeAreaView>
      <Portal>
        <Dialog
          visible={showDialog}
          onDismiss={() => {
            setShowDialog(false);
          }}
        >
          <Dialog.Title>Name your new metric.</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Metric Name"
              value={newMetricName}
              onChangeText={(text) => setNewMetricName(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => dialogCancelPressed()}>Cancel</Button>
            <Button onPress={() => dialogCreatePressed()}>Create</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default NewPresetScreen;
