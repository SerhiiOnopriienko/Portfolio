import styles from "./ModalContact.module.css";

export default function SendingModal({
  afterSendMessage,
  sendingModalOpen,
  setSendingModal,
  setOpen,
}) {
  const onClose = () => {
    setSendingModal(false);
    setOpen(false);
  };
  return sendingModalOpen ? (
    <div className={styles.sendingContainer}>
      <div className={styles.closeIcon}>
        <svg
          onClick={onClose}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 15L1 1M15 1L1 15"
            stroke="#F2EFEA8C"
            strokeOpacity="0.55"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h2>
        {afterSendMessage}
        <span>!</span>
      </h2>
    </div>
  ) : null;
}
