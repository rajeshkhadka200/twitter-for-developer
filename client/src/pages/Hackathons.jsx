import { duration } from "@pankod/refine-mui";
import React, { useEffect, useState } from "react";
import HackathonCard from "../components/HackathonCard";
import Loader from "../components/Loader";
import PageTop from "../components/PageTop";
import provider from "../config/axios";

const Hackathons = () => {
  const [hackathons, setHackathons] = React.useState([]);
  console.log(hackathons);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = useState(10);

  useEffect(() => {
    getHackathons();
  }, [page]);

  // bot/hacks/all
  const getHackathons = async (page) => {
    try {
      setLoading(true);
      const res = await provider.get(`/bot/hacks/all?page=${page}`);
      setHackathons((prevHackathons) => prevHackathons.concat(res.data));
      setLoading(false);
    } catch (error) {}
  };

  function handleScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    if (scrollY + windowHeight >= bodyHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  }
  window.addEventListener("touchmove", handleScroll);

  return (
    <>
      <PageTop label="Hackathons" />
      {loading ? (
        <Loader height="80vh" />
      ) : hackathons?.length > 0 ? (
        hackathons.map((hackathon) => (
          <HackathonCard key={hackathon._id} hackathon={hackathon} />
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            width: "100%",
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#fff",
          }}
        >
          No Hackathons Found
        </div>
      )}
    </>
  );
};

export default Hackathons;
