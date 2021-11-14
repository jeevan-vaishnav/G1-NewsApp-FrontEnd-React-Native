import React from "react";
import { View, StyleSheet } from "react-native";
import BlockCard from "./cards/BlockCard";

import { useNavigation } from "@react-navigation/native";

const FeaturedNews = ({ item }) => {
  const navigation = useNavigation();
  return (
    <BlockCard
      onPress={() => navigation.navigate("NewsDetails", { item })}
      style={{ marginVertical: 15 }}
      item={item}
    />
  );
};

const style = StyleSheet.create({
  container: {},
});

export default FeaturedNews;
