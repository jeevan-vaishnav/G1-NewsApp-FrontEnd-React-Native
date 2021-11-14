import React from "react";
import { View, StyleSheet } from "react-native";
import FlatCard from "./FlatCard";
import ViewMore from "./ViewMore";
import newsAPI from "../../api/newsAPI";
import { useNavigation } from "@react-navigation/native";

const VerticalCard = ({ item, onPress }) => {
  const navigation = useNavigation();
  const handViewMore = async (category) => {
    const result = await newsAPI.getByCategory(category);
    navigation.navigate("NewsList", result);
  };

  if (item.type === "viewMore") {
    return <ViewMore onPress={() => handViewMore(item.category)} />;
  }

  return <FlatCard item={item} onPress={onPress} />;
};

export default VerticalCard;
