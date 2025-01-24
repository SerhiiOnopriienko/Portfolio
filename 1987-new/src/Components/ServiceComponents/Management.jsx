import { useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "../../Pages/ServicesNew.module.css";
import commonStyles from "../../Pages/Contacts.module.css";
import { Link } from "react-router-dom";
import ClientsAreSaying from "./ClientsAreSaying/ClientsAreSaying";
import ManagementTechnologiesSlider from "./ManagementTechnologiesSlider/ManagementTechnologiesSlider";
import img1 from "../../images/Services/ManagementTechnologiesSlider/m1.jpg";
import img2 from "../../images/Services/ManagementTechnologiesSlider/m2.jpg";
import img3 from "../../images/Services/ManagementTechnologiesSlider/m3.jpg";
import img4 from "../../images/Services/ManagementTechnologiesSlider/m4.jpg";
import img5 from "../../images/Services/ManagementTechnologiesSlider/m5.jpg";

export default function Management({ setOpen }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="1987 Masters provides expert project and team management for seamless event execution in Los Angeles and globally. Our 9 years of experience ensure successful coordination of events of any scale."
        />
        <meta name="keywords" content="Event management services Los Angeles" />
        <title>Management</title>
      </Helmet>

      <div className={styles.servicesOuter}>
        <div className={commonStyles.headerContacts}>
          <h2>Management</h2>
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
                <h3>Venue or client representation</h3>
              </div>
              <ul>
                <li>Consulting on al aspects of the event</li>
                <li>Production service upsell for venues</li>
                <li>
                  Quite/invoice optimization according the budget for client
                </li>
                <li>Artists’ riders negotiation</li>
                <li>Venue crew training and education</li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Venue AV Management and Operations</h3>
              </div>
              <ul>
                <li>Venue Representation and AV Sales</li>
                <li>Custom AV Packages and Add-ons</li>
                <li>Custom Quotes and Estimates</li>
                <li>
                  Tech Specification Documents, CAD and Engineering Plans{" "}
                </li>
                <li>Event Pre-production and Planning</li>
                <li>Project and Production Management</li>
                <li>Event Logistics and Coordination</li>
                <li>Crew Management and Scheduling</li>
                <li>Onsite Technical Support</li>
                <li>House Equipment Service and Maintenance</li>
                <li>Oversight Vendors to Follow Venue Rules and Policies</li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Event management and hospitality</h3>
              </div>
              <ul>
                <li>Hospitality supervision and logistics</li>
                <li>Venue scouting and selection</li>
                <li>Permitting</li>
                <li>Security</li>
                <li>Staffing</li>
                <li>
                  Food and beverage, furniture, floral vendors coordination
                </li>
                <li>
                  VIP guests red carpet reception and event experience
                  assistance
                </li>
                <li>On-site talent and influencers management</li>
                <li>
                  Coordination with various client team stakeholders, vendors,
                  partners
                </li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Technical Management and Event Supervision</h3>
              </div>
              <ul>
                <li>Client Representation</li>
                <li>Custom AV Packages and Add-ons</li>
                <li>Quotes and Estimates Comparison</li>
                <li>Tech Specification Documents, CAD and Engineering Plans</li>
                <li>Event Pre-production and Planning</li>
                <li>Project and Production Management</li>
                <li>Event Logistics and Coordination</li>
                <li>Crew Management and Scheduling</li>
                <li>Onsite Technical Support</li>
                <li>Subrentals Source, Pickup/Delivery</li>
                <li>Oversight Vendors and Venue Crew</li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Custom event design and pre-production</h3>
              </div>
              <ul>
                <li>Creative concept and preproduction</li>
                <li>CADs, floor plans and previsuals</li>
                <li>Video content and graphics</li>
                <li>Production schedule and run of the show</li>
                <li>Crew scheduling and management</li>
                <li>Transportation logistics</li>
                <li>Technical supervision</li>
                <li>Production management</li>
                <li>Audio, video and lighting technology</li>
                <li>Equipment rentals</li>
                <li>Content capture, editing and postproduction</li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Music Tours Technical Support</h3>
              </div>
              <ul>
                <li>Tour Planning and Pre-production</li>
                <li>Logistics, Engineering and Project Management</li>
                <li>Venue Coordination</li>
                <li>Production Management</li>
                <li>Onsite Technical Support</li>
                <li>Crew Scheduling</li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Entertainment and booking A-list artists</h3>
              </div>
              <ul>
                <li>
                  Music performance by A-list artists: Christina Aguilera,
                  Beyoncé, Billie Eilish, Justin Bieber, Jennifer Lopez, Harry
                  Styles, Cirque du Soleil etc.
                </li>
              </ul>
            </div>

            <div className={styles.servicesSell}>
              <div className={styles.sellHeader}>
                <h3>Interview and Music Video Production</h3>
              </div>
              <ul>
                <li>Concept Development</li>
                <li>Scriptwriting</li>
                <li>Pre-production planning</li>
                <li>Filming</li>
                <li>Post-production Editing</li>
                <li>Audio and Visual Effects</li>
              </ul>
            </div>
            <div className={styles.servicesButtonContainer}>
              <Link className={styles.linkAbout} to={"/about"}>
                ABOUT
              </Link>
              <Link className={styles.quot} onClick={handleOpen}>
                GET THE QUOTE
              </Link>
              <Link className={styles.quot} to={"/technologies"}>
                TECHNOLOGIES
              </Link>
            </div>
          </div>

          <div className={styles.servicesSubheader}>
            <h2>We create events for the perfect experience</h2>
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
