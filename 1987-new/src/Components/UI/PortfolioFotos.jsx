import { useRef } from "react";
import uniqid from "uniqid";
import styles from "../../Pages/Portfolio.module.css";
import PortfolioThumbnail from "./PortfolioThumbnail";
import HowCanWeHelp from "./HowCanWeHelp";
import { commentsPictures } from "./portfolioLists";

export default function PortfolioFotos({
  portfolio,
  openModalWithPictures,
  setOpen,
  filterAllCategories,
  filterCorporate,
  filterPremieres,
  filterLive,
  filterSpecialEvents,
  filterProduction,
}) {
  const { current } = useRef(window.innerWidth);
  let commentIndex = 0;
  return (
    <div className={styles.projects}>
      {portfolio.map((image, i) => {
        if (i === 4 && current < 768) {
          commentIndex = (commentIndex + 1) % commentsPictures.length;
          return (
            <>
              <div className={styles.projectComment}>
                <img
                  key={uniqid()}
                  src={commentsPictures[commentIndex].image}
                  alt="comment"
                />
                <p className={styles.commentText}>
                  {commentsPictures[commentIndex].commentText}
                </p>
              </div>
              <HowCanWeHelp key={0} setOpen={setOpen} />
              <PortfolioThumbnail
                image={image}
                openModalWithPictures={openModalWithPictures}
                uniqid={uniqid}
                filterAllCategories={filterAllCategories}
                filterPremieres={filterPremieres}
                filterLive={filterLive}
                filterSpecialEvents={filterSpecialEvents}
                filterProduction={filterProduction}
                filterCorporate={filterCorporate}
              />
            </>
          );
        }
        if (i !== 0 && !(i % 4) && current < 768) {
          commentIndex = (commentIndex + 1) % commentsPictures.length;
          return (
            <>
              <div className={styles.projectComment}>
                <img
                  key={uniqid()}
                  src={commentsPictures[commentIndex].image}
                  alt="comment"
                />
                <p className={styles.commentText}>
                  {commentsPictures[commentIndex].commentText}
                </p>
              </div>
              <PortfolioThumbnail
                image={image}
                openModalWithPictures={openModalWithPictures}
                uniqid={uniqid}
                filterAllCategories={filterAllCategories}
                filterPremieres={filterPremieres}
                filterLive={filterLive}
                filterSpecialEvents={filterSpecialEvents}
                filterProduction={filterProduction}
                filterCorporate={filterCorporate}
              />
            </>
          );
        }
        if (i !== 0 && !(i % 5) && current >= 768) {
          commentIndex = (commentIndex + 1) % commentsPictures.length;
          return (
            <>
              <div className={styles.projectComment}>
                <img
                  key={uniqid()}
                  src={commentsPictures[commentIndex].image}
                  alt="comment"
                />
                <p className={styles.commentText}>
                  {commentsPictures[commentIndex].commentText}
                </p>
              </div>
              {i === 5 && current < 1280 ? (
                <HowCanWeHelp key={0} setOpen={setOpen} />
              ) : null}
              <PortfolioThumbnail
                image={image}
                openModalWithPictures={openModalWithPictures}
                uniqid={uniqid}
                filterAllCategories={filterAllCategories}
                filterPremieres={filterPremieres}
                filterLive={filterLive}
                filterSpecialEvents={filterSpecialEvents}
                filterProduction={filterProduction}
                filterCorporate={filterCorporate}
              />
            </>
          );
        }
        return (
          <PortfolioThumbnail
            image={image}
            openModalWithPictures={openModalWithPictures}
            uniqid={uniqid}
            filterAllCategories={filterAllCategories}
            filterPremieres={filterPremieres}
            filterLive={filterLive}
            filterSpecialEvents={filterSpecialEvents}
            filterProduction={filterProduction}
            filterCorporate={filterCorporate}
          />
        );
      })}
      {portfolio.length && !(portfolio.length % 5) && current >= 768 ? (
        <div className={styles.projectComment}>
          <img
            key={uniqid()}
            src={commentsPictures[commentIndex].image}
            alt="comment"
          />
          <p className={styles.commentText}>
            {commentsPictures[commentIndex].commentText}
          </p>
        </div>
      ) : null}
    </div>
  );
}
