import { useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "../../Pages/ServicesNew.module.css";
import commonStyles from "../../Pages/Contacts.module.css";
import { Link } from "react-router-dom";
import ClientsAreSaying from "./ClientsAreSaying/ClientsAreSaying";
import ManagementTechnologiesSlider from "./ManagementTechnologiesSlider/ManagementTechnologiesSlider";
import img1 from "../../images/Services/ManagementTechnologiesSlider/t1.jpg";
import img2 from "../../images/Services/ManagementTechnologiesSlider/t2.jpg";
import img3 from "../../images/Services/ManagementTechnologiesSlider/t3.jpg";
import img4 from "../../images/Services/ManagementTechnologiesSlider/t4.jpg";
import img5 from "../../images/Services/ManagementTechnologiesSlider/t5.jpg";

export default function Technologies() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="At 1987 Masters, we leverage cutting-edge technology and equipment to deliver top-notch technical solutions for events in Los Angeles and worldwide. Elevate your event production with our advanced technologies."
        />
        <meta
          name="keywords"
          content="Event technology solutions Los Angeles"
        />
        <title>Technologies</title>
      </Helmet>

      <div className={styles.servicesOuter}>
        <div className={commonStyles.headerContacts}>
          <h2>Technologies</h2>
        </div>

        <div className={styles.servicesContent}>
          <div className={styles.servicesSubheader}>
            <h2>
              TURNKEY SOLUTIONS FROM <span>WOW-IDEA</span> T0 SOLID PRODUCTION
            </h2>
          </div>

          <div className={styles.servicesTable}>
            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Innovative technologies powered by Al</h3>
              </div>
              <ul>
                <li>Volumetrics screens</li>
                <li>Virtual reality (VR)</li>
                <li>Augmented reality (AR)</li>
                <li>Mixed reality (XR)</li>
                <li>
                  3D mapping and other digital innovations that enhance the
                  physical experience
                </li>
                <li>Cinema DCP Projection with Dolby Surround Audio</li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Audio Technologies</h3>
              </div>
              <ul>
                <li>
                  Audio System Design and Engineering, SPL Coverage Simulation
                </li>
                <li>
                  5.1, 7.1 and Atmos Dolby Surround Audio Systems for Movie
                  Premiers and Screenings
                </li>
                <li>PA Audio Systems for Music and Corporate Shows</li>
                <li>FOH and Monitor Mixing</li>
                <li>Waves Plug-in Integration</li>
                <li>Wireless Systems RF Management</li>
                <li>Backline Services</li>
                <li>Multitrack Recording and Playback</li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Lighting Technologies</h3>
              </div>
              <ul>
                <li>Lighting Systems Design</li>
                <li>Lighting Plot and Visual Simulation</li>
                <li>Intelligent and Conventional Lighting Systems</li>
                <li>Lighting Control</li>
                <li>Special FX and Lasers</li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Video Technologies</h3>
              </div>
              <ul>
                <li>Video Systems Design</li>
                <li>Projection Mapping</li>
                <li>DCP Video Playback</li>
                <li>LED Screens</li>
                <li>Multisource Switching</li>
                <li>Video Playback and Recording</li>
                <li>PowerPoint and Keynote Presentations</li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Live Stream & Content Capture</h3>
              </div>
              <ul>
                <li>Live Video Streaming and Webcast</li>
                <li>
                  Zoom, Teams, YouTube, Vimeo, Facebook, Instagram, TikTok, vMix
                </li>
                <li>Multi-camera Setup</li>
                <li>Post-production Editing</li>
                <li>iMAG</li>
              </ul>
            </div>
            <div
              className={`${styles.servicesButtonContainer} ${styles.servicesContact}`}
            >
              <Link to={"/contacts"} className={styles.quot}>
                CONTACTS
              </Link>
              <Link to={"/management"} className={styles.quot}>
                MANAGEMENT
              </Link>
            </div>
          </div>

          <div className={styles.servicesSubheader}>
            <h2>
              Let’s collaborate and bring your project to life! Tell us about
              your vision and we’ll make it happen!
            </h2>
          </div>
        </div>
        <ManagementTechnologiesSlider
          img1={img1}
          img2={img2}
          img3={img3}
          img4={img4}
          img5={img5}
        />
        <ClientsAreSaying />
      </div>
    </>
  );
}
