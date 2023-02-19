import React, { useEffect } from "react";
import HackathonCard from "../components/HackathonCard";
import Loader from "../components/Loader";
import PageTop from "../components/PageTop";
import provider from "../config/axios";

const Hackathons = () => {
  const [hackathons, setHackathons] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    getHackathons();
  }, []);

  const getHackathons = async () => {
    try {
      const res = await provider.get("/bot/hacks/all");
      if (res) {
        setHackathons(res.data.hackathons);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
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
