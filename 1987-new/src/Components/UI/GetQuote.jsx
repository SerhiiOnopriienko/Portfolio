import styles from "./GetQuote.module.css";

export default function GetQuote({ text, setOpen }) {
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <a onClick={handleOpen} className={styles.getQuote}>
      {text}
    </a>
  );
}
