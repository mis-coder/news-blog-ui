import React from "react";
import { Link } from "react-router-dom";
const SearchResult = ({ url, title, time, day }) => {
  return (
    <div className='search-results-item'>
      <img className='search-news-image' src={url} alt='' />
      <div className='news'>
        <Link to='/story' className='search-news-title'>
          <h3>{title}</h3>
        </Link>
        <p className='search-news-time'>
          {time} Read • {day}
        </p>
      </div>
    </div>
  );
};

export default SearchResult;
