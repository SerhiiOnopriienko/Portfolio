import { lazy, Suspense } from "react";
import styles from "./LatestProjects.module.css";
import whoWeAreStyles from "../WhoWeAre/WhoWeAre.module.css";
import commonStyles from "../Media/Media.module.css";
import contactStyles from "../Contact/Contact.module.css";

const SliderComponent = lazy(() => import("./SliderComponent"));
export default function LatestProjects({ setOpen }) {
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className={styles.latestContainer}>
      <div className={whoWeAreStyles.whoWeAreHeader}>
        <h2>Latest projects</h2>
        <p className={commonStyles.desktopSocialText}></p>
      </div>
      <div className={whoWeAreStyles.outerContainer}>
        <div className={whoWeAreStyles.emptyContainer}>
          <div className={styles.desktopContactInfo}>
            <div className={styles.leftTextDesktop}>
              <p>
                We supply <span>more than 600 events</span> per year
              </p>
              <p>
                We only use the <span>industry standart equipment</span>
              </p>
              <p>
                We hire <span>highclass professionals</span> with solid
                reputation
              </p>
              <p>
                We educate and{" "}
                <span>train more than 40 of our specialists</span> every year
              </p>
            </div>
            <p onClick={handleOpen} className={styles.contactDesktop}>
              CONTACT
            </p>
          </div>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <SliderComponent />
        </Suspense>
        <div className={contactStyles.lowerContainer}>
          <div className={contactStyles.headText}>
            <p>
              We supply <span>more than 600 events</span> per year
            </p>
            <p>
              We only use the <span>industry standart equipment</span>
            </p>
            <p>
              We hire <span>highclass professionals</span> with solid reputation
            </p>
            <p>
              We educate and <span>train more than 40 of our specialists</span>{" "}
              every year
            </p>
          </div>
          <p className={contactStyles.contactButton} onClick={handleOpen}>
            CONTACT
          </p>
        </div>
      </div>
    </div>
  );
}
