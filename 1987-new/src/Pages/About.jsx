import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Learn more about 1987 Masters, a leader in event production and audiovisual services in Los Angeles and internationally. Our team is dedicated to delivering innovative solutions for events around the globe."
        />
        <meta name="keywords" content="About 1987 Masters Los Angeles global" />
        <title>About</title>
      </Helmet>
      <Outlet />
    </>
  );
}
