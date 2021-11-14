import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import FlatCard from "../cards/FlatCard";
import Title from "../common/Title";
import VerticalCard from "../cards/VerticalCard";
import { useNavigation } from "@react-navigation/native";

const VerticalList = ({ title, data }) => {
  const navigation = useNavigation();
  return (
    <>
      <View>
        {title && <Title>{title}</Title>}
        <View style={styles.container}>
          {data.map((item) => (
            <VerticalCard
              item={item}
              key={item.id}
              onPress={() => navigation.navigate("NewsDetails", { item })}
            />
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default VerticalList;
