import React from "react";
import GifsList from "../components/GifsList";
import TrendingSearchList from "../components/TrendingSearchList";

const Home = () => {
  return (
    <div className="container">
      <TrendingSearchList />
      <GifsList
        url={
          "https://g.tenor.com/v1/trending?key=LIVDSRZULELA&limit=20&media_filter=tinygif"
        }
      />
    </div>
  );
};

export default Home;
