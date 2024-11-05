"use client";
import React, { useEffect } from "react";
import ourArrow from "../../assets/images/our-arrow.svg";
import successStart from "../../assets/images/success-star.svg";
import serviceSection from "../../assets/images/services-section-bg.png";
import Image from "next/image";
import CircleType from "circletype"; // Assuming you've installed circletype

const OurSerice = () => {
  useEffect(() => {
    gsap.from(".bottom_to_top", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);
  useEffect(() => {
    // Equivalent to $(document).ready in jQuery
    const rotatedElement = document.getElementById("rotated");

    if (rotatedElement) {
      // Initialize circular text
      const circleType = new CircleType(rotatedElement);
      circleType.radius(80);
    }
  }, []);
  useEffect(() => {
    gsap.to(rotated, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <>
      <div className="our-services">
        <div className="container">
          <div className="services-section">
            <div className="d-flex align-items-center services-section-title">
              <h1 className="position-relative bottom_to_top">
                <div className="upper-line d-flex">
                  <span>Our</span>
                  <div className="arrow-container">
                    <Image
                      src={ourArrow}
                      alt="Arrow"
                      className="sliding-arrow"
                    />
                  </div>
                </div>
                <div className="lower-line">
                  <span>Services.</span>
                </div>
              </h1>
              <div className="circle-container">
                <div className="circular-text">
                  <span id="rotated">
                  Expert software solutions for your success 
                  </span>
                </div>
                <div className="star-image">
                  <Image src={successStart} alt="Star Image" />
                </div>
              </div>
            </div>
            <p className="mb-0">
              Our creative team of branding, web design, web development and
              marketing experts care about your project, almost as much as you
              do!
            </p>
            <div className="services-section-bg">
              <Image src={serviceSection} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSerice;
