"use client";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import leftArrowImg from "../assets/images/why-left-arrow.svg";
import rightArrowImg from "../assets/images/why-right-arrow.svg";
import Image from "next/image";

const DiscoverSwiper = ({ firstTxt, secondTxt }) => {
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".card");

    // Initialize Vanilla Tilt on the selected elements
    VanillaTilt.init(tiltElements, {
      glare: true,
      "max-glare": 0.8,
      reverse: true,
    });

    // Cleanup the effect when the component unmounts
    return () => {
      tiltElements.forEach((element) => {
        element.vanillaTilt.destroy();
      });
    };
  }, []);
  return (
    <>
      <div className="tag-contetnt">
        <div className="tagline">
          <h5>services</h5>
        </div>
      </div>
      <div className="discover-text-swiper-button">
        <div className="discover-title">
          <h4>{firstTxt}</h4>
          <h5>{secondTxt}</h5>
        </div>
        <div className="swiper-design">
          <div className="discover-notes">
            <p>
              At Emaad Infotech® we pride ourselves on our extensive
              capabilities and <br />
              expertise in delivering innovative solutions to meet the diverse
              needs of our clients.
            </p>
            <div className="border-bottom-dis"></div>
          </div>
          <div className="slider-btn-discover">
            <div className="swiper-button-prev-discover">
              <Image src={leftArrowImg} alt="" />
            </div>
            <div className="swiper-button-next-discover">
              <Image src={rightArrowImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="slide-container swiper">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              data-tilt-reverse="true"
              className="card swiper-slide card-discover"
            >
              <div className="card-icon">
                <span className="material-symbols-outlined">
                  {" "}
                  architecture{" "}
                </span>
              </div>
              <div className="card-content">
                <h2 className="logo-title">Logo Design</h2>
                <p className="description">
                  Your logo is the cornerstone of your brand identity. Our logo
                  design process begins with in-depth research and brainstorming
                  to conceptualize ideas that encapsulate your brand essence.
                </p>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              data-tilt-reverse="true"
              className="card swiper-slide card-discover"
            >
              <div className="card-icon">
                <span className="material-symbols-outlined"> query_stats </span>
              </div>
              <div className="card-content">
                <h2 className="logo-title">SEO</h2>
                <p className="description">
                  Our team optimizes your website's on-page elements, including
                  meta tags, headings, and content, to improve search engine
                  visibility and relevance
                </p>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              data-tilt-reverse="true"
              className="card swiper-slide card-discover"
            >
              <div className="card-icon">
                <span className="material-symbols-outlined"> code </span>
              </div>
              <div className="card-content">
                <h2 className="logo-title">FIgma to HTML</h2>
                <p className="description">
                  Our Figma to HTML conversion process is streamlined and
                  efficient, delivering high-quality results on time and within
                  budget. Here's how it works:
                </p>
              </div>
            </div>
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              data-tilt-reverse="true"
              className="card swiper-slide card-discover"
            >
              <div className="card-icon">
                <span className="material-symbols-outlined">
                  {" "}
                  architecture{" "}
                </span>
              </div>
              <div className="card-content">
                <h2 className="logo-title">Logo Design</h2>
                <p className="description">
                  The lorem text the section that contains header with having
                  open functionality. Lorem dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoverSwiper;
