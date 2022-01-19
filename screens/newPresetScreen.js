import React, { useState } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NewPresetScreen = ({ navigation }) => {
  
  function DisplayMetric(props) {
    if (props.item.type == "header") {
      return (
        <Text style = { styles.basicText }>{ props.item.name }</Text>
      );
    } else {
      return (
        <Text style = { styles.basicText }>OOPS</Text>
      );
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Text>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const defMetrics = [
    {
      type: "header",
      name: "auto"
    },
    {
      type: "header",
      name: "tele"
    }
  ];

  const [metrics, setMetrics] = useState(defMetrics);

  return (
    <View style = {styles.container}>
        
      {
        metrics.map((item, key) => (
        <DisplayMetric style = {styles.metricSection} key = { key } item = { item } />
        ))
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  metricSection: {
    backgroundColor: 'darkslateblue',
    alignSelf: "stretch",
  },

  basicText: {
    fontSize: 24,
    alignSelf: 'stretch',
    paddingLeft: 4,
    marginRight: 10,
    color: 'black',
  },

  saveBtn: {
    color: '#0000000',
  },

});

export default NewPresetScreen;