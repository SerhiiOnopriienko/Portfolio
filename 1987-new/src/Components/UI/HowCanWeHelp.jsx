import styles from "../../Pages/Portfolio.module.css";

export default function HowCanWeHelp({ setOpen }) {
  return (
    <p className={styles.helpButton} onClick={() => setOpen(true)}>
      HOW CAN WE HELP YOU?
    </p>
  );
}
