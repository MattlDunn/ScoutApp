import { useTheme } from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

const SelectPresetScreen = (props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const globalStyles = require("../../globalStyles");

  async function onLoad() {}

  return (
    <View style={globalStyles.container}>
      <Text style={styles.test}>{props.route.params.eventInfo.name}</Text>
    </View>
  );
};

const useStyles = (theme) =>
  StyleSheet.create({
    test: {
      flex: 1,
    },
  });

export default SelectPresetScreen;
