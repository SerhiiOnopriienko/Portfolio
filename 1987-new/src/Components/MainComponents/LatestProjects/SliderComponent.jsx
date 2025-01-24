import { useRef } from "react";
import Slider from "react-slick";
import styles from "./LatestProjects.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrewArrow } from "../../UI/Arrows";
import { NextArrow } from "../../UI/Arrows";

import betMobile from "../../../images/MainSlider/betMobile.jpg";
import betDesktop from "../../../images/MainSlider/betDesktop.jpg";
import betWide from "../../../images/MainSlider/betWide.jpg";
import squidGameMobile from "../../../images/MainSlider/squidGameMobile.jpg";
import squidGameDesktop from "../../../images/MainSlider/squidGameDesktop.jpg";
import squidGameWide from "../../../images/MainSlider/squidGameWide.jpg";
import burningManMobile from "../../../images/MainSlider/BurningManMobile.jpg";
import burningManDesktop from "../../../images/MainSlider/BurningManDesktop.jpg";
import burningManWide from "../../../images/MainSlider/BurningManWide.jpg";
import sonyMobile from "../../../images/MainSlider/sonyMobile.jpg";
import sonyDesktop from "../../../images/MainSlider/sonyDesktop.jpg";
import sonyWide from "../../../images/MainSlider/sonyWide.jpg";

export default function SliderComponent() {
  const { current } = useRef(window.innerWidth);
  let sliderImages = [];
  if (current < 1280) {
    sliderImages = [
      [betMobile, "BET AWARDS", 2022],
      [squidGameMobile, "NETFLIX SQUID GAME", 2021],
      [burningManMobile, "BURNING MAN", 2019],
      [sonyMobile, "SONY GRAMMY PARTY", 2020],
    ];
  } else if (current < 1920) {
    sliderImages = [
      [betDesktop, "BET AWARDS", 2022],
      [squidGameDesktop, "NETFLIX SQUID GAME", 2021],
      [burningManDesktop, "BURNING MAN", 2019],
      [sonyDesktop, "SONY MUSIC GRAMMY PARTY", 2020],
    ];
  } else {
    sliderImages = [
      [betWide, "BET AWARDS", 2022],
      [squidGameWide, "NETFLIX SQUID GAME", 2021],
      [burningManWide, "BURNING MAN", 2019],
      [sonyWide, "SONY MUSIC GRAMMY PARTY", 2020],
    ];
  }

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow classToUse={styles.nextArrow} />,
    prevArrow: <PrewArrow classToUse={styles.prevArrow} />,
    className: `${styles.mainSlider}`,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {sliderImages.map((item, index) => (
        <div key={`div${index}`} className={styles.slideLatest}>
          <img key={`img${index}`} src={item[0]} alt="slider" />
          <p key={`p${index}`}>
            {item[1]}
            <span key={`span${index}`}>{item[2]}</span>
          </p>
        </div>
      ))}
    </Slider>
  );
}
