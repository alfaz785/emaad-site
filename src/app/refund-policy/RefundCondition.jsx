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
                      <h3 className="card-title mb-0">
                        Eligibility For Refund
                      </h3>
                      <p className="card-text mb-0">
                        Refunds are available within 30 days of purchase. To be
                        eligible, you must provide proof of purchase and a valid
                        reason for the request.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 mb_37">
                    <div className="main-box border-left">
                      <h3 className="card-title mb-0">
                        Non-Refundable Services
                      </h3>
                      <p className="card-text mb-0">
                        Certain services, such as custom software development
                        and consultation fees, are non-refundable once work has
                        commenced.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mt_37 bt">
                  <div className="main-box">
                    <h3 className="card-title mb-0">Partial Refunds</h3>
                    <p className="card-text mb-0">
                      Partial refunds may be granted if the service provided
                      does not meet the agreed-upon criteria, but a portion of
                      the work has been completed.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mt_37 bt">
                  <div className="main-box border-left">
                    <h3 className="card-title mb-0">Cancellation Fees</h3>
                    <p className="card-text mb-0">
                      If a project is canceled by the client after work has
                      started but before completion, a cancellation fee may
                      apply. This fee will be determined based on the amount of
                      work completed up to the point of cancellation.
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
