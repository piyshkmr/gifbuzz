import axios from "axios";
import React, { useEffect, useState } from "react";
import TrendingSearchList from "../components/TrendingSearchList";
import CategoryCard from "../components/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        "https://g.tenor.com/v1/categories?key=LIVDSRZULELA"
      );
      setCategories(data.tags);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container">
      <TrendingSearchList />
      <div className="categories-list">
        {categories.map((category, index) => {
          return <CategoryCard key={index} category={category} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
