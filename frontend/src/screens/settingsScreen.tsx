import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";


export type Props = {
    navigation: NavigationProp<ParamListBase>;
}

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View></View>
    )
}


export default SettingsScreen
