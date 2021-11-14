import React, { useState } from "react";

import useNews from "../../hookes/useNews";

//import all the components
import Screen from "../common/Screen";
import SearchBar from "../SearchBar";
import BreakingNews from "../BreakingNews";
import FeaturesNews from "../FeaturedNews";
import PoliticalNews from "../PoliticalNews";
import TechNews from "../TechNews";
import EntertainmentNews from "../EntertainmentNews";

import ActivityIndecator from "../common/ActivityIndecator";

const Home = () => {
  const [isSearchFocused, setSearchedFocused] = useState(false);

  const [
    featuresNews,
    breakingNews,
    techNews,
    politicalNews,
    entertainmentNews,
    loading,
  ] = useNews();
  return (
    <>
      <ActivityIndecator visible={loading} />
      <Screen isSearchFocused={isSearchFocused}>
        <SearchBar setSearchedFocused={setSearchedFocused} />
        <FeaturesNews item={featuresNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
    </>
  );
};

export default Home;
