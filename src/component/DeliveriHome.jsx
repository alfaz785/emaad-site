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

const DeliveriHome = () => {
    useEffect(() => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#delivering-main",
          start: "0% 10%",
          end: "90% 50%",
          scrub: 2,
          pin: true,
        },
      });

      tl.to(
        ".text",
        {
          top: "-5%",
        },
        "a",
      )
        .to(
          "#card-one",
          {
            top: "30%",
          },
          "a",
        )
        .to(
          "#card-two",
          {
            top: "130%",
          },
          "a",
        )
        .to(
          "#card-two",
          {
            top: "32%",
          },
          "b",
        )
        .to(
          "#card-one",
          {
            width: "65%",
          },
          "b",
        )
        .to(
          "#card-three",
          {
            top: "130%",
          },
          "b",
        )
        .to(
          "#card-three",
          {
            top: "34%",
          },
          "c",
        )
        .to(
          "#card-two",
          {
            width: "70%",
          },
          "c",
        )
        .to(
          "#card-four",
          {
            top: "130%",
          },
          "c",
        )
        .to(
          "#card-four",
          {
            top: "38%",
          },
          "d",
        )
        .to(
          "#card-three",
          {
            width: "75%",
          },
          "d",
        )
        .to(
          "#card-four",
          {
            width: "80%",
          },
          "e",
        );
    }, []);
  return (
    <>
      <div id="delivering-main" className="innovation">
        <div className="text">
          <h2>
            Delivering Innovation that
            <span className="position-relative">
              thrives
              <div className="text-img-leaf">
                <Image src={leafImg} alt="" />
              </div>
            </span>
            <br />
            your business
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
            developing mobile apps for Android, iOS, & windows.
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
        {/* <!-- card-Tow --> */}
        <div className="cards" id="card-two">
          <div className="title-icon">
            <div className="d-flex align-items-center gap-3">
              <Image src={webImg} alt="" />
              <h6 className="mb-0">Web Development</h6>
            </div>

            <h5 className="mb-0">02</h5>
          </div>
          <p className="mb-0 delivering-main-card">
            Digitally transform your business and build a strong online presence
            by developing robust, scalable, light-weight and modern web
            applications.
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
              <p className="mb-0">Web Development</p>
            </div>
            <div className="app-development">
              <div className="app-development-back">
                <Image src={appleImg} alt="" />
              </div>
              <p className="mb-0">PWA Development</p>
            </div>
            <div className="app-development">
              <div className="app-development-back">
                <span className="material-symbols-outlined">
                  {" "}
                  developer_mode{" "}
                </span>
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
            We follow end-to-end agile product development approach to Deliver
            robust & scalable Digital Products.
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
              <p className="mb-0">Project Discovery & Design Sprit</p>
            </div>
            <div className="app-development">
              <div className="app-development-back">
                <Image src={appleImg} alt="" />
              </div>
              <p className="mb-0">Digital Product Development</p>
            </div>
            <div className="app-development">
              <div className="app-development-back">
                <span className="material-symbols-outlined">
                  {" "}
                  developer_mode{" "}
                </span>
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
            effective digital marketing strategies
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
              <p className="mb-0">Search Engine Optimization</p>
            </div>
            <div className="app-development">
              <div className="app-development-back">
                <Image src={appleImg} alt="" />
              </div>
              <p className="mb-0">Social Media Marketing</p>
            </div>
            <div className="app-development">
              <div className="app-development-back">
                <span className="material-symbols-outlined">
                  {" "}
                  developer_mode{" "}
                </span>
              </div>
              <p className="mb-0">Pay-Per-Click (PPC) Advertising</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveriHome;
