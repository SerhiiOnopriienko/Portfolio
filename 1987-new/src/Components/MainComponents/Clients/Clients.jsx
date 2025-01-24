import styles from "./Clients.module.css";
import commonStyles from "../Media/Media.module.css";
import whoWeAreStyles from "../WhoWeAre/WhoWeAre.module.css";
import { useRef } from "react";
import clientsMobile from "../../../images/ClientsLogos/clientsMobile.svg";
import clientsDesktop from "../../../images/ClientsLogos/clientsDesktop.svg";

export default function Clients() {
  const { current } = useRef(window.innerWidth);

  return (
    <div>
      <div className={whoWeAreStyles.whoWeAreHeader}>
        <h2>Clients</h2>
        <p
          className={`${commonStyles.socialText} ${commonStyles.desktopSocialText}`}
        >
          We have collaborated with industry leaders like:{" "}
        </p>
      </div>
      <div className={whoWeAreStyles.outerContainer}>
        <div className={whoWeAreStyles.emptyContainer}></div>
        <div className={`${styles.displayOnlyOnMobile}`}>
          <p
            className={`${commonStyles.socialText} ${commonStyles.mobileSocialText} ${styles.clientsSocialText}`}
          >
            We have collaborated with industry leaders like:{" "}
          </p>
          <div className={styles.clientsLogos}>
            <img
              src={current < 768 ? clientsMobile : clientsDesktop}
              alt="clients"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
