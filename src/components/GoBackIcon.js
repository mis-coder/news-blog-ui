import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const GoBackIcon = () => {
  return (
    <div className='go-back'>
      <Link to='/' className='go-back-link'>
        <BsArrowLeft />
      </Link>
    </div>
  );
};

export default GoBackIcon;
