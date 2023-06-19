import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <h2 className="footer-header">Our links:</h2>
      <div className="social-links">
        <a href="https://www.facebook.com/" target="_blank">
          <img
            src="https://www.svgrepo.com/show/98800/facebook-social-logo.svg"
            alt="facebook-logo"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img
            src="https://www.svgrepo.com/show/365495/instagram-logo-thin.svg"
            alt="instagram-logo"
          />
        </a>
        <a href="mailto:seriyrayne@gmail.com" target="_blank">
          <img
            src="https://www.svgrepo.com/show/14478/email.svg"
            alt="email-logo"
          />
        </a>
      </div>
    </div>
  );
}
