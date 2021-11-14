import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import VerticalList from "./lists/VerticalList";
import SmallCard from "./cards/SmallCard";

const EntertainmentNews = ({ data }) => {
  return (
    <>
      <VerticalList title="Entertainment News" data={data} />
    </>
  );
};

export default EntertainmentNews;
