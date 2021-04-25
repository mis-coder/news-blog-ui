import React, { useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import {
  GiHandcuffed,
  GiAmericanFootballHelmet,
  GiPopcorn,
} from "react-icons/gi";
import NewsCategory from "./NewsCategory";
import "../styles/NewsCategory.css";
const NewsCategories = () => {
  const [categories, setCategories] = useState([
    {
      name: "Politics",
      icon: FaMicrophoneAlt,
    },
    {
      name: "Movies",
      icon: GiPopcorn,
    },
    {
      name: "Sports",
      icon: GiAmericanFootballHelmet,
    },
    {
      name: "Crime",
      icon: GiHandcuffed,
    },
  ]);
  return (
    <div className='news-categories'>
      {categories.map((item, index) => (
        <NewsCategory key={index} category={item.name} icon={item.icon} />
      ))}
    </div>
  );
};

export default NewsCategories;
