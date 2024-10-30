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
      <div className="emmad-section">
        <div className="container">
          <div className="emmad-title">
            <h5>Why</h5>
            <div className="emmad-title-2">
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
                deger tortor quis libero rhoncus efficitur vel sit amet tellus
                dapibus est non tortor tristique eleifend metus luctus velit
                justo
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
                there are many variations of passages of lorem ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
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
                deger tortor quis libero rhoncus efficitur vel sit amet tellus
                dapibus est non tortor tristique eleifend metus luctus velit
                justo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmaadSection;
