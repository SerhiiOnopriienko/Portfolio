import styles from "./WhoWeAre.module.css";
import commonStyles from "../Media/Media.module.css";
import { Link } from "react-router-dom";

export default function WhoWeAre({
  setOpen,
  filterAllCategories,
  filterPremieres,
  filterLive,
  filterPrivateParty,
  filterProduction,
  filterCorporate,
}) {
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className={styles.whoWeAreHeader}>
        <h2>Who we are</h2>
        <p
          className={`${commonStyles.socialText} ${commonStyles.desktopSocialText}`}
        >
          We deliver 5 star services and production solutions for the live
          entertainment industry.
        </p>
      </div>
      <div className={styles.outerContainer}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.textContainer}>
          <div className={styles.bigLogo}>
            <p
              className={`${commonStyles.socialText} ${commonStyles.mobileSocialText}`}
            >
              At 1987 Masters. We deliver 5 star creative services and technical
              production solutions for the entertainment industry.
            </p>
            <p className={`${commonStyles.socialText} ${styles.whoWeAreText}`}>
              From 2000 on European and from 2015 as a leader on the US market,
              we specialize in a wide range of services that help bringing the
              most creative visions to life.
            </p>
            <p className={`${commonStyles.socialText} ${styles.whoWeAreText}`}>
              Since our founding, we have built a reputation for excellence in
              our field, and our expertise is sought after by clients. We
              established strong and long lasting relationships with top event
              producers, A-list artists and legendary venues.
            </p>
            <p className={`${commonStyles.socialText} ${styles.whoWeAreText}`}>
              We have created and executed on every kind of live experience,
              including:
            </p>
          </div>
          <ul className={styles.whoWeAreLinks}>
            <li>
              <Link to={"/portfolio"} onClick={filterCorporate}>
                CORPORATE EVENTS
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} onClick={filterPremieres}>
                MOVIE PREMIERES
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} onClick={filterPremieres}>
                SCREENINGS
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} onClick={filterCorporate}>
                BRAND AND PRODUCT LAUNCHES
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} onClick={filterCorporate}>
                CONVENTIONS AND SUMMITS
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} onClick={filterCorporate}>
                AWARD SHOWS
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} onClick={filterPrivateParty}>
                SPECIAL EVENTS
              </Link>
            </li>
            <li>
              <Link to={"/portfolio"} onClick={filterLive}>
                CONCERTS AND TOURS
              </Link>
            </li>
          </ul>
          <div className={styles.bigLogoMobile}>
            <div></div>
          </div>
          <div className={styles.boderedTextHeader}>
            <p>Services:</p>
            <ul
              className={`${styles.whoWeAreLinks} ${styles.whoWeAreTextBordered}`}
            >
              <li>Innovative technologies powered by AI</li>
              <li>custom event design and pre-production</li>
              <li>Technical Support</li>
              <li>Creative Solutions</li>
              <li>Entertainment and booking A-list artists</li>
              <li>event management and hospitality</li>
            </ul>
          </div>
          <ul className={styles.whoWeAreFooter}>
            <li>
              <Link to={"/services"}>SERVICES</Link>
            </li>
            <li>
              <Link to={"/about/our_team"}>ABOUT</Link>
            </li>
            <li>
              <Link onClick={handleOpen}>HOW CAN WE HELP YOU</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
