import styles from "./VideoArrows.module.css";

export function PreviousVideoArrow({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className={styles.prevVideoArrow}
      width="26"
      height="82"
      viewBox="0 0 26 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5789 0.448341C23.8643 0.448341 24.1536 0.522476 24.4213 0.666832C25.2782 1.13596 25.5919 2.20413 25.1266 3.06106L4.42954 41.0018L25.1266 78.9493C25.5918 79.803 25.2782 80.8711 24.4213 81.3402C23.5716 81.8054 22.4962 81.4885 22.0304 80.6349L0.874788 41.8492C0.585428 41.3237 0.585428 40.682 0.874788 40.1603L22.0304 1.37462C22.3513 0.786072 22.9543 0.45079 23.5782 0.45079L23.5789 0.448341Z"
        fill="#F39D38"
        fillOpacity="0.5"
      />
    </svg>
  );
}

export function NextVideoArrow({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className={styles.nextVideoArrow}
      width="26"
      height="82"
      viewBox="0 0 26 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.42115 81.5517C2.13573 81.5517 1.84637 81.4775 1.57868 81.3332C0.721773 80.864 0.408144 79.7959 0.87335 78.9389L21.5705 40.9982L0.87335 3.05065C0.408161 2.19704 0.721783 1.12892 1.57868 0.659787C2.42837 0.194597 3.50377 0.511503 3.96955 1.36512L25.1252 40.1508C25.4146 40.6763 25.4146 41.318 25.1252 41.8397L3.96955 80.6254C3.6487 81.2139 3.04572 81.5492 2.42175 81.5492L2.42115 81.5517Z"
        fill="#F39D38"
        fillOpacity="0.5"
      />
    </svg>
  );
}
