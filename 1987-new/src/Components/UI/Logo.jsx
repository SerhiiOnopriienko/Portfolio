import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <p>1987</p>
      <p>
        <span>MASTERS</span>
        <span>PRODUCTIONS</span>
      </p>
    </Link>
  );
}
