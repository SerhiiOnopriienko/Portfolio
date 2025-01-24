import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Wrapper.module.css";
import ModalContact from "./UI/ModalContact";
import Header from "./MainComponents/Header/Header";
import Footer from "./MainComponents/Footer/Footer";
import SendingModal from "./UI/SendingModal";
import ModalPortfolio from "./UI/ModalPortfolio";
import ModalConsultation from "./UI/ModalConsultation";

export default function Wrapper({
  showModalPortfolio,
  setShowModalPortfolio,
  open,
  setOpen,
  pictureList,
  setPictureList,
  scrollToContent,
}) {
  const [sendingModalOpen, setSendingModal] = useState(false);
  const [afterSendMessage, setAfterSendMessage] = useState("");
  return (
    <div className={styles.outerContainer}>
      <Header scrollToContent={scrollToContent} />
      <ModalConsultation />
      <Outlet />
      <Footer setOpen={setOpen} />
      <ModalContact
        open={open}
        setOpen={setOpen}
        setAfterSendMessage={setAfterSendMessage}
        setSendingModal={setSendingModal}
      />
      <SendingModal
        afterSendMessage={afterSendMessage}
        sendingModalOpen={sendingModalOpen}
        setSendingModal={setSendingModal}
        setOpen={setOpen}
      />
      <ModalPortfolio
        showModalPortfolio={showModalPortfolio}
        setShowModalPortfolio={setShowModalPortfolio}
        pictureList={pictureList}
        setPictureList={setPictureList}
      />
    </div>
  );
}
