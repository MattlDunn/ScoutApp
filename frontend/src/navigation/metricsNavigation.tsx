import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UserMetricsScreen from "../screens/userMetricsScreen";
import NewMetricScreen from "../screens/newMetricScreen";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

const MetricsNav = createNativeStackNavigator();

type Props = {
    navigation: NavigationProp<ParamListBase>;
}

const MetricsNavigation: React.FC<Props> = ({ navigation }) => {
    return (
        <MetricsNav.Navigator>
            <MetricsNav.Screen name="Metrics" component={UserMetricsScreen} />
            <MetricsNav.Screen name="New Metric" component={NewMetricScreen} />
        </MetricsNav.Navigator>
    )
}

export default MetricsNavigation
