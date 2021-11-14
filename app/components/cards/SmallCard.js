import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import BlockCard from "./BlockCard";
import ViewMore from "./ViewMore";
import newsAPI from "../../api/newsAPI";

import { useNavigation } from "@react-navigation/native";
import NewsList from "../lists/NewsList";

const { width } = Dimensions.get("window");

const SmallCard = ({ item, onPress }) => {
  const navigation = useNavigation();
  const handViewMore = async (category) => {
    const result = await newsAPI.getByCategory(category);
    navigation.navigate("NewsList", result);
  };

  if (item.type === "viewMore") {
    return (
      <ViewMore
        style={styles.viewMore}
        onPress={() => handViewMore(item.category)}
      />
    );
  }

  return (
    <BlockCard
      onPress={onPress}
      style={styles.container}
      imageStyle={styles.image}
      item={item}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 150,
  },
  viewMore: {
    width: width / 2,
    height: 200,
  },
});
export default SmallCard;
