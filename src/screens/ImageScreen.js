import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Eagle"
        imageSource={require("../../assets/eagle.png")}
      />
      <ImageDetail
        title="Heart"
        imageSource={require("../../assets/heart.png")}
      />
      <ImageDetail
        title="Some Guy"
        imageSource={require("../../assets/someguy.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
