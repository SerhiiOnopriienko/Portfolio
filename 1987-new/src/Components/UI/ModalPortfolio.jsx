import { useEffect, useCallback } from "react";
import styles from "./ModalPortfolio.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrewArrow, NextArrow } from "./Arrows";

export default function ModalPortfolio({
  showModalPortfolio,
  setShowModalPortfolio,
  pictureList,
}) {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: false,
    nextArrow: <NextArrow classToUse={styles.nextArrow} />,
    prevArrow: <PrewArrow classToUse={styles.prevArrow} />,
    className: `${styles.mainSlider}`,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const closeModal = useCallback(
    () => setShowModalPortfolio(false),
    [setShowModalPortfolio]
  );

  useEffect(() => {
    function handleClickOutside(event) {
      const noClose = document.querySelectorAll("[data-no-modal-close]");
      if (![...noClose].find((el) => el.contains(event.target))) {
        closeModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  function imageClick(event) {
    event.stopPropagation();
  }

  return showModalPortfolio ? (
    <div className={styles.modalWrapper}>
      <div className={styles.closeIcon}>
        <svg
          onClick={closeModal}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 15L1 1M15 1L1 15"
            stroke="#f2efea"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <Slider {...settings}>
        {pictureList.map((item, index) =>
          item.split(".")[item.split(".").length - 1] === "jpg" ? (
            <img
              onClick={imageClick}
              key={index}
              src={item}
              alt="slider"
              data-no-modal-close="true"
            />
          ) : (
            <video
              style={{ marginRight: "200px" }}
              onClick={imageClick}
              src={item}
              key={index}
              autoPlay
              muted={true}
              controls
              loop
              data-no-modal-close="true"
            >
              Your browser does not support the video tag.
            </video>
          )
        )}
      </Slider>
    </div>
  ) : null;
}
