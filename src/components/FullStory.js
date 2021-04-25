import React from "react";
import { Link } from "react-router-dom";

const FullStory = () => {
  return (
    <div className='story'>
      <div className='story-title'>
        The R.S Coronavirus Trajectory Looks Worse Than Other any Waze
        Countries.
      </div>
      <div className='story-content'>
        More could die from lack of access to a bed, or a nurse, or a
        ventilator, than necessary.
      </div>
      <div className='story-links'>
        <Link to='/story' className='read-story'>
          Read Story
        </Link>
        <Link to='/story' className='share-story'>
          Share Now
        </Link>
      </div>
      <img src='img/rain.jpg' alt='' className='story-image' />
    </div>
  );
};

export default FullStory;
