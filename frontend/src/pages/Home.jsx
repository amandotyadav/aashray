import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import GettingStarted from "../components/GettingStarted";
import GetStartNow from "../components/GetStartNow";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <GettingStarted />
      <GetStartNow />
    </div>
  );
};

export default Home;
