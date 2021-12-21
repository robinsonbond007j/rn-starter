import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Eagle"
        imageSource={require("../../assets/eagle.png")}
        score="7"
      />
      <ImageDetail
        title="Heart"
        imageSource={require("../../assets/heart.png")}
        score="9"
      />
      <ImageDetail
        title="Some Guy"
        imageSource={require("../../assets/someguy.png")}
        score="3"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
