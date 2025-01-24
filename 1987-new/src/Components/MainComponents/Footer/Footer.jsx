import styles from "./Footer.module.css";
import Logo from "../../UI/Logo";
import LinkedinLogo from "../../../images/Contacts/LinkedinLogo";
import InstagramLogo from "../../../images/Contacts/InstagramLogo";
import FacebookLogo from "../../../images/Contacts/FacebookLogo";
import PhoneIcon from "../../../images/Contacts/PhoneIcon";
import WhatsUpIcon from "../../../images/Contacts/WhatsupIcon";
import { Link } from "react-router-dom";

export default function Footer({ setOpen }) {
  const handleOpen = () => setOpen(true);

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogo}>
        <Logo />
      </div>
      <div className={styles.footerLinks}>
        <div>
          <p className={styles.footerHeader}>SOCIAL MEDIA</p>
          <ul className={styles.social}>
            <li>
              <a href="https://wa.me/13232034256" target="blank_">
                <WhatsUpIcon fillColor={"#010101"} />
              </a>
            </li>
            <li>
              <a href="tel:+13232034256" target="blank_">
                <PhoneIcon fillColor={"#010101"} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/1987masters/"
                target="blank_"
              >
                <LinkedinLogo />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/1987masters?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="blank_"
              >
                <InstagramLogo />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/1987Masters/" target="blank_">
                <FacebookLogo />
              </a>
            </li>
          </ul>
          <div className={styles.contactButton}>
            <Link onClick={handleOpen}>contact us</Link>
          </div>
          <div className={styles.reachUsSection}>
            <p>
              Reach us at <a href="tel:323-203-4256">323-203-4256</a>
            </p>
            <p>
              or{" "}
              <a href="mailto:production@1987masters.com">
                production@1987masters.com
              </a>
            </p>
          </div>
        </div>

        <div className={`${styles.manaTechContainer} ${styles.widthContainer}`}>
          <div className={styles.manaTech}>
            <p>management</p>

            <Link to={"management"}>Entertainment Production Consulting</Link>
            <Link to={"management"}>Full Event Production and Supervision</Link>
            <Link to={"management"}>Venue Sales and Management</Link>
            <Link to={"management"}>Event Pre-production and Planning</Link>
            <Link to={"management"}>Crew Management and Scheduling</Link>
          </div>
          <div className={styles.manaTech}>
            <p>technologies</p>
            <Link to={"technologies"}>
              Innovative Technologies Powered by Al
            </Link>
            <Link to={"technologies"}>Audio Technologies</Link>
            <Link to={"technologies"}>Lighting Technologies</Link>
            <Link to={"technologies"}>Video Technologies</Link>
            <Link to={"technologies"}>Live Stream & Content Capture</Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.termsAndOtherContainer}>
          <span>© 2016-2025 1987 Masters, Inc. </span>
          <span>
            Use of material is possible only with the permission of its owners
          </span>
          <div className={styles.terms}>
            <a href="#">TERMS</a>
            <a href="#">PRIVACY</a>
          </div>
        </div>

        <div className={`${styles.regionsContainer} ${styles.widthContainer}`}>
          <p className={styles.footerHeader}>REGIONS</p>
          <div className={styles.regions}>
            <div className={styles.country}>
              <p className={styles.countryName}>US</p>

              <p>Los Angeles, CA</p>
              <p>San Francisco, CA</p>
              <p>Seattle, WA</p>
              <p>Miami,Fl</p>
              <p>New York, NY</p>
              <p>Chicago, IL</p>
              <p>Boston, MA</p>
              <p>Philadelphia, PA</p>
              <p>Denver, CO</p>
            </div>
            <div className={styles.country}>
              <p className={styles.countryName}>Canada</p>
              <p>Toronto, ON</p>
              <p>Montreal, QC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
