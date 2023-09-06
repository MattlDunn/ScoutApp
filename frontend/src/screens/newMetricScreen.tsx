import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-paper"
import Ionicons from "react-native-vector-icons/Ionicons";
import { RoboMetric } from "../../../types/roboMetric";

export type Props = {
    navigation: NavigationProp<ParamListBase>;
}

const MetricTypes: RoboMetric[] = [
    { name: "Label", icon: "pricetag-outline" },
    { name: "Text", icon: "text-outline" },
    { name: "Counter", icon: "swap-vertical-outline" },
    { name: "Checkbox", icon: "checkbox-outline" },
]

const NewMetricScreen: React.FC<Props> = ({ navigation }) => {
    const metricItem = (item: RoboMetric) => {
        return (
            <View style={{
                alignItems: 'center'
            }}>
                <Ionicons name={item.icon} size={24} />
                <Text>{item.name}</Text>
            </View>
        )
    }

    return (
        <View>
            <SafeAreaView>
                <FlatList
                    data={MetricTypes}
                    renderItem={({ item }) => metricItem(item)}
                    horizontal={true}
                    scrollEnabled={false}
                    contentContainerStyle={{ justifyContent: "space-around", flexGrow: 1 }}
                />
            </SafeAreaView>
            <Divider bold={true} />
        </View>
    )
}

export default NewMetricScreen
