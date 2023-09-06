import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native"
import { IconButton } from "react-native-paper";
import { RoboEvent } from "../../../types/roboEvent";

const events: RoboEvent[] = []

export type Props = {
    navigation: NavigationProp<ParamListBase>;
}

const UserEventsScreen: React.FC<Props> = ({ navigation }) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton onPress={() => navigation.navigate('New Event')} icon='plus' />
            )
        })
    }, [navigation])

    return (
        <SafeAreaView>
            <FlatList
                data={events}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </SafeAreaView>
    )
}

export default UserEventsScreen
