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
  useEffect(() => {
    const titles = document.querySelectorAll(".sec-title-2");
    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const letters = entry.target.querySelectorAll(".letter");
          gsap.set(letters, { display: "inline-block" });
          gsap.from(letters, {
            duration: 1,
            opacity: 0,
            scale: 0.3,
            rotation: 90,
            ease: "back.out(1.7)",
            stagger: {
              amount: 1,
            },
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);
    titles.forEach((title) => observer?.observe(title));
  }, []);
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
              {"Real Estate software solution"
                .split("")
                .map((letter, index) => (
                  <span key={index} className="letter">
                    {letter === " " ? "\u00A0" : letter}{" "}
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
                <div className="col-lg-7 order-lg-1 order-2 ">
                  <div className="explour-our-demo-cards">
                    <div className="card-container">
                      <a
                        href="https://emaad-infotech.com/product/online-shopping/"
                        className="card dark"
                        // onClick="openLink('frontend');"
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
                        // onClick={openLink('frontend')}
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
                <div className="col-lg-5 order-lg-2 order-1">
                  <div className="explore-demo-image">
                    <Image src={productImg} alt="img" />
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
