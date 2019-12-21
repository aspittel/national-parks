import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const Home = ({ parks }) => {
  return (
    <>
      {parks.map(park => {
        return (
          <div key={park.parkCode}>
            {/* only loads the images if they are 100px from view prot, plus blurs images in */}
            <LazyLoad height={200} offset={100}>
              <img src={park.images[0].url} alt={park.images[0].altText} />
            </LazyLoad>
            <Link to={`/park/${park.name}`}>{park.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default Home;
