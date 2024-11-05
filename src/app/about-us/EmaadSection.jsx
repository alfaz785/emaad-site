"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import aboutLeafImg from "../../assets/images/about-leaf.svg";
import { emaadSectionFC } from "../../../commFun";

const EmaadSection = () => {
  useEffect(() => {
    emaadSectionFC();
  }, []);

  return (
    <>
      <div className="emaad-section">
        <div className="container">
          <div className="emaad-title">
            <h5>Why</h5>
            <div className="emaad-title-2">
              <h1>
                Emaad <Image src={aboutLeafImg} alt="leaf" />
              </h1>
            </div>
            <div className="border"></div>
          </div>
        </div>
        <div className="em-move-scroll">
          <div className="content" id="content1">
            <div className="num">
              <h4>/01</h4>
            </div>
            <div className="emaad-information">
              <h2>Embrace Creativity With Our Cutting Edge Graphics</h2>
              <p>
                Unlock endless possibilities with our innovative graphics that
                bring your vision to life. Transform ideas into stunning visuals
                with precision and style, setting you apart from the
                competition.
              </p>
            </div>
          </div>
          <div className="content" id="content2">
            <div className="num">
              <h4>/02</h4>
            </div>
            <div className="emaad-information">
              <h2>Choose Us For Designs That Captivate And Inspire</h2>
              <p>
                Experience designs that not only capture attention but leave a
                lasting impression. Let us bring your concepts to life with
                creativity that speaks to your audience and elevates your brand.
              </p>
            </div>
          </div>
          <div className="content" id="content3">
            <div className="num">
              <h4>/03</h4>
            </div>
            <div className="emaad-information">
              <h2>Elevate Your Vision With Our Studio's Artistic Flair</h2>
              <p>
                Our studio blends artistic expertise with unique creative
                perspectives to bring your ideas to new heights. Trust us to
                transform your vision into striking, unforgettable visuals that
                resonate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmaadSection;
