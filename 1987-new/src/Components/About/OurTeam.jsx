import { useEffect } from "react";
import styles from "./About.module.css";
import clientsStyles from "../ServiceComponents/ClientsAreSaying/ClientsAreSaying.module.css";
import aboutPhoto from "../../images/aboutPhoto.jpg";
import { Link } from "react-router-dom";

export default function OurTeam({ setOpen }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={`${styles.headerContainerAbout}`}>
      <div className={clientsStyles.clientsAreSayingHeader}>
        <h2>Our Team</h2>
      </div>
      <div className={styles.imageAndText}>
        <div className={styles.aboutImageContainer}>
          <img src={aboutPhoto} alt="About" />
        </div>
        <div className={styles.aboutTextsContainer}>
          <p>
            Meet Our Founder and Our Team at <span>1987 Masters</span>
          </p>
          <p>
            At <span>1987 Masters</span>, we are a team of passionate and
            talented individuals dedicated to bringing our client`s creative
            visions to life. With years of experience in the entertainment
            industry, our team is skilled in all aspects of production for live
            music, corporate, film and television.
          </p>
          <p>
            Our company was founded by Yurii Barybin, a visionary producer and
            director who has a passion for telling stories that inspire and
            entertain audiences. With over 20 years of experience in the
            entertainment industry, Yurii has a proven track record of creating
            successful productions across various genres and mediums. He has
            worked with corporate clients and world-famous artists, including
            Netflix, Facebook, Nike, Samsung, Disney, Elton John, Stevie Wonder,
            Seal, Rihanna, Lady Gaga, and more.
          </p>
          <p>
            At <span>1987 Masters</span>, we specialize in audio, video and
            lighting production services, creating immersive and unforgettable
            experiences for audiences. From large-scale concerts and festivals
            to corporate events and trade shows, our team has the expertise and
            creativity to bring any vision to life.
          </p>
          <p>
            Our team includes a group of talented audio engineers and producers,
            lighting designers, video engineers and projectionists,
            cinematographers and editors, production designers and managers who
            work together to create unique live shows and compelling content
            that engage and entertain audiences. From pre-production planning to
            event execution our team is dedicated to delivering high-quality
            services that exceed our client`s expectations.
          </p>
          <p>
            At <span>1987 Masters</span>, we pride ourselves on our
            collaborative approach to every project. We work closely with our
            clients to understand their vision and objectives, and we provide
            guidance and support every step of the way. Our team is committed to
            clear communication, transparency, and accountability, ensuring that
            our clients are always informed and involved throughout the
            production process.
          </p>
          <p>
            We believe that the key to our success lies in the strength of our
            team. We are passionate about what we do and take great pride in
            delivering outstanding results for our clients. Contact us today to
            learn more about how we can help to bring your creative vision to
            life.
          </p>
          <p className={styles.CeoSighn}>Yuri Barybin</p>
          <p>CEO, founder at 1987 masters</p>
        </div>
      </div>
      <div className={`${styles.tabletText} ${styles.aboutTextsContainer}`}>
        <p>
          At <span>1987 Masters</span>, we specialize in audio, video and
          lighting production services, creating immersive and unforgettable
          experiences for audiences. From large-scale concerts and festivals to
          corporate events and trade shows, our team has the expertise and
          creativity to bring any vision to life.
        </p>
        <p>
          Our team includes a group of talented audio engineers and producers,
          lighting designers, video engineers and projectionists,
          cinematographers and editors, production designers and managers who
          work together to create unique live shows and compelling content that
          engage and entertain audiences. From pre-production planning to event
          execution our team is dedicated to delivering high-quality services
          that exceed our client`s expectations.
        </p>
        <p>
          At <span>1987 Masters</span>, we pride ourselves on our collaborative
          approach to every project. We work closely with our clients to
          understand their vision and objectives, and we provide guidance and
          support every step of the way. Our team is committed to clear
          communication, transparency, and accountability, ensuring that our
          clients are always informed and involved throughout the production
          process.
        </p>
        <p>
          We believe that the key to our success lies in the strength of our
          team. We are passionate about what we do and take great pride in
          delivering outstanding results for our clients. Contact us today to
          learn more about how we can help to bring your creative vision to
          life.
        </p>
        <p className={styles.CeoSighn}>Yuri Barybin</p>
        <p>CEO, founder at 1987 masters</p>
      </div>
      <div className={styles.aboutButtons}>
        <Link to={"/management"}>SERVICES</Link>
        <Link to={"/portfolio"}>PORTFOLIO</Link>
        <Link className={styles.howToHelp} onClick={handleOpen}>
          CONTACT US
        </Link>
      </div>
    </div>
  );
}
