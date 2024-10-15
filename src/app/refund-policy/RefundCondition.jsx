"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

const RefundCondition = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animating the section title
    gsap.from(".hosting-solutions h3.custom-font", {
      scrollTrigger: {
        trigger: ".hosting-solutions",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    // Animating all content boxes simultaneously
    gsap.from(".main-box", {
      scrollTrigger: {
        trigger: ".hosting-solutions",
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".amendments-section p", {
      scrollTrigger: {
        trigger: ".amendments-title",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50, // Slide up
      duration: 1.2,
      stagger: 0.3, // Stagger animation for each paragraph
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div className="hosting-solutions">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 border-right">
              <div className="d-flex align-items-center">
                <h3 className="custom-font">Refund Conditions</h3>
                <span className="material-symbols-outlined"> south_east </span>
              </div>
            </div>
            <div className="col-lg-9 custom-padding">
              <div className="bottom-row">
                <div className="row">
                  <div className="col-lg-6 mb_37">
                    <div className="main-box">
                      <h3 className="card-title mb-0">Shared Hosting</h3>
                      <p className="card-text mb-0">
                        Perfect for small to medium-sized websites, offering
                        cost-effective solutions with reliable performance.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mb_37">
                    <div className="main-box border-left">
                      <h3 className="card-title mb-0">VPS Hosting</h3>
                      <p className="card-text mb-0">
                        Enjoy enhanced control and performance with our Virtual
                        Private Server options, ideal for growing websites
                        needing dedicated resources.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mt_37 bt">
                  <div className="main-box">
                    <h3 className="card-title mb-0">Dedicated Hosting</h3>
                    <p className="card-text mb-0">
                      Achieve maximum performance and security with dedicated
                      server resources, providing top-tier support for
                      high-traffic websites.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mt_37 bt">
                  <div className="main-box border-left">
                    <h3 className="card-title mb-0">Cloud Hosting</h3>
                    <p className="card-text mb-0">
                      Benefit from scalable and flexible hosting solutions that
                      grow with your business, ensuring robust performance and
                      reliability even during traffic spikes.
                    </p>
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

export default RefundCondition;
