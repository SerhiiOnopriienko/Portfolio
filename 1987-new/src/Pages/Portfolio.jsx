import { useRef, useEffect } from "react";
import styles from "./Portfolio.module.css";
import HowCanWeHelp from "../Components/UI/HowCanWeHelp";
import PortfolioFotos from "../Components/UI/PortfolioFotos";
import { Helmet } from "react-helmet";
import PortfolioArrow from "../Components/UI/PortfolioArrow";

export default function Portfolio({
  setShowModalPortfolio,
  setOpen,
  setPictureList,
  allCategories,
  premieres,
  corporate,
  live,
  specialEvents,
  production,
  portfolio,
  filterAllCategories,
  filterCorporate,
  filterPremieres,
  filterLive,
  filterSpecialEvents,
  filterProduction,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { current } = useRef(window.innerWidth);

  const openModalWithPictures = (pictures) => {
    setShowModalPortfolio(true);
    setPictureList(pictures);
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore the diverse portfolio of 1987 Masters, showcasing our expertise in audiovisual production, technical management, and event support for clients in Los Angeles and globally. See how we bring creative visions to life worldwide."
        />
        <meta
          name="keywords"
          content="Global event production portfolio Los Angeles"
        />
        <title>Portfolio</title>
      </Helmet>
      <div className={styles.headerPortfolio}>
        <h2>Portfolio</h2>
        <p>
          We create events for the perfect expirience. Event support from oscars
          to presentation
        </p>
      </div>
      <div className={styles.portfolioContainer}>
        <div className={styles.categoriesContainer}>
          <h3
            className={`${styles.categories} ${allCategories}`}
            onClick={filterAllCategories}
          >
            ALL CATEGORIES
          </h3>
          <h3
            className={`${styles.categories} ${premieres}`}
            onClick={filterPremieres}
          >
            PREMIERS
          </h3>
          <h3
            className={`${styles.categories} ${corporate}`}
            onClick={filterCorporate}
          >
            CORPORATE EVENTS
          </h3>
          <h3 className={`${styles.categories} ${live}`} onClick={filterLive}>
            LIVE SHOW
          </h3>
          <h3
            className={`${styles.categories} ${specialEvents}`}
            onClick={filterSpecialEvents}
          >
            SPECIAL EVENTS
          </h3>
          <h3
            className={`${styles.categories} ${production}`}
            onClick={filterProduction}
          >
            VIDEO PRODUCTION
          </h3>
          {current >= 1280 ? <HowCanWeHelp setOpen={setOpen} /> : null}
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.portfolioHeader}>
            <h4>
              WE CREATE EVENTS FOR THE PERFECT EXPERIENCE. EVENT SUPPORT FROM
              OSCARS TO PRESENTATION
            </h4>
            <PortfolioFotos
              portfolio={portfolio}
              openModalWithPictures={openModalWithPictures}
              setOpen={setOpen}
              filterAllCategories={filterAllCategories}
              filterPremieres={filterPremieres}
              filterLive={filterLive}
              filterSpecialEvents={filterSpecialEvents}
              filterProduction={filterProduction}
              filterCorporate={filterCorporate}
            />
          </div>
        </div>
      </div>
      <PortfolioArrow />
    </>
  );
}
