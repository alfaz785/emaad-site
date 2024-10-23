"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { setupAnimations } from "../../commFun";

const ProcessImg = ({ mainImg }) => {
  useEffect(() => {
    setupAnimations();
  }, []);

  return (
    <>
      <section className="reveal-section my-5">
        <div className="logo"></div>
        <div className="header">
          <div className="letters">
            <div className="">p</div>
            <div className="">r</div>
            <div className="">o</div>
            <div className="">c</div>
          </div>
          <div className="letters">
            <div className="">e</div>
            <div className="">s</div>
            <div className="">s</div>
          </div>
        </div>
        <div className="website-content">
          <div className="img-holder">
            <Image width={"100%"} height={"100%"} src={mainImg} alt="img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessImg;
