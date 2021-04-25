import React, { useState } from "react";
import SearchResult from "./SearchResult";
import "../styles/SearchResult.css";
const SearchResults = () => {
  const [data, setData] = useState([
    {
      id: 1,
      imgUrl: "img/train_.jpg",
      title: "Metro will stay shut by 4 hrs.",
      readTime: "5 mins",
      day: "Today",
    },
    {
      id: 2,
      imgUrl: "img/train_.jpg",
      title: "1 Lac vacancy for new Designers.",
      readTime: "6 mins",
      day: "Today",
    },
    {
      id: 3,
      imgUrl: "img/train_.jpg",
      title: "The R.S. Coronavirus Trajectory.",
      readTime: "5 min",
      day: "Today",
    },
  ]);
  return (
    <div className='search-results-container'>
      <p className='search-results-title'>Recent Search</p>
      {data.map((item, index) => (
        <SearchResult
          key={index}
          url={item.imgUrl}
          title={item.title}
          time={item.readTime}
          day={item.day}
        />
      ))}
    </div>
  );
};

export default SearchResults;
