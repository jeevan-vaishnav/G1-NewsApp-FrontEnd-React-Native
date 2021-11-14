import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import VerticalList from "./lists/VerticalList";
import SmallCard from "./cards/SmallCard";

const PoliticalNews = ({ data }) => {
  return (
    <>
      <VerticalList title="Political News" data={data} />
    </>
  );
};

export default PoliticalNews;
