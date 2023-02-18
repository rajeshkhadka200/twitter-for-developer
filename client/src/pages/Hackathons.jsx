import React from "react";
import HackathonCard from "../components/HackathonCard";
import Loader from "../components/Loader";
import PageTop from "../components/PageTop";

const Hackathons = () => {
  return (
    <>
      <PageTop label="Hackathons" />
      {/* <HackathonCard /> */}
      <Loader height="80vh"/>
    </>
  );
};

export default Hackathons;
