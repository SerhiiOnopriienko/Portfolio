import { useState, useMemo } from "react";
import styles from "./Header.module.css";
import Logo from "../../UI/Logo";
import BurgerMenu from "../../MobileComponents/BurgerMenu";
import { Link, useLocation } from "react-router-dom";

export default function Header({ scrollToContent }) {
  const [showAbout, setShowAbout] = useState(false);
  const [aboutClasses, setAboutClasses] = useState(
    `${styles.about} ${styles.submenu}`
  );

  useMemo(() => {
    showAbout
      ? setAboutClasses(`${styles.about} ${styles.submenu} ${styles.active}`)
      : setAboutClasses(`${styles.about} ${styles.submenu}`);
  }, [showAbout]);

  const { pathname } = useLocation();

  return (
    <div className={styles.headerContainer}>
      <Logo />
      <div className={styles.burgerMenu}>
        <BurgerMenu
          pathname={pathname}
          showAbout={showAbout}
          setShowAbout={setShowAbout}
          aboutClasses={aboutClasses}
        />
      </div>
      <ul className={styles.navigationMenu}>
        <Link
          style={
            pathname.includes("portfolio")
              ? { fontWeight: "500", color: "#F9A719" }
              : null
          }
          to={"/portfolio"}
        >
          PORTFOLIO
        </Link>
        <Link
          style={
            pathname.includes("management")
              ? { fontWeight: "500", color: "#F9A719" }
              : { textDecoration: "none" }
          }
          to={"management"}
        >
          MANAGEMENT
        </Link>
        <Link
          style={
            pathname.includes("technologies")
              ? { fontWeight: "500", color: "#F9A719" }
              : { textDecoration: "none" }
          }
          to={"technologies"}
        >
          TECHNOLOGIES
        </Link>
        <Link
          to={"about/our_team"}
          style={
            pathname.includes("about")
              ? { fontWeight: "500", color: "#F9A719" }
              : { textDecoration: "none" }
          }
          onMouseEnter={() => setShowAbout(true)}
          onMouseLeave={() => setShowAbout(false)}
        >
          ABOUT
          <ul className={aboutClasses}>
            <Link to={"about"}>OUR MISSION</Link>
            <Link to={"about/our_team"}>OUR TEAM</Link>
            {/* <Link to={"about/careers"}>CAREERS</Link> */}
          </ul>
        </Link>
        <Link
          to={"news"}
          style={
            pathname.includes("news")
              ? { fontWeight: "500", color: "#F9A719" }
              : { textDecoration: "none" }
          }
        >
          NEWS
        </Link>
        <Link
          to={"contacts"}
          style={
            pathname.includes("contacts")
              ? { fontWeight: "500", color: "#F9A719" }
              : { textDecoration: "none" }
          }
        >
          CONTACTS
        </Link>
      </ul>
    </div>
  );
}
