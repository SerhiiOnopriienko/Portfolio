import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBigText}>
        <h2>
          We believe every event only happens once; and it is our mission to
          make your experience perfect<span>.</span>
        </h2>
      </div>
    </div>
  );
}
