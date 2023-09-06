import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native"
import { IconButton } from "react-native-paper";
import { RoboMetric } from "../../../types/roboMetric";

const metrics: RoboMetric[] = []

export type Props = {
    navigation: NavigationProp<ParamListBase>;
}

const UserMetricsScreen: React.FC<Props> = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton onPress={() => navigation.navigate('New Metric')} icon='plus' />
            )
        })
    }, [navigation])

    return (
        <SafeAreaView>
            <FlatList
                data={metrics}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </SafeAreaView>
    )
}

export default UserMetricsScreen
