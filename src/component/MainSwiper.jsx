import Image from "next/image";
import React from "react";
import personCelebrate from "../assets/images/person_celebrate.svg";
import aboutImg from "../assets/images/host.svg";

const MainSwiper = ({ icon, title, description, isAbout }) => {
  return (
    <>
      <div
        data-tilt
        data-tilt-glare
        data-tilt-max-glare="0.8"
        data-tilt-reverse="true"
        className="card swiper-slide card-discover"
      >
        <div className="card-icon">
          {icon === "img" ? (
            <Image src={isAbout ? aboutImg : personCelebrate} alt="" />
          ) : (
            <span className="material-symbols-outlined">{icon}</span>
          )}
        </div>
        <div className="card-content">
          <h2 className="logo-title">{title}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default MainSwiper;
