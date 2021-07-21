import React from "react";
import Profile from "../assets/profile.jpg";

function AboutCard() {
  return (
    <div className="about-container">
      <h5>About Me</h5>

      <img src={Profile} alt="profile-photo" className="profile"></img>
      <div>
        <div className="mt-3">
          <p>
            I am a Software Developer with 5 years of SaaS sales experience with
            multiple startups in the Seattle area. I've worked with companies
            ranging from sub 50 employees to Enterprise level engagements
            through my career. My primary focus now is to combine my new
            software skills with prior business acumen to pursue Business
            Analytics and Strategy / Sales Engineering and Software Development.{" "}
          </p>

          <p>
            Feel free to reach out by email:
            <a href="mailto:pcmtoombs@gmail.com" target="_blank">
              {" "}
              pcmtoombs@gmail.com,{" "}
            </a>{" "}
            through<a href="https://github.com/ClarkT06"> GitHub</a>, or through{" "}
            <a href="https://www.linkedin.com/in/clarktoombs/">LinkedIn.</a>
          </p>
        </div>
      </div>
   
    </div>
  );
}

export default AboutCard;
