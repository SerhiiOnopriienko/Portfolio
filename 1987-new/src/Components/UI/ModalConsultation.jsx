import styles from "./ModalConsultation.module.css";
import { useState, useEffect } from "react";

export default function ModalConsultation() {
  const [showModalConsultation, setShowModalConsultation] = useState(false);
  const onCloseModal = () => {
    setShowModalConsultation(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowModalConsultation(true);
    }, 7000);
  }, []);

  return showModalConsultation ? (
    <div className={styles.modalContainer}>
      <div className={styles.closeIcon}>
        <svg
          onClick={onCloseModal}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 15L1 1M15 1L1 15"
            stroke="#f2efea"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className={styles.textContainer}>
        <p>
          Do <span>you</span> need consultation?
        </p>
        <p>
          <a href="https://wa.me/13232034256" target="blank_">
            Text
          </a>{" "}
          Us or
        </p>
        <p>
          <a href="tel:+13232034256" target="blank_">
            +1 (323) 203-4256
          </a>
        </p>
      </div>
    </div>
  ) : null;
}
