import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./VideoSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rayeVideo from "../../../images/RAYE_video.mp4";
import stars_Summit from "../../../images/stars_Summit.mp4";
import tikTokAwards from "../../../images/tikTokAwards.mp4";
import moviePremier from "../../../images/moviePremier.mp4";
import oneofaKindWedding from "../../../images/oneofaKindWedding.mp4";
import mainVideoMobile from "../../../images/mainVideoMobile.mp4";
import { PreviousVideoArrow } from "../../UI/VideoArrows";
import { NextVideoArrow } from "../../UI/VideoArrows";
import LazyVideo from "./LazyVideo";

export default function VideoSlider() {
  const videoList = [
    {
      name: "RAYE",
      description:
        "Performance at NeueHouse Hollywood Sunset Sounds and Amazon Music Live City Sessions.",
      item: rayeVideo,
    },
    {
      name: "STARS SUMMIT",
      description:
        "At Petersen Automotive Museum opened the Stars International Asian Film Festival",
      item: stars_Summit,
    },
    {
      name: "TIK TOK AWARDS",
      description: "Highlighted the top streaming talent",
      item: tikTokAwards,
    },
    {
      name: "THE WAY BY TATA",
      description:
        "Gorgeous Hollywood premiere of The Way movie by Tata Feodoridi",
      item: moviePremier,
    },
    {
      name: "ONE OF A KIND WEDDING",
      description: "On the New Year’s Eve",
      item: oneofaKindWedding,
    },
  ];

  const settings = {
    infinite: true,
    dots: true,
    speed: 1000,
    nextArrow: <NextVideoArrow />,
    prevArrow: <PreviousVideoArrow />,
    className: `mainSlider`,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const changeScreenWidth = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    };
    changeScreenWidth();
    window.addEventListener("resize", changeScreenWidth);
    return () => window.removeEventListener("resize", changeScreenWidth);
  }, []);

  return screenWidth >= 720 ? (
    <Slider {...settings}>
      {videoList.map((vid, index) => {
        return (
          <LazyVideo
            key={index}
            src={vid.item}
            name={vid.name}
            description={vid.description}
            index={index}
          />
        );
      })}
    </Slider>
  ) : (
    <div className="outerVideoContainer">
      <div className="videoContainer">
        <video
          className="mobileVideoTag"
          src={mainVideoMobile}
          playsInline
          loop
          autoPlay
          muted={true}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="videoInfo videoInfoMobile">
        <div className="videoName videoNameMobile">
          <p>We create events </p>
          <p>for the perfect experience</p>
        </div>
        <div className="buttonsContainer">
          <Link to={"/about"}>ABOUT</Link>
          <Link to={"/management"}>SERVICES</Link>
        </div>
        <p>Event Support and Production From The Oscars to Burning Man</p>
      </div>
    </div>
  );
}
