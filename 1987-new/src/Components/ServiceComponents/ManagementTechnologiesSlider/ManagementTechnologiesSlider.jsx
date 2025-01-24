import styles from "./ManagementTechnologiesSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrewArrow } from "../../UI/Arrows";
import { NextArrow } from "../../UI/Arrows";

export default function ManagementTechnologiesSlider({
  img1,
  img2,
  img3,
  img4,
  img5,
}) {
  let settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow classToUse={styles.nextClients} />,
    prevArrow: <PrewArrow classToUse={styles.prevClients} />,
    className: styles.clientsSlider,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.outerSliderContainer}>
      <Slider {...settings}>
        <div className={styles.sliderContainer}>
          <img src={img1} alt="img1" />
        </div>
        <div className={styles.sliderContainer}>
          <img src={img2} alt="img2" />
        </div>
        <div className={styles.sliderContainer}>
          <img src={img3} alt="img3" />
        </div>
        <div className={styles.sliderContainer}>
          <img src={img4} alt="img4" />
        </div>
        <div className={styles.sliderContainer}>
          <img src={img5} alt="img5" />
        </div>
      </Slider>
    </div>
  );
}
