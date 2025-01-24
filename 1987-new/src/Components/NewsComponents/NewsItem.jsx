import { useEffect, useState } from "react";
import styles from "../../Pages/News.module.css";
import ContactButton from "./ContactsButton";

export default function NewsItem({ newsList }) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const changeScreenWidth = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    };
    changeScreenWidth();
    window.addEventListener("resize", changeScreenWidth);
    return () => window.removeEventListener("resize", changeScreenWidth);
  }, []);

  return (
    <div className={styles.newsWrapper}>
      {newsList.map((newItem, index) => {
        const imageClass = newItem.foto.length === 2 ? styles.twoImages : "";
        return (
          <>
            <div key={newItem.id} className={styles.new}>
              <div className={`${styles.imageSection} ${imageClass}`}>
                {newItem.foto.map((image) => {
                  return <img src={image} alt="" />;
                })}
              </div>
              <div className={styles.textSection}>
                {newItem.text.map((text) => {
                  return text;
                })}
                <p className={styles.linkedinLink}>
                  ... Read more on{" "}
                  <a href={newItem.link} target="_blank">
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            {screenWidth < 1280 && index === 3 ? <ContactButton /> : null}
            {screenWidth >= 1280 && index === 4 ? <ContactButton /> : null}
          </>
        );
      })}
    </div>
  );
}
