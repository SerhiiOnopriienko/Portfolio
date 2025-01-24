import styles from "./HeaderImage.module.css";
import video from "../../../images/RAYE_video.mp4";

export default function HeaderImage() {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video
          className={styles.videoTag}
          playsInline
          loop
          autoPlay
          src={video}
          muted={true}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.headerText}>
        <h1>We create events</h1>
        <h1>for the perfect experience</h1>
        <p>Event Support and Production From The Oscars To Burning Man</p>
      </div>
    </div>
  );
}
