import React from "react";
import { Text, StyleSheet, View } from "react-native";

const GettingStartedMessage = "Getting started with React Native.";
const NameMessage = "My name is...";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyleTitleOne}>{GettingStartedMessage}</Text>
      <Text style={styles.textStyleTitleTwo}>{NameMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleTitleOne: {
    fontSize: 45,
  },
  textStyleTitleTwo: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
