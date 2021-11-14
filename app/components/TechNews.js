import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import HorizontalList from "./lists/HorizontalList";
import SmallCard from "./cards/SmallCard";

const TechNews = ({ data }) => {
  return <HorizontalList title="Tech News" data={data} />;
};

export default TechNews;
