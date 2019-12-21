import React from "react";
import LazyLoad from "react-lazyload";

const LazyImage = ({ image }) => {
  const { url, altText } = image;
  return (
    <LazyLoad height={200} offset={100}>
      {/* only loads the images if they are 100px from view port */}
      <img src={url} alt={altText} />
    </LazyLoad>
  );
};

export default LazyImage;
