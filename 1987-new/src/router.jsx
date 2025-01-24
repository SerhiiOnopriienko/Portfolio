import { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Wrapper from "./Components/Wrapper";
import About from "./Pages/About";
import Main from "./Pages/Main.jsx";
import Management from "./Components/ServiceComponents/Management.jsx";
import Technologies from "./Components/ServiceComponents/Technologies.jsx";
import News from "./Pages/News";
import Contacts from "./Pages/Contacts.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import OurMission from "./Components/About/OurMission.jsx";
import OurTeam from "./Components/About/OurTeam.jsx";
import Careers from "./Components/About/Careers";
import styles from "./Pages/Portfolio.module.css";
import { portfolioPictures } from "./Components/UI/portfolioLists.js";
import useGTMPageView from "./useGTMPageView.jsx";

export default function RouterComponent() {
  useGTMPageView();
  const [open, setOpen] = useState(false);
  const [showModalPortfolio, setShowModalPortfolio] = useState(false);
  const [pictureList, setPictureList] = useState([]);

  const [allCategories, setAllCategories] = useState(styles.activeCategorie);
  const [premieres, setPremieres] = useState(styles.notActive);
  const [corporate, setCorporate] = useState(styles.notActive);
  const [live, setLive] = useState(styles.notActive);
  const [specialEvents, setSpecialEvents] = useState(styles.notActive);
  const [production, setProduction] = useState(styles.notActive);

  const categoriesArr = [
    setAllCategories,
    setPremieres,
    setCorporate,
    setLive,
    setSpecialEvents,
    setProduction,
  ];

  const [portfolio, setPortfolio] = useState([...portfolioPictures]);

  const filterAllCategories = () => {
    window.scrollTo(0, 0);
    categoriesArr.map((setCategorie) => setCategorie(styles.notActive));
    setAllCategories(styles.activeCategorie);
    setPortfolio([...portfolioPictures]);
  };
  const filterPremieres = () => {
    window.scrollTo(0, 0);
    categoriesArr.map((setCategorie) => setCategorie(styles.notActive));
    setPremieres(styles.activeCategorie);
    setPortfolio(
      [...portfolioPictures].filter((item) => item.hashtag === "premiers")
    );
  };
  const filterCorporate = () => {
    window.scrollTo(0, 0);
    categoriesArr.map((setCategorie) => setCategorie(styles.notActive));
    setCorporate(styles.activeCategorie);
    setPortfolio(
      [...portfolioPictures].filter(
        (item) => item.hashtag === "corporate events"
      )
    );
  };
  const filterLive = () => {
    window.scrollTo(0, 0);
    categoriesArr.map((setCategorie) => setCategorie(styles.notActive));
    setLive(styles.activeCategorie);
    setPortfolio(
      [...portfolioPictures].filter((item) => item.hashtag === "live show")
    );
  };
  const filterSpecialEvents = () => {
    window.scrollTo(0, 0);
    categoriesArr.map((setCategorie) => setCategorie(styles.notActive));
    setSpecialEvents(styles.activeCategorie);
    setPortfolio(
      [...portfolioPictures].filter((item) => item.hashtag === "special events")
    );
  };
  const filterProduction = () => {
    window.scrollTo(0, 0);
    categoriesArr.map((setCategorie) => setCategorie(styles.notActive));
    setProduction(styles.activeCategorie);
    setPortfolio(
      [...portfolioPictures].filter(
        (item) => item.hashtag === "video production"
      )
    );
  };

  const [headerPartHeight, setHeaderPartHeight] = useState(0);

  useMemo(() => {
    window.innerWidth < 1920
      ? setHeaderPartHeight(280)
      : setHeaderPartHeight(322);
  }, []);

  const scrollToContent = () => {
    window.scroll({
      top: window.innerHeight - headerPartHeight,
      behavior: "smooth",
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Wrapper
            showModalPortfolio={showModalPortfolio}
            setShowModalPortfolio={setShowModalPortfolio}
            open={open}
            setOpen={setOpen}
            pictureList={pictureList}
            setPictureList={setPictureList}
            scrollToContent={scrollToContent}
          />
        }
      >
        <Route
          index
          element={
            <Main
              setOpen={setOpen}
              filterAllCategories={filterAllCategories}
              filterPremieres={filterPremieres}
              filterLive={filterLive}
              filterSpecialEvents={filterSpecialEvents}
              filterProduction={filterProduction}
              filterCorporate={filterCorporate}
            />
          }
        />
        <Route
          path="portfolio"
          element={
            <Portfolio
              showModalPortfolio={showModalPortfolio}
              setShowModalPortfolio={setShowModalPortfolio}
              setOpen={setOpen}
              pictureList={pictureList}
              setPictureList={setPictureList}
              allCategories={allCategories}
              premieres={premieres}
              corporate={corporate}
              live={live}
              specialEvents={specialEvents}
              production={production}
              portfolio={portfolio}
              filterAllCategories={filterAllCategories}
              filterCorporate={filterCorporate}
              filterPremieres={filterPremieres}
              filterLive={filterLive}
              filterSpecialEvents={filterSpecialEvents}
              filterProduction={filterProduction}
            />
          }
        />
        <Route path="management" element={<Management setOpen={setOpen} />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="about" element={<About setOpen={setOpen} />}>
          <Route index element={<OurMission setOpen={setOpen} />} />
          <Route path="our_team" element={<OurTeam setOpen={setOpen} />} />
          <Route path="careers" element={<Careers setOpen={setOpen} />} />
        </Route>
        <Route path="news" element={<News />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Main />} />
      </Route>
      <Route path="*" element={<Main />} />
    </Routes>
  );
}
