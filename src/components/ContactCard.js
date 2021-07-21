import React from "react";
import ContactPNG from "../assets/contact.png";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <div className="card">
        <h1 className="text-center">Contact Me</h1>
        <div className="card-content text-center">
          <a
            href="mailto:webmaster@pcmtoombs@gmail.com"
            className="ml-4 mt-4 font-weight-bold"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/clarktoombs/"
            className="ml-4 mt-4 font-weight-bold"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ClarkT06"
            className="ml-4 mt-4 font-weight-bold"
          >
            GitHub
          </a>

          <img
            src={ContactPNG}
            alt="profile-photo"
            className="img-thumbnail float-center contactme"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
