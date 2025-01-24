import styles from "./GetQuote.module.css";

export default function SmallGetQuote({ qouteClass, setOpen }) {
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <a onClick={handleOpen} className={`${styles.smallgetQuote} ${qouteClass}`}>
      GET THE QUOTE
    </a>
  );
}
