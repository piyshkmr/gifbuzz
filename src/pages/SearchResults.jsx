import React from "react";
import GifsList from "../components/GifsList";
import TrendingSearchList from "../components/TrendingSearchList";
import { useParams } from "react-router-dom";

const Category = () => {
  let { tag } = useParams();

  return (
    <div className="container">
      <TrendingSearchList />
      <GifsList
        url={`https://g.tenor.com/v1/search?tag=${tag}&key=LIVDSRZULELA&limit=20&media_filter=tinygif`}
      />
    </div>
  );
};

export default Category;
