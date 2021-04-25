import React from "react";
import { FaGripLines } from "react-icons/fa";

const UserNav = () => {
  return (
    <div className='user-nav'>
      <div className='bars-icon'>
        <FaGripLines />
      </div>
      <img src='img/profile.png' alt='' className='user-profile' />
    </div>
  );
};

export default UserNav;
