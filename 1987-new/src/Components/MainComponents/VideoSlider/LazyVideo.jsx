import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function LazyVideo({ src, name, description }) {
  const videoRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="videoContainer">
      <video
        ref={videoRef}
        className="videoTag"
        src={isIntersecting ? src : null}
        playsInline
        loop
        autoPlay={isIntersecting}
        muted={true}
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
      <div className="videoInfo">
        <div className="firstVideoElement">
          <p>We create events for the perfect experience</p>
          <p className="smallText">
            Event Support and Production From The Oscars to Burning Man
          </p>
        </div>
        <div className="bottomContainer">
          <div className="videoName">
            <p>{name}</p>
            <p className="smallText">{description}</p>
          </div>
          <div className="buttonsContainer">
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/management"}>SERVICES</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
