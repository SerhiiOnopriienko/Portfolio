import styles from "../../Pages/Portfolio.module.css";
import { portfolioPictures } from "./portfolioLists";

export default function PortfolioThumbnail({
  image,
  openModalWithPictures,
  uniqid,
  filterAllCategories,
  filterCorporate,
  filterPremieres,
  filterLive,
  filterSpecialEvents,
  filterProduction,
}) {
  const hashtagClicked = () => {
    if (image.hashtag === "corporate events") {
      filterCorporate();
    } else if (image.hashtag === "premiers") {
      filterPremieres();
    } else if (image.hashtag === "live show") {
      filterLive();
    } else if (image.hashtag === "special events") {
      filterSpecialEvents();
    } else if (image.hashtag === "video production") {
      filterProduction();
    } else {
      filterAllCategories();
    }
  };
  return (
    <div className={styles.projectThumbnail}>
      <div
        onClick={() =>
          openModalWithPictures(portfolioPictures[image.id].subPictures)
        }
      >
        <img key={uniqid()} src={image.image} alt="portfolio" />
        <p className={styles.eventName}>{image.eventName}</p>
      </div>
      <p className={styles.eventHashtag} onClick={hashtagClicked}>
        <span># </span>
        {image.hashtag}
      </p>
    </div>
  );
}
