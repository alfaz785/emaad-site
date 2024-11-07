"use client";
import React, { useEffect } from "react";
import awsImg from "../assets/images/aws.png";
import marqueImg from "../assets/images/marque svg.svg";
import paypalImg from "../assets/images/paypal.png";
import googelcoloudImg from "../assets/images/googelcoloud.png";
import herokuImg from "../assets/images/heroku.png";
import stripImg from "../assets/images/stripe.png";
import sendgridImg from "../assets/images/sendgrid.png";
import segmentImg from "../assets/images/segment.png";
// import gauthImg from "../assets/images/gauth.png";
import digitaloceanImg from "../assets/images/digitalocean.png";


import firebaseImg from "../assets/images/firebase.png";
import mapboxImg from "../assets/images/mapbox.png";

import Image from "next/image";
import { gsap } from "gsap";

const 
SlideSection = () => {
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
            <Image src={awsImg} alt="digital" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
          <div className="marque">
            <Image src={herokuImg} alt="vortex" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
          <div className="marque">
            <Image src={googelcoloudImg} alt="travel" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
         
          <div className="marque">
            <Image src={segmentImg} alt="fuzion" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
          
          <div className="marque">
            <Image src={stripImg} alt="vortex" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
          <div className="marque">
            <Image src={paypalImg} alt="vortex" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
          <div className="marque">
            <Image src={sendgridImg} alt="vortex" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
          <div className="marque">
            <Image src={firebaseImg} alt="vortex" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
          <div className="marque">
            <Image src={mapboxImg} alt="vortex" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
          <div className="marque">
            <Image src={digitaloceanImg} alt="vortex" />
            {/* <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div> */}
          </div>
        

        </div>
      </div>
    </>
  );
};

export default SlideSection;
