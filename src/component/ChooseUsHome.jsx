"use client";

import React, { useEffect } from "react";
import chooseImg from "../assets/images/choose.png";
import cuttingEdgeImg from "../assets/images/cutting-edge.png";
import dedicatedImg from "../assets/images/dedicated team.png";
import clientStisfaction from "../assets/images/client-satisfaction.png";
import moneyImg from "../assets/images/money.png";
import Image from "next/image";
import { wcButtonFC } from "../../commFun";
import Link from "next/link";
import { gsap } from "gsap";

const ChooseUsHome = () => {
  useEffect(() => {
    const paragraph = document.querySelector("p.most");

    if (paragraph) {
      const words = paragraph?.innerHTML
        .split(" ")
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      paragraph.innerHTML = words;

      const spans = paragraph.querySelectorAll("span");

      const tl = gsap.timeline({ paused: true });

      tl.from(spans, {
        duration: 0.5, // Reduced duration for faster animation
        opacity: 0,
        y: 10, // Reduced y distance for a subtler effect
        stagger: 0.05, // Reduced stagger time for faster sequencing
        ease: "power1.out",
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tl.play();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      const section = document.querySelector("p.most");
      observer?.observe(section);
    }
  }, []);
  useEffect(() => {
    wcButtonFC();
  }, []);
  return (
    <>
      <div className="Why-choose-us-main mt_100">
        <div className="container-fluid p-0">
          <div className="Why-choose-us-main-bg">
            <div className="row g-0">
              <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-start why-choose-text-section">
                <h3>
                  Why.
                  <span className="bg-image-container">
                    Choose.
                    <span className="choose-bg">
                      <Image src={chooseImg} alt="img" />
                    </span>
                  </span>
                  Us.
                </h3>
                <p className="mb-0 most">
                  We are one of the fastest growing and most reputed software
                  development company in India.
                </p>

                <div className="btn_wrapper custom_display_none">
                  <Link
                    href="/get-in-touch"
                    className="wc-btn-primary btn btn-outline-light mt_40"
                  >
                    Quick <br />
                    Inquiry
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                    <span className="circle"></span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-md-2"></div>
              <div className="col-lg-6 col-md-12 d-flex flex-wrap align-items-center feature-section h-100">
                <div className="col-12 col-sm-6">
                  <div className="why-choose-box position-relative">
                    <div className="overlay"></div>
                    <Image src={cuttingEdgeImg} alt="transport-card" />
                    <div className="why-choose-box_text">
                      <h5>Cutting-Edge Technology</h5>
                      <div className="circle">
                        <span className="material-symbols-outlined">
                          {" "}
                          call_made{" "}
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Cutting-Edge Technology</h4>
                      <p className="mb-0">
                        Leverage the latest advancements in technology to stay
                        ahead. Our services integrate the most innovative tools
                        and systems, ensuring fast, secure, and efficient
                        communication solutions tailored to meet modern demands.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="why-choose-box position-relative">
                    <div className="overlay"></div>
                    <Image src={dedicatedImg} alt="transport-card" />
                    <div className="why-choose-box_text">
                      <h5>Dedicated Team</h5>
                      <div className="circle">
                        <span className="material-symbols-outlined">
                          {" "}
                          call_made{" "}
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Dedicated Team</h4>
                      <p className="mb-0">
                        Our experienced and committed team is here to support
                        your goals at every step. With a focus on excellence and
                        customer satisfaction, we work closely with you to
                        deliver tailored solutions that drive success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="why-choose-box position-relative">
                    <div className="overlay"></div>
                    <Image src={clientStisfaction} alt="transport-card" />
                    <div className="why-choose-box_text">
                      <h5>Client Satisfaction</h5>
                      <div className="circle">
                        <span className="material-symbols-outlined">
                          {" "}
                          call_made{" "}
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Client Satisfaction</h4>
                      <p className="mb-0">
                        We prioritize our clients' success, consistently
                        delivering results that exceed expectations. Our
                        commitment to quality, responsiveness, and personalized
                        support ensures a positive experience and lasting
                        partnerships.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="why-choose-box position-relative">
                    <div className="overlay"></div>
                    <Image src={moneyImg} alt="transport-card" />
                    <div className="why-choose-box_text">
                      <h5>Value For Money</h5>
                      <div className="circle">
                        <span className="material-symbols-outlined">
                          {" "}
                          call_made{" "}
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Value For Money</h4>
                      <p className="mb-0">
                        We offer competitive pricing without compromising on
                        quality. Our goal is to deliver maximum value for your
                        investment, helping you achieve your business objectives
                        efficiently and cost-effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_wrapper custom_display_block d-none">
                <Link
                  href="/get-in-touch"
                  className="wc-btn-primary btn btn-outline-light mt_40"
                >
                  Quick <br />
                  Inquiry
                  <span className="material-symbols-outlined">
                    {" "}
                    arrow_right_alt{" "}
                  </span>
                  <span className="circle"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUsHome;
