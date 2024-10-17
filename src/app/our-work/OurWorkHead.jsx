"use client";
import React, { useEffect } from "react";
import productImg from "../../assets/images/product.png";
import Image from "next/image";
import { animateLetters } from "../../../commFun";

const OurWorkHead = () => {
  useEffect(() => {
    const textElement = document.querySelector(".our-work-pere");

    const tl = gsap.timeline({ paused: true });

    tl.to(textElement, {
      duration: 1.5,
      opacity: 1,
      y: -20,
      ease: "elastic(1.2, 0.5)",
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.play();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(textElement);
  }, []);
  //   useEffect(() => {
  //     animateLetters();
  //   }, []);
  return (
    <>
      <div className="our-work-section">
        <div className="container">
          <div className="our-section-box">
            <div className="our-work-btn">
              <h4>Our Product</h4>
            </div>
          </div>
          {/* <!-- our-work-titel --> */}
          <div className="ideas-wait-text mt_40 sec-title-2 our-work-titel">
            <h3 className="mb-0 text-wrapper text-center" id="text">
              {"Real Estate software solution".split("").map((char, index) => (
                <span key={index} className="letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h3>
          </div>
          {/* <!-- /.===  our-work-end === --> */}

          <div className="our-work-pere">
            <p>
              Our Real Estate Software Solution is designed to streamline
              property management, enhance client interactions, and boost sales
              for real estate professionals. With an intuitive interface and
              powerful features, our solution helps you manage listings, track
              leads, and close deals more efficiently.
            </p>
          </div>

          {/* <!-- product-demo section start --> */}

          <div className="our-work-product-demo">
            <div className="our-product-card">
              <div className="our-card-titel">
                <h4>Explore our demo product below.</h4>
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="explore-demo-image">
                    <Image src={productImg} alt="" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="explour-our-demo-cards">
                    <div className="card-container">
                      <a
                        href="https://emaad-infotech.com/product/online-shopping/"
                        className="card dark"
                        onclick="openLink('frontend');"
                      >
                        <div className="card-product">
                          <span className="number">01</span>
                        </div>
                        <div className="card-title">
                          <h2>Front End</h2>
                        </div>
                        <div className="card-icon">
                          <span className="material-symbols-outlined">
                            call_made
                          </span>
                        </div>
                      </a>
                      <a
                        href="https://emaad-infotech.com/product/online-shopping/back-office"
                        className="card dark"
                        onclick="openLink('frontend');"
                      >
                        <div className="card-product">
                          <span className="number">02</span>
                        </div>
                        <div className="card-title">
                          <h2>Admin Panel</h2>
                        </div>
                        <div className="card-icon">
                          <span className="material-symbols-outlined">
                            call_made
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorkHead;
