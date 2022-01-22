import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from "react-masonry-css";
import Loader from "./Loader";
import Card from "./Card";

const GifsList = ({ url }) => {
  const [gifs, setGifs] = useState([]);
  const [next, setNext] = useState("");

  const getGifs = async () => {
    try {
      // getting data from api
      const { data } = await axios.get(url);
      setGifs(data.results);
      setNext(data.next);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchMoreGifs = async () => {
    try {
      const { data } = await axios.get(url + `&pos=${next}`);
      setNext(data.next);
      setGifs([...gifs, ...data.results]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getGifs();
  }, [url]);
  return (
    <div>
      {gifs.length > 0 ? (
        <InfiniteScroll
          dataLength={gifs.length}
          next={fetchMoreGifs}
          hasMore={next !== 0}
          endMessage={<h3>No more gifs</h3>}
          loader={<Loader />}
        >
          {/* maonary grid layout  */}
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 700: 2 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {/* gifs list  */}
            {gifs.map((gif) => {
              return <Card key={gif.id} gif={gif} />;
            })}
          </Masonry>
        </InfiniteScroll>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GifsList;
