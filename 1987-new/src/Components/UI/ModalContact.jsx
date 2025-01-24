import { useEffect, useState } from "react";
import styles from "./ModalContact.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export default function ModalContact({
  open,
  setOpen,
  setAfterSendMessage,
  setSendingModal,
}) {
  const [captchaValue, setCaptchaValue] = useState("");

  /* eslint-disable */
  const mailRegx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let userSchema = yup.object({
    name: yup.string().required("Name is required field"),
    email: yup
      .string()
      .matches(mailRegx, "Enter valid e-mail")
      .required("E-mail is required field"),
    company: yup.string(),
    textField: yup
      .string()
      .required("Message is required field")
      .min(4, "Message must contain at least 4 characters"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const clickCaptcha = (captchaValue) => {
    setCaptchaValue(captchaValue);
  };

  const onSubmit = async (e) => {
    if (!captchaValue) {
      return;
    }
    const templateParams = {
      message: `Name: ${e.name};\n E-mail: ${e.email};\n Phone: ${e.phone};\n Company: ${e.company};\n Message: ${e.textField}`,
      to_email: "victoria@1987masters.com",
      "g-recaptcha-response": captchaValue,
    };
    await emailjs
      .send(
        "default_service",
        "template_dlsfi4f",
        templateParams,
        "7HEYTELgZNW22-XPv"
      )
      .then((message) => {
        if (message.status === 200) {
          setAfterSendMessage("YOUR MESSAGE SENT");
        } else {
          setAfterSendMessage("ERROR SENDING MESSAGE");
        }
      })
      .catch(() => setAfterSendMessage("ERROR SENDING MESSAGE"));
    reset({ name: "", email: "", phone: "", company: "", textField: "" });
    await setSendingModal(true);
  };

  const handleCloseModalEsc = (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      setSendingModal(false);
    }
  };

  const onCloseModal = () => {
    setOpen(false);
    setSendingModal(false);
  };

  // close modal with esc button
  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleCloseModalEsc);
    } else {
      document.removeEventListener("keydown", handleCloseModalEsc);
    }
    return () => document.removeEventListener("keydown", handleCloseModalEsc);
  }, [open]);

  // close modal with click out of modal
  useEffect(() => {
    const handleCloseModalOutsideClick = (event) => {
      const noClose = document.querySelector("[data-no-contact-close]");
      if (!noClose.contains(event.target)) {
        onCloseModal();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleCloseModalOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleCloseModalOutsideClick);
    }
    return () =>
      document.removeEventListener("mousedown", handleCloseModalOutsideClick);
  }, [open]);

  return open ? (
    <div className={styles.modalContainer} data-no-contact-close="true">
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
      <h2>GET IN TOUCH</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <label
          style={{
            color: errors.name?.message
              ? "rgba(255, 0, 0, 0.55)"
              : "rgba(242, 239, 234, 1)",
          }}
        >
          NAME
        </label>
        <div className={styles.inputLine}>
          <input type="text" {...register("name")} />
          <svg
            onClick={() => reset({ name: "" })}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 11L1 1M11 1L1 11"
              stroke="#f2efea"
              strokeOpacity="0.55"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <label
          style={{
            color: errors.email?.message
              ? "rgba(255, 0, 0, 0.55)"
              : "rgba(242, 239, 234, 1)",
          }}
        >
          E-MAIL
        </label>
        <div className={styles.inputLine}>
          <input type="text" {...register("email")} />
          <svg
            onClick={() => reset({ email: "" })}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 11L1 1M11 1L1 11"
              stroke="#f2efea"
              strokeOpacity="0.55"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <label>PHONE</label>
        <div className={styles.inputLine}>
          <input type="number" {...register("phone")} />
          <svg
            onClick={() => reset({ phone: "" })}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 11L1 1M11 1L1 11"
              stroke="#f2efea"
              strokeOpacity="0.55"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <label>COMPANY</label>
        <div className={styles.inputLine}>
          <input type="text" {...register("company")} />
          <svg
            onClick={() => reset({ company: "" })}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 11L1 1M11 1L1 11"
              stroke="#f2efea"
              strokeOpacity="0.55"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <label
          style={{
            color: errors.textField?.message
              ? "rgba(255, 0, 0, 0.55)"
              : "rgba(242, 239, 234, 1)",
          }}
        >
          TELL US HOW WE CAN HELP YOU
        </label>
        <textarea type="text" {...register("textField")} />
        <div className={styles.reCaptchaContainer}>
          <ReCAPTCHA
            theme="dark"
            compact
            sitekey={"6LemMeApAAAAAGTyHY3_5oFs2AV87WwJUR5OlGah"}
            onChange={clickCaptcha}
          />
        </div>
        <button>SEND</button>
      </form>
    </div>
  ) : null;
}
