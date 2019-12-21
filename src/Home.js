import React from "react";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

const Home = ({ parks }) => {
  return (
    <>
      {parks.map(park => {
        return (
          <div key={park.parkCode}>
            <LazyImage image={park.images[0]} />
            <Link to={`/park/${park.name}`}>{park.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Home;
