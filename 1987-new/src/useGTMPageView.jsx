import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGTMPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: {
          path: location.pathname,
          search: location.search,
          title: document.title,
        },
      });
    }
  }, [location]);
};

export default useGTMPageView;
