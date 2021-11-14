import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";

import newsAPI from "../../api/newsAPI";
import HorizontalList from "../lists/HorizontalList";
import Close from "../common/Close";
import { useNavigation } from "@react-navigation/native";

import ActivityIndecator from "../common/ActivityIndecator";

const { width, height } = Dimensions.get("window"); //important dynimic size

const NewsDetails = ({ route }) => {
  const [news, setNews] = useState({});
  const [reletedNews, setReltedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id: postId, category: postCategory } = route.params.item;

  const fetchPost = async (id) => {
    setLoading(true);
    const result = await newsAPI.getSingle(id);
    setNews(result);
  };

  const fetchRealtedPost = async (category) => {
    setLoading(true);
    const result = await newsAPI.getByCategory(postCategory, 6);
    setReltedNews(result.filter((item) => item.id !== postId));
    setLoading(false);
  };

  useEffect(() => {
    fetchPost(postId);
    fetchRealtedPost(postCategory);
  }, []);

  const { title, content, thumbnail } = news;

  const navigation = useNavigation();

  return (
    <>
      <ActivityIndecator visible={loading} />
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: thumbnail }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.relatedPostcontainer}>
          <HorizontalList data={reletedNews} title="Related Posts" />
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
  relatedPostcontainer: {
    padding: 10,
  },
});

export default NewsDetails;
