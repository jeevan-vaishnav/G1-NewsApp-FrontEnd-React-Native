import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import SearchModel from "./common/SearchModel";

import newsAPI from "../api/newsAPI";

let timeOutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const SearchBar = ({ setSearchedFocused }) => {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [notFound, setnotFound] = useState("");

  const handleChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    setQuery(text);
    setVisible(true);
    debounce_Search(query);
  };

  const handleSearch = async (value) => {
    const res = await newsAPI.searchPost(value);
    if (res.success) {
      setnotFound("");
      setData(res.news);
    }

    if (!res.success) {
      setnotFound(res.message);
    }
  };

  const debounce_Search = debounce(handleSearch, 500);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={query}
          style={styles.searchInput}
          placeholder="Searche here..."
          onChange={handleChange}
          onFocus={() => {
            setSearchedFocused(true);
          }}
          onBlur={() => {
            setSearchedFocused(false);
            setQuery("");
            setVisible(false);
            setData([]);
            setnotFound("");
          }}
        ></TextInput>
      </View>
      <SearchModel visible={visible} data={data} notFound={notFound} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 5,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default SearchBar;
