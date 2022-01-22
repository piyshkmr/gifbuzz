import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/search/${category.searchterm}`}>
      <div className="category-card">
        <img
          key={category.searchterm}
          src={category.image}
          alt={"unable to load.."}
        />
        <h3>{category.searchterm}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
