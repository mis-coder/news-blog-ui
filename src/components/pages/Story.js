import React from "react";
import ChannelInfo from "../ChannelInfo";
import FullStory from "../FullStory";
import UserNav from "../UserNav";
import GoBackIcon from "../GoBackIcon";
import "../../styles/Story.css";
const Story = () => {
  return (
    <>
      <UserNav />
      <GoBackIcon />
      <ChannelInfo />
      <FullStory />
    </>
  );
};

export default Story;
