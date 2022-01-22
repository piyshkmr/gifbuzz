import axios from "axios";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggetions] = useState([]);
  let cancelToken;

  const handleSearch = async (e) => {
    const { value } = e.target;
    setQuery(value);

    //Check if there are any previous pending requests
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }
    cancelToken = axios.CancelToken.source();

    const { data } = await axios.get(
      `https://g.tenor.com/v1/autocomplete?key=LIVDSRZULELA&limit=10&q=${value}`,
      { cancelToken: cancelToken.token }
    );

    setSuggetions(data.results);
  };

  return (
    <div className="container">
      <div id="searchbar">
        <input
          value={query}
          onChange={handleSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${query.replaceAll(" ", "+")}`}>
          <FaSearch color="#444444" size={20} cursor={"pointer"} />
        </Link>
      </div>
      <div className="search-suggestions">
        {suggestions.map((text) => {
          return (
            <Link key={text} to={`/search/${text.replaceAll(" ", "+")}`}>
              <p>{text}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
