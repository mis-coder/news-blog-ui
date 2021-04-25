import React from "react";

const Title = ({ name }) => {
  return (
    <div className='greeting'>
      <p className='greet'>Hey, {name}!</p>
      <h1 className='title'>Discover Latest News</h1>
    </div>
  );
};

export default Title;
