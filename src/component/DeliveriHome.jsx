"use client";

import gsap from "gsap";
import React, { useEffect } from "react";
import mobileAppImg from "../assets/images/mobile-app.svg";
import appleImg from "../assets/images/apple.svg";
import webImg from "../assets/images/web.svg";
import productImg from "../assets/images/Product.svg";
import digitalImg from "../assets/images/Digital.svg";
import leafImg from "../assets/images/leaf.svg";
import Image from "next/image";
import EngineImg from "../assets/images/Search-Engine.svg";
import SocialImg from "../assets/images/Social-Media.svg";
import ppcImg from "../assets/images/PPC.svg";
import projectImg from "../assets/images/Project-Discovery.svg";
import digitalpImg from "../assets/images/Digital-Product.svg";
import mvpDev from "../assets/images/MVP-Development.svg";
import webDevelop from "../assets/images/Web-Develop.svg";
import pwaDevelop from "../assets/images/PWA-Development.svg";
import chatBot from "../assets/images/ChatBot-Development.svg";




import { ScrollTrigger } from "gsap/all";

const DeliveriHome = () => {
  useEffect(() => {
    const deliveringSection = document.querySelector(".innovation");

    ScrollTrigger.matchMedia({
      "(min-width: 1500px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: deliveringSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
          },
        });

        tl.to(".text", { top: "21px" }, "a")
          .to("#card-one", { top: "35%" }, "a")
          .to("#card-two", { top: "130%" }, "a")
          .to("#card-two", { top: "38%" }, "b")
          .to("#card-one", { width: "65%" }, "b")
          .to("#card-three", { top: "130%" }, "b")
          .to("#card-three", { top: "41%" }, "c")
          .to("#card-two", { width: "70%" }, "c")
          .to("#card-four", { top: "130%" }, "c")
          .to("#card-four", { top: "45%" }, "d")
          .to("#card-three", { width: "75%" }, "d")
          .to("#card-four", { width: "80%" }, "e");
      },

      // Between 1200px and 1500px
      "(min-width: 1200px) and (max-width: 1499px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: deliveringSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
          },
        });

        tl.to(".text", { top: "21px" }, "a")
          .to("#card-one", { top: "40%" }, "a")
          .to("#card-two", { top: "120%" }, "a")
          .to("#card-two", { top: "45%" }, "b")
          .to("#card-one", { width: "60%" }, "b")
          .to("#card-three", { top: "125%" }, "b")
          .to("#card-three", { top: "50%" }, "c")
          .to("#card-two", { width: "65%" }, "c")
          .to("#card-four", { top: "125%" }, "c")
          .to("#card-four", { top: "53%" }, "d")
          .to("#card-three", { width: "70%" }, "d")
          .to("#card-four", { width: "75%" }, "e");
      },

      "(min-width: 768px) and (max-width: 972px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: deliveringSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
          },
        });

        tl.to(".text", { top: "2%" }, "a")
          .to("#card-one", { top: "41%" }, "a")
          .to("#card-two", { top: "140%" }, "a")
          .to("#card-two", { top: "43%" }, "b")
          .to("#card-one", { width: "55%" }, "b")
          .to("#card-three", { top: "140%" }, "b")
          .to("#card-three", { top: "46%" }, "c")
          .to("#card-two", { width: "60%" }, "c")
          .to("#card-four", { top: "140%" }, "c")
          .to("#card-four", { top: "48%" }, "d")
          .to("#card-three", { width: "65%" }, "d")
          .to("#card-four", { width: "70%" }, "e");
      },
      "(min-width: 576px) and (max-width: 768px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: deliveringSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
          },
        });

        tl.to(".text", { top: "2%" }, "a")
          .to("#card-one", { top: "41%" }, "a")
          .to("#card-two", { top: "140%" }, "a")
          .to("#card-two", { top: "43%" }, "b")
          .to("#card-one", { width: "55%" }, "b")
          .to("#card-three", { top: "140%" }, "b")
          .to("#card-three", { top: "46%" }, "c")
          .to("#card-two", { width: "60%" }, "c")
          .to("#card-four", { top: "140%" }, "c")
          .to("#card-four", { top: "48%" }, "d")
          .to("#card-three", { width: "65%" }, "d")
          .to("#card-four", { width: "70%" }, "e");
      },
      "(max-width: 576px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: deliveringSection,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
          },
        });

        tl.to(".text", { top: "2%" }, "a")
          .to("#card-one", { top: "41%" }, "a")
          .to("#card-two", { top: "140%" }, "a")
          .to("#card-two", { top: "44%" }, "b")
          .to("#card-one", { width: "55%" }, "b")
          .to("#card-three", { top: "140%" }, "b")
          .to("#card-three", { top: "45%" }, "c")
          .to("#card-two", { width: "60%" }, "c")
          .to("#card-four", { top: "140%" }, "c")
          .to("#card-four", { top: "47%" }, "d")
          .to("#card-three", { width: "65%" }, "d")
          .to("#card-four", { width: "70%" }, "e");
      },
    });
  }, []);
  return (
    <>
      <section>
        <div id="delivering-main" className="innovation">
          <div className="text">
            <h2>
              Delivering Innovation That&nbsp;
              <span className="position-relative">
                Thrives
                <div className="text-img-leaf">
                  <Image src={leafImg} alt="" />
                </div>
              </span>
              <br />
              Your Business
            </h2>
          </div>
          {/* <!-- card-one --> */}
          <div className="cards" id="card-one">
            <div className="title-icon">
              <div className="d-flex align-items-center gap-3">
                <Image src={mobileAppImg} alt="" />
                <h6 className="mb-0">Mobile App Development</h6>
              </div>

              <h5 className="mb-0">01</h5>
            </div>
            <p className="mb-0 delivering-main-card">
              Expand your market reach and improve your user experience by
              developing mobile apps for Android, iOS & Windows.
            </p>
            <hr />
            <div className="app-development-group d-flex gap-5">
              <div className="app-development">
                <div className="app-development-back">
                  <span className="material-symbols-outlined">
                    {" "}
                    phone_iphone{" "}
                  </span>
                </div>
                <p className="mb-0">Android App Development</p>
              </div>
              <div className="app-development">
                <div className="app-development-back">
                  <Image src={appleImg} alt="" />
                </div>
                <p className="mb-0">iOS App Development</p>
              </div>
              <div className="app-development">
                <div className="app-development-back">
                  <span className="material-symbols-outlined">
                    {" "}
                    developer_mode{" "}
                  </span>
                </div>
                <p className="mb-0">Cross-Platform App Development</p>
              </div>
            </div>
          </div>
          {/* <!-- card-two --> */}
          <div className="cards" id="card-two">
            <div className="title-icon">
              <div className="d-flex align-items-center gap-3">
                <Image src={webImg} alt="" />
                <h6 className="mb-0">Web Development</h6>
              </div>

              <h5 className="mb-0">02</h5>
            </div>
            <p className="mb-0 delivering-main-card">
              Digitally transform your business and build a strong online
              presence by developing robust, scalable, light-weight and modern
              web applications.
            </p>
            <hr />
            <div className="app-development-group d-flex gap-5">
              <div className="app-development">
                <div className="app-development-back">
                <Image src={webDevelop} alt="" />
                </div>
                <p className="mb-0">Web Development</p>
              </div>
              <div className="app-development">
                <div className="app-development-back">
                  <Image src={pwaDevelop} alt="" />
                </div>
                <p className="mb-0">PWA Development</p>
              </div>
              <div className="app-development">
                <div className="app-development-back">
                <Image src={chatBot} alt="" />
                </div>
                <p className="mb-0">ChatBot Development</p>
              </div>
            </div>
          </div>
          {/* <!-- card-Three --> */}
          <div className="cards" id="card-three">
            <div className="title-icon">
              <div className="d-flex align-items-center gap-3">
                <Image src={productImg} alt="" />
                <h6 className="mb-0">Product Design & Strategy</h6>
              </div>

              <h5 className="mb-0">03</h5>
            </div>
            <p className="mb-0 delivering-main-card">
              We follow end-to-end agile product development approach to deliver
              robust & scalable digital products.
            </p>
            <hr />
            <div className="app-development-group d-flex gap-5">
              <div className="app-development">
                <div className="app-development-back">
                  <Image src={projectImg} alt="" />
                </div>
                <p className="mb-0">Project Discovery & Design Sprint</p>
              </div>
              <div className="app-development">
                <div className="app-development-back">
                  <Image src={digitalpImg} alt="" />
                </div>
                <p className="mb-0">Digital Product Development</p>
              </div>
              <div className="app-development">
                <div className="app-development-back">
                  <Image src={mvpDev} alt="" />
                </div>
                <p className="mb-0">MVP Development</p>
              </div>
            </div>
          </div>
          {/* <!-- card-four --> */}
          <div className="cards" id="card-four">
            <div className="title-icon">
              <div className="d-flex align-items-center gap-3">
                <Image src={digitalImg} alt="" />
                <h6 className="mb-0">Digital Marketing</h6>
              </div>

              <h5 className="mb-0">04</h5>
            </div>
            <p className="mb-0 delivering-main-card">
              In today's digital age, the key to business success lies in
              effective digital marketing strategies.
            </p>
            <hr />
            <div className="app-development-group d-flex gap-5">
              <div className="app-development">
                <div className="app-development-back">
                  <Image src={EngineImg} alt="" />
                </div>
                <p className="mb-0">Search Engine Optimization</p>
              </div>
              <div className="app-development">
                <div className="app-development-back">
                  <Image src={SocialImg} alt="" />
                </div>
                <p className="mb-0">Social Media Marketing</p>
              </div>
              <div className="app-development">
                <div className="app-development-back">
                  <Image src={ppcImg} alt="" />
                </div>
                <p className="mb-0">Pay-Per-Click (PPC) Advertising</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliveriHome;
