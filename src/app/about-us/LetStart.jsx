"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import marketImg from "../../assets/images/marker.svg";
import moonImg from "../../assets/images/moon.png";
import { plainTextEffect } from "../../../commFun";

const LetStart = () => {
  // * LETS START SECTIONS ----------------
  useEffect(() => {
    const container = document.querySelector(".typing-container .typing");
    const text = "Let’s — Get To Know Each ";
    plainTextEffect(container, text);
    gsap.to(".star-text img", {
      duration: 2.5,
      delay: 1,
      rotate: 360,
      repeat: -1,
      yoyo: true,
    });
    gsap.from(".talk-button", {
      opacity: 0,
      duration: 2,
      delay: 2,
      x: -100, // Start position from the left
      ease: "power3.out", // Smooth easing for the animation
    });

    gsap.from(".got-to-info p", {
      opacity: 0,
      y: 30,
      duration: 2.5,
      delay: 1,
    });
  }, []);

  return (
    <>
      <section className="know-Each">
        <div className="container">
          <div className="lets-get-to-title">
            <div className="lets-go-text">
              <div className="moon-img">
                <div className="bg-img-round">
                  <div className="moon-image">
                    <Image src={moonImg} alt="moon.png" />
                  </div>
                </div>
              </div>
              <div className="typing-container">
                <span className="typing"></span>
              </div>
            </div>
            <div className="talk-button">
              <div className="star-text">
                <Image src={marketImg} alt="marker.svg" />
                <h4>ther</h4>
              </div>
              <div className="lets-button">
                <button className="lets-talk-button">
                  <h2>Let’s Talk</h2>
                  <span className="material-symbols-outlined"> call_made </span>
                </button>
              </div>
            </div>
            <div className="got-to-info">
              <p>
                EMAAD INFOTECH® is
                <span>a Software Development Company in INDIA,</span> got birth
                in the year 2014 intending to provide affordable world className
                web solutions which will aid our clientele to grow higher
                persistently. Being Complete IT solution company, EMAAD INFOTECH
                offers 360 Degree business solution emphasizing on the client's
                requirement that too without premium price-tag. Our Online
                Marketing Solutions help to publicize your business all around
                the globe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetStart;
