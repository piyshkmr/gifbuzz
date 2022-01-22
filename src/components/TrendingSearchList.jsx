import axios from "axios";
import React, { useEffect, useState } from "react";
import TrendingSearchTile from "./TrendingSearchTile";

const TrendingSearchList = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    getTrendingSearch();
  }, []);

  const getTrendingSearch = async () => {
    try {
      const { data } = await axios.get(
        "https://g.tenor.com/v1/trending_terms?key=LIVDSRZULELA&local=hi"
      );

      setTags(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="trending-tile-list">
      {tags.map((tag) => {
        return <TrendingSearchTile searchterm={tag} key={tag} />;
      })}
    </div>
  );
};

export default TrendingSearchList;
