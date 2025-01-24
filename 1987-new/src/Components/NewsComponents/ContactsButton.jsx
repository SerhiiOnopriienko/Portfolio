import styles from "../../Pages/News.module.css";
import { Link } from "react-router-dom";

export default function ContactButton() {
  return (
    <div className={styles.servicesButtonContainer}>
      <Link to={"/contacts"} className={styles.quot}>
        CONTACTS
      </Link>
    </div>
  );
}
