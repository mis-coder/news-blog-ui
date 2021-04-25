import React from "react";
import Navbar from "../Navbar";
import Title from "../Title";
import Search from "../Search";
import NewsCategories from "../NewsCategories";
import SearchResults from "../SearchResults";

const Home = () => {
  return (
    <>
      <Navbar />
      <Title name='James' />
      <Search />
      <NewsCategories />
      <SearchResults />
    </>
  );
};

export default Home;
