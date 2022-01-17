import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const NewEventScreen = () => {
  return (
    <View style = {styles.container}>
        <Button title = "oof"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default NewEventScreen;