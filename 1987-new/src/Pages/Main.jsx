import { useEffect } from "react";
import VideoSlider from "../Components/MainComponents/VideoSlider/VideoSlider";
import { Helmet } from "react-helmet";

export default function Main() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="1987 Masters delivers top-tier event production services in Los Angeles and around the world, specializing in audiovisual solutions, technical management, and creative production for corporate events, festivals, and more. Elevate your event experience globally with us. +13232034256"
        />
        <meta
          name="keywords"
          content="Global event production services Los Angeles"
        />
        <title>
          1987 Masters: Entertainment management and technology company
        </title>
      </Helmet>
      <VideoSlider />
    </>
  );
}
