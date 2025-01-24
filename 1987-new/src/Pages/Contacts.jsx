import { useEffect } from "react";
import styles from "./Contacts.module.css";
import LinkedinLogo from "../images/Contacts/LinkedinLogo";
import InstagramLogo from "../images/Contacts/InstagramLogo";
import FacebookLogo from "../images/Contacts/FacebookLogo";
import PhoneIcon from "../images/Contacts/PhoneIcon";
import WhatsUpIcon from "../images/Contacts/WhatsupIcon";
import { Helmet } from "react-helmet";

export default function Contacts() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Get in touch with 1987 Masters for inquiries about our event production services in Los Angeles and across the globe. Whether you need technical support or creative solutions, we're here to assist you."
        />
        <meta
          name="keywords"
          content="Contact 1987 Masters Los Angeles global"
        />
        <title>Contacts</title>
      </Helmet>
      <div className={styles.outerContactsContainer}>
        <div className={styles.headerContacts}>
          <h2 className={styles.contactheaderText}>Contacts</h2>
          <p>Let’s get in touch</p>
        </div>
        <div className={styles.mobileHeaderText}>
          <p>Let’s get in touch</p>
        </div>
        <div className={styles.contactsContainer}>
          <div className={styles.requestServices}>
            <h3>Request Services</h3>
            <a href="mailto: Production@1987masters.com">
              Production@1987masters.com
            </a>
          </div>
          <div className={styles.partnership}>
            <h3>Partnerships</h3>
            <a href="mailto: Victoria@1987masters.com">
              Victoria@1987masters.com
            </a>
          </div>
          <div className={styles.accounting}>
            <h3>Accounting & Financial </h3>
            <a href="mailto: Invoice@1987masters.com">
              Invoice@1987masters.com
            </a>
          </div>
          <div className={styles.career}>
            <h3>Career Opportunities </h3>
            <a href="mailto: Hr@1987masters.com">Hr@1987masters.com</a>
          </div>
        </div>
        <div className={styles.socialLinksContainer}>
          <h4>Or just DM us in our social networks</h4>
          <div className={styles.socialLogos}>
            <a href="https://wa.me/13232034256" target="blank_">
              <WhatsUpIcon fillColor="#F2EFEA" />
            </a>
            <a href="tel:+13232034256" target="blank_">
              <PhoneIcon fillColor="#F2EFEA" />
            </a>
            <a
              href="https://www.linkedin.com/company/1987masters/"
              target="blank_"
            >
              <LinkedinLogo />
            </a>
            <a
              href="https://www.instagram.com/1987masters?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="blank_"
            >
              <InstagramLogo />
            </a>
            <a href="https://www.facebook.com/1987Masters/" target="blank_">
              <FacebookLogo />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
