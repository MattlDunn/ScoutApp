import React from "react"
import { RoboMetric } from "../../types/roboMetric"
import { View } from "react-native"
import { IconButton, Text } from "react-native-paper"

type Props = {
    metric: RoboMetric
}

const CounterMetric: React.FC<Props> = ({ metric }) => {
    return (
        <View style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text variant="labelLarge">
                {metric.name}
            </Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <IconButton icon="minus" />
                <Text>
                    {metric.value}
                </Text>
                <IconButton icon="plus" />
            </View>
        </View>
    )
}

export default CounterMetric

