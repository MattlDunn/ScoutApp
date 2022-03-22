import { useTheme } from 'react-native-paper';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { accessibilityProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';

const selectPresetScreen = (props) => {
    const theme = useTheme();
    const styles = useStyles(theme)
    const globalStyles = require('../globalStyles');

    return(
        <View style = {globalStyles.container}>
            <Text style = {styles.test}>{ props.route.params.eventInfo.name }</Text>
        </View>
    );
}

const useStyles = theme => (StyleSheet.create(({
    test: {
        flex: 1
    }
})));

export default selectPresetScreen; 