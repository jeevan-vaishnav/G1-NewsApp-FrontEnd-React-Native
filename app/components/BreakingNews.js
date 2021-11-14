import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import HorizontalList from "./lists/HorizontalList";
import SmallCard from "./cards/SmallCard";

const BreakingNews = ({ data }) => {
  return (
    <>
      <HorizontalList title="Breaking News" data={data} />
    </>
  );
};

export default BreakingNews;
