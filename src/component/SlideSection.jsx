"use client";
import React, { useEffect } from "react";
import digitalImg from "../assets/images/digital.png";
import marqueImg from "../assets/images/marque svg.svg";
import vortexImg from "../assets/images/vortex.png";
import travelImg from "../assets/images/travel.png";
import mediaImg from "../assets/images/media.png";
import fuzionImg from "../assets/images/fuzion.png";
import Image from "next/image";
import { gsap } from "gsap";

const SlideSection = () => {
  useEffect(() => {
    marqueAnimation();
  }, []);
  function marqueAnimation() {
    window.addEventListener("wheel", function (dets) {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          transform: "translateX(-200%)",
          duration: 4,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".marque .whell ", {
          rotate: 0,
        });
      } else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          duration: 4,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".marque .whell ", {
          rotate: 180,
        });
      }
    });
  }
  return (
    <>
      <div className="scrollpage2">
        <div className="move">
          <div className="marque">
            <Image src={digitalImg} alt="digital" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={vortexImg} alt="vortex" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={travelImg} alt="travel" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={fuzionImg} alt="fuzion" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={mediaImg} alt="media" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={digitalImg} alt="digital" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={vortexImg} alt="vortex" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideSection;
