import React from "react";
const NewsCategory = ({ category, icon }) => {
  const iconComponent = () => {
    const IconComponent = icon;
    return <IconComponent />;
  };

  return (
    <div className='news-category-item'>
      <div className='news-category-icon'>{iconComponent()}</div>
      <p className='news-category-name'>{category}</p>
    </div>
  );
};

export default NewsCategory;
