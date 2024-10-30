"use client";
import React, { useEffect } from "react";

const DigitalMarket = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".digital-des");

    sections.forEach((section) => {
      const paragraph = section.querySelector("p");
      if (paragraph) {
        const words = paragraph.innerHTML
          .split(" ")
          .map((word) => `<span>${word}</span>`)
          .join(" ");
        paragraph.innerHTML = words;
        const spans = paragraph.querySelectorAll("span");
        const tl = gsap.timeline({ paused: true });
        tl.from(spans, {
          duration: 1,
          opacity: 0,
          y: 20,
          stagger: 0.1,
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
          { threshold: 0.1 },
        );

        observer.observe(section);
      }
    });
  }, []);
  useEffect(() => {
    const paragraph = document?.querySelector(".why-choose-digital-text p");
    if (paragraph) {
      const words = paragraph.innerHTML
        .split(" ")
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      paragraph.innerHTML = words;
      const spans = paragraph.querySelectorAll("span");
      const tl = gsap.timeline({ paused: true });
      tl.from(spans, {
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.1,
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
        { threshold: 0.1 },
      );
      const section = document.querySelector(".why-choose-digital-text");
      if (section) {
        observer.observe(section);
      }
    }
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create the animation for the card
    gsap.from(".digital-marketing-card", {
      scrollTrigger: {
        trigger: ".digital-marketing-card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });
  }, []);
  return (
    <>
      <div className="why-choose-marketing-section">
        <div className="container">
          <div className="why-choose-digital-title">
            <h1>
              Why Choose Our Digital <span>Marketing</span> Services?
            </h1>
          </div>
          <div className="why-choose-digital-text mt_30">
            <p>
              Our expert team delivers tailored strategies to boost your online
              presence and drive results. We focus on maximizing ROI and
              ensuring lasting impact. Partner with us for digital marketing
              excellence and growth.
            </p>
          </div>
          <div className="marketing-card-design">
            <div className="row">
              <div className="col-lg-4 col-md-6 mt_50">
                <div className="digital-marketing-card">
                  <div className="digigtal-marketing-card-desc">
                    <div className="digital-card-no">
                      <h4>1</h4>
                    </div>
                    <div className="digital-card-title">
                      <h4>Industry Expertise</h4>
                    </div>
                  </div>
                  <div className="digital-des">
                    <p>
                      Our team has extensive experience working with software
                      development companies, understanding their unique
                      challenges and opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt_50">
                <div className="digital-marketing-card">
                  <div className="digigtal-marketing-card-desc">
                    <div className="digital-card-no">
                      <h4>2</h4>
                    </div>
                    <div className="digital-card-title">
                      <h4>Customized Solutions</h4>
                    </div>
                  </div>
                  <div className="digital-des">
                    <p>
                      We provide tailored strategies that align with your
                      business goals and target audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt_50">
                <div className="digital-marketing-card">
                  <div className="digigtal-marketing-card-desc">
                    <div className="digital-card-no">
                      <h4>3</h4>
                    </div>
                    <div className="digital-card-title">
                      <h4>Data-Driven Approach</h4>
                    </div>
                  </div>
                  <div className="digital-des">
                    <p>
                      We use data and analytics to drive our decision-making
                      process, ensuring optimal results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt_50">
                <div className="digital-marketing-card">
                  <div className="digigtal-marketing-card-desc">
                    <div className="digital-card-no">
                      <h4>4</h4>
                    </div>
                    <div className="digital-card-title">
                      <h4>Continuous Improvement</h4>
                    </div>
                  </div>
                  <div className="digital-des">
                    <p>
                      We continually monitor and refine our strategies to stay
                      ahead of industry trends and deliver sustained growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt_50">
                <div className="digital-marketing-card">
                  <div className="digigtal-marketing-card-desc">
                    <div className="digital-card-no">
                      <h4>5</h4>
                    </div>
                    <div className="digital-card-title">
                      <h4>Comprehensive Support</h4>
                    </div>
                  </div>
                  <div className="digital-des">
                    <p>
                      From initial strategy development to ongoing management
                      and optimization, we provide end-to-end digital marketing
                      solutions.
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

export default DigitalMarket;
