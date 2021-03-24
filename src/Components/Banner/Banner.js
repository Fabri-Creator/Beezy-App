import { useState, useEffect } from "react";

import { getEvents } from "../../Services";

import "./Banner.scss";

const Banner = () => {
  const [bannerInfo, setBannerInfo] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);

  useEffect(() => {
    setBannerImg(Math.floor(Math.random() * 5));
    getEvents().then((events) => {
      setBannerInfo(events);
    });
  }, []);

  return (
    <div className="main-banner">
      <div className="title-banner">
        <h2 className="title-dos">MARVEL Beezy EDITION</h2>
        <h4 className="title-cuatro">
          This is a technical exercise for Beezy to showcase front-end
          development skills
        </h4>
      </div>
      <div className="gradient-container"></div>
      {bannerInfo && (
        <div className="img-banner">
          <img
            alt={bannerInfo[bannerImg].thumbnail.path}
            src={`${bannerInfo[bannerImg].thumbnail.path}.${bannerInfo[bannerImg].thumbnail.extension}`}
          ></img>
        </div>
      )}
    </div>
  );
};

export default Banner;
