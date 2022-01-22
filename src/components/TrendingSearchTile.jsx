import React from "react";
import { Link } from "react-router-dom";

const TrendingSearchTile = ({ searchterm }) => {
  const slug = searchterm.replaceAll(" ", "+");
  return (
    <span className="trending-tile">
      <Link to={`/search/${slug}`}>#{searchterm}</Link>
    </span>
  );
};

export default TrendingSearchTile;
