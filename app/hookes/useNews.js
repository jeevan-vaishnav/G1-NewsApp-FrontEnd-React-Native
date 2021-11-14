import { useState, useEffect } from "react";

import newsAPI from "../api/newsAPI";

export default useNews = () => {
  const [featuresNews, setFeaturesNews] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);

  const qty = 5;

  const [loading, setLoading] = useState(false);

  const filterFeatured = (data) => {
    return [...data].filter((item) => item.featured === "on").reverse()[0];
  };

  const filterByCategory = (data, category) => {
    const result = data
      .filter((item) => item.category === category)
      .reverse()
      .splice(0, qty);

    if (result.length) {
      result.push({ type: "viewMore", category: category, id: category });
    }

    console.log(result);
    return result;
  };

  const filterMultiple = async () => {
    setLoading(true);
    const allNews = await newsAPI.getALL();

    //set the features new s
    setFeaturesNews(filterFeatured(allNews));
    //set the setBreakingNews
    setBreakingNews(filterByCategory(allNews, "breaking-news"));
    setTechNews(filterByCategory(allNews, "tech"));
    setPoliticalNews(filterByCategory(allNews, "political"));
    setEntertainmentNews(filterByCategory(allNews, "entertainment"));

    setLoading(false);
  };

  useEffect(() => {
    filterMultiple();
  }, []);

  return [
    featuresNews,
    breakingNews,
    techNews,
    politicalNews,
    entertainmentNews,
    loading,
  ];
};
