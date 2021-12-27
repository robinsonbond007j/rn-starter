import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
  viewOneStyle: {
    borderWidth: 1,
    borderColor: "red",
  },
  viewTwoStyle: {
    borderWidth: 1,
    borderColor: "red",
    alignSelf: "center",
  },
  viewThreeStyle: {
    borderWidth: 1,
    borderColor: "red",
  },
});

export default BoxScreen;
