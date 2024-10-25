"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import trustedImg from "../../assets/images/trusted.svg";

const Trusted = () => {
  useEffect(() => {
    gsap.to(".hero-heading img", {
      duration: 2.5,
      delay: 1,
      rotate: 360,
      repeat: -1,
      yoyo: true,
    });
    gsap.from(".btn-schedule", {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
      delay: 2,
    });
  }, []);

  // useEffect(() => {
  //   let navbar_tl = gsap.timeline({ paused: true });
  //   navbar_tl.timeScale(3);
  //   navbar_tl.reverse();

  //   const body = document.getElementById("body");
  //   const menuContent = body.querySelectorAll(".menu-content"); // Returns a NodeList

  //   console.log(menuContent); // To check what elements are being selected

  //   // Iterate over each element in the NodeList and set styles
  //   if (menuContent.length > 0) {
  //     menuContent.forEach((menuItem) => {
  //       menuItem.style.zIndex = "auto";
  //       menuItem.style.top = "-373px";
  //       menuItem.style.opacity = "0";
  //     });
  //   } else {
  //     console.error("Element '.menu-content' not found");
  //   }

  //   body.style.overflow = "";

  //   return () => {
  //     if (menuContent.length > 0) {
  //       menuContent.forEach((menuItem) => {
  //         menuItem.style.zIndex = 9;
  //         menuItem.style.top = 0;
  //         menuItem.style.opacity = 1;
  //       });
  //       body.style.overflow = "hidden";
  //     }
  //   };
  // }, []);

  return (
    <>
      <section className="trusted-hero-section">
        <div className="container">
          <h1 className="hero-heading">
            Trusted
            <Image
              width={"100%"}
              height={"100%"}
              src={trustedImg}
              alt="img"
              className="trusted mx-3"
            />
            Partner For
            <br />
            Your Website Develop.
          </h1>
          <p className="hero-description mb-0">
            Your website is the digital face of your brand, and we understand
            the importance of making a strong impression. As your trusted
            partner for website development, we combine technical expertise with
            creative flair to build a digital presence that truly reflects your
            brand identity.
          </p>

          <a href="#" className="btn-schedule">
            <div className="d-flex align-items-center">
              <span className="icon-container">
                <span className="material-symbols-outlined"> call </span>
              </span>
              <p className="mb-0 btn-text">Schedule a Call</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Trusted;
