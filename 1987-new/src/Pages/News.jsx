import { Helmet } from "react-helmet";
import commonStyles from "./Portfolio.module.css";
import { newsList } from "../Components/NewsComponents/newsList";
import NewsItem from "../Components/NewsComponents/NewsItem";

export default function News() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Stay updated with the latest trends and insights in event production from Los Angeles to the rest of the world with the 1987 Masters blog. Explore expert tips and industry news to enhance your event planning globally."
        />
        <meta
          name="keywords"
          content="Global event production blog Los Angeles"
        />
        <title>News</title>
      </Helmet>
      <div className={commonStyles.headerPortfolio}>
        <h2>News</h2>
      </div>
      <NewsItem newsList={newsList} />
    </>
  );
}
