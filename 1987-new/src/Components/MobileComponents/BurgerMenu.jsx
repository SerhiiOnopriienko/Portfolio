import { useState } from "react";
import styles from "../MainComponents/Header/Header.module.css";
import { Link } from "react-router-dom";
import ArrowUp from "../UI/ArrowUp";
import ArrowDown from "../UI/ArrowDown";

export default function BurgerMenu({
  pathname,
  showAbout,
  setShowAbout,
  aboutClasses,
}) {
  const [openBurger, setOpenBurger] = useState(false);

  const hadleCloseBurger = () => {
    setOpenBurger(false);
    setShowAbout(false);
  };

  const handleOpenAboutSubmenue = () => {
    setShowAbout(!showAbout);
  };

  return !openBurger ? (
    <>
      <svg
        onClick={() => setOpenBurger(true)}
        className="burgerClosed"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.125 18.375H19.875M4.125 12.375H19.875M4.125 6.375H19.875"
          stroke="#F2EFEA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  ) : (
    <>
      <svg
        onClick={hadleCloseBurger}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.851 6.45104C18.9366 6.36563 19.0044 6.26421 19.0507 6.15258C19.0971 6.04094 19.1209 5.92127 19.121 5.80041C19.1211 5.67954 19.0974 5.55985 19.0512 5.44815C19.005 5.33646 18.9373 5.23496 18.8518 5.14944C18.7664 5.06393 18.665 4.99607 18.5534 4.94975C18.4417 4.90343 18.3221 4.87955 18.2012 4.87947C18.0803 4.8794 17.9606 4.90313 17.849 4.94931C17.7373 4.9955 17.6358 5.06323 17.5502 5.14864L11.9998 10.699L6.45104 5.14864C6.27833 4.97593 6.04409 4.87891 5.79984 4.87891C5.55559 4.87891 5.32135 4.97593 5.14864 5.14864C4.97593 5.32135 4.87891 5.55559 4.87891 5.79984C4.87891 6.04409 4.97593 6.27833 5.14864 6.45104L10.699 11.9998L5.14864 17.5486C5.06313 17.6342 4.99529 17.7357 4.94901 17.8474C4.90273 17.9591 4.87891 18.0789 4.87891 18.1998C4.87891 18.3208 4.90273 18.4405 4.94901 18.5523C4.99529 18.664 5.06313 18.7655 5.14864 18.851C5.32135 19.0238 5.55559 19.1208 5.79984 19.1208C5.92078 19.1208 6.04054 19.097 6.15227 19.0507C6.264 19.0044 6.36553 18.9366 6.45104 18.851L11.9998 13.3006L17.5502 18.851C17.723 19.0235 17.9571 19.1204 18.2012 19.1202C18.4453 19.1201 18.6793 19.023 18.8518 18.8502C19.0243 18.6775 19.1212 18.4434 19.121 18.1993C19.1209 17.9552 19.0238 17.7211 18.851 17.5486L13.3006 11.9998L18.851 6.45104Z"
          fill="#F2EFEA"
        />
      </svg>
      <ul className={styles.navigationMenuBurger}>
        <Link
          onClick={() => setOpenBurger(false)}
          style={
            pathname.includes("portfolio")
              ? { textDecoration: "underline" }
              : { textDecoration: "none" }
          }
          to={"/portfolio"}
        >
          PORTFOLIO
        </Link>
        <Link
          onClick={() => setOpenBurger(false)}
          style={
            pathname.includes("management")
              ? { textDecoration: "underline" }
              : { textDecoration: "none" }
          }
          to={"management"}
        >
          MANAGEMENT
        </Link>
        <Link
          onClick={() => setOpenBurger(false)}
          style={
            pathname.includes("technologies")
              ? { textDecoration: "underline" }
              : { textDecoration: "none" }
          }
          to={"technologies"}
        >
          TECHNOLOGIES
        </Link>

        <div
          className={styles.subWithSub}
          style={
            pathname.includes("about")
              ? { textDecoration: "underline" }
              : { textDecoration: "none" }
          }
          onClick={handleOpenAboutSubmenue}
        >
          <div className={styles.withSubmenu}>
            <p>ABOUT</p>{" "}
            {!showAbout ? (
              <ArrowDown arrowColor="black" />
            ) : (
              <ArrowUp arrowColor="black" />
            )}
          </div>
          <ul className={`${aboutClasses} ${styles.submenuBorder}`}>
            <Link to={"about"} onClick={() => setOpenBurger(false)}>
              OUR MISSION
            </Link>
            <Link to={"about/our_team"} onClick={() => setOpenBurger(false)}>
              OUR TEAM
            </Link>
            {/* <Link to={"about/careers"} onClick={() => setOpenBurger(false)}>
              CAREERS
            </Link> */}
          </ul>
        </div>
        <Link
          onClick={() => setOpenBurger(false)}
          to={"news"}
          style={
            pathname.includes("news")
              ? { textDecoration: "underline" }
              : { textDecoration: "none" }
          }
        >
          NEWS
        </Link>
        <Link
          onClick={() => setOpenBurger(false)}
          to={"contacts"}
          style={
            pathname.includes("contacts")
              ? { textDecoration: "underline" }
              : { textDecoration: "none" }
          }
        >
          CONTACTS
        </Link>
      </ul>
    </>
  );
}
