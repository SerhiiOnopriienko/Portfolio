import { useEffect } from "react";
import styles from "./About.module.css";
import clientsStyles from "../ServiceComponents/ClientsAreSaying/ClientsAreSaying.module.css";
import ourMissionVideo from "../../images/ourMissionVideo.mp4";
import { Link } from "react-router-dom";
import WhoWeAre from "../MainComponents/WhoWeAre/WhoWeAre";
import Clients from "../MainComponents/Clients/Clients";
import LatestProjects from "../MainComponents/LatestProjects/LatestProjects";
import Media from "../MainComponents/Media/Media";
import Contact from "../MainComponents/Contact/Contact";

export default function OurMission({
  setOpen,
  filterAllCategories,
  filterPremieres,
  filterLive,
  filterPrivateParty,
  filterProduction,
  filterCorporate,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={`${styles.headerContainerAbout}`}>
        <div className={clientsStyles.clientsAreSayingHeader}>
          <h2>Our Mission</h2>
        </div>
        <div className={`${styles.imageAndText} ${styles.missionImageAndText}`}>
          <div className={styles.missionImageContainer}>
            <video playsInline loop autoPlay src={ourMissionVideo} muted={true}>
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            className={`${styles.aboutTextsContainer} ${styles.missionTextContainer}`}
          >
            <p>
              Our Mission : To deliver 5 star services and production solutions
              for the live entertainment industry.
            </p>
            <p>
              At <span>1987 Masters</span>, we are dedicated to providing
              exceptional solutions for our clients in the entertainment and
              event industry. As a market leader, we specialize in a wide range
              of services that help bring the most creative visions to life.
              Since our founding, we have built a reputation for excellence in
              our industry, and our expertise is sought after by clients.
            </p>
            <p>
              We have continually evolved and adapted to meet the unique
              challenges of the industry. Our team of highly skilled
              professionals brings years of experience and expertise to each
              project, and we are committed to delivering exceptional results
              every time.
            </p>
            <p>
              At <span>1987 Masters</span>, we understand that each project is
              unique and requires a personalized approach. We work closely with
              our clients to understand their vision and bring it to life,
              delivering solutions that meet their specific needs and exceed
              their expectations.
            </p>
            <p>
              Whether you need support for a live event, corporate or trade
              show, or any other, 1987 Masters is your partner of choice. We are
              committed to providing world-class solutions that help our clients
              stand out and achieve their goals.
            </p>
            <p>
              As your production partner, we are committed to deliver
              personalized, one-on-one service tailored to your unique needs.
              Our team of highly skilled managers, technicians, engineers, and
              creators work tirelessly behind the scenes to ensure that every
              production is executed flawlessly.
            </p>
            <p>
              Our goal is  to build long-lasting relationships with our clients,
              based on trust, reliability, and exceptional quality.
            </p>
            <p className={styles.missionLastText}>
              Bring <span>1987 Masters</span> to your next project to get a
              flawless event every time. 
            </p>
          </div>
        </div>
        <div className={styles.aboutButtons}>
          <Link to={"/management"}>SERVICES</Link>
          <Link onClick={handleOpen}>HOW CAN WE HELP YOU</Link>
        </div>
      </div>
      <WhoWeAre
        setOpen={setOpen}
        filterCorporate={filterCorporate}
        filterAllCategories={filterAllCategories}
        filterPremieres={filterPremieres}
        filterLive={filterLive}
        filterPrivateParty={filterPrivateParty}
        filterProduction={filterProduction}
      />
      <Clients />
      <LatestProjects setOpen={setOpen} />
      <Media />
      <Contact />
    </>
  );
}
