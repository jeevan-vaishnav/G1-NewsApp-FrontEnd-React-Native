import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SmallCard from "../cards/SmallCard";
import Title from "../common/Title";
import { useNavigation } from "@react-navigation/native";

const HorizontalList = ({ title, data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Title size={20}>{title}</Title>
      <View style={styles.liststyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => {
            item.id;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <SmallCard
              onPress={() => {
                navigation.push("NewsDetails", { item });
              }}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  liststyle: {
    marginVertical: 15,
  },
});

export default HorizontalList;
