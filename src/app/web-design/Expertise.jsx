"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import expertiseImg from "../../assets/images/expertise.svg";
import clientImg from "../../assets/images/client.svg";
import exprienseImg from "../../assets/images/expriense.png";
import softwareImg from "../../assets/images/softwate-design.png";
import commpetitiveImg from "../../assets/images/commpetitive-p.svg";
import technologiesImg from "../../assets/images/technology.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Expertise = () => {
  useEffect(() => {
    var card = document.querySelector(".Expertise-and-Experience-card");
    if (card) {
      var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
      tl.from(card, { opacity: 0, x: -100 });

      var title = document.querySelector(".expertise-title h3");
      if (title) {
        tl.from(title, { opacity: 0, y: 20 }, "-=0.5");
      }

      var text = document.querySelector(".expertise-text p");
      if (text) {
        tl.from(text, { opacity: 0, y: 20 }, "-=0.5");
      }
    }
  }, []);
  useEffect(() => {
    var card = document.querySelector(".Expertise-and-Experience-card2");
    if (card) {
      var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
      tl.from(card, { opacity: 0, x: -100 });

      var title = document.querySelector(".expertise-title2 h3");
      if (title) {
        tl.from(title, { opacity: 0, y: 20 }, "-=0.5");
      }

      var text = document.querySelector(".expertise-text2 p");
      if (text) {
        tl.from(text, { opacity: 0, y: 20 }, "-=0.5");
      }
    }
  }, []);
  useEffect(() => {
    var card = document.querySelector(".cutting-edge-tech-card");
    if (card) {
      var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
      tl.from(card, { opacity: 0, x: 100 });
    }
  }, []);
  useEffect(() => {
    var card = document.querySelector(".cutting-edge-tech-card2");
    if (card) {
      var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
      tl.from(card, { opacity: 0, x: 100 });
    }
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".expertice-choose-titel h3, .expertice-choose-titel h4", {
      opacity: 0,
      duration: 1,
      y: 50,
      stagger: 0.2, // Adjust stagger timing as needed
      scrollTrigger: {
        trigger: ".vision-why-choose-design",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".software-experience img", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "ease.out",
      scrollTrigger: {
        trigger: ".vision-why-choose-design",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  useEffect(() => {
    const paragraph = document.querySelector(".expertise-choose-text p");
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
        { threshold: 0.1 }
      );
      const section = document.querySelector(".expertise-choose-text");
      if (section) {
        observer.observe(section);
      } else {
        console.error(".expertise-choose-text section not found.");
      }
    } else {
      console.error(".expertise-choose-text p element not found.");
    }
  }, []);
  return (
    <>
      <div className="vision-why-choose-design container-fluid">
        <div className="expertise-design-text d-flex">
          <div className="exprience-design-cards d-flex">
            <div className="Expertise-design-card-">
              <div className="Expertise-and-Experience-card">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={expertiseImg}
                  alt="img"
                />
                <div className="expertise-title">
                  <h3>Expertise and Experience</h3>
                </div>
                <div className="expertise-text">
                  <p>
                    Our team comprises highly skilled designers and developers
                    with years of experience in the industry.
                  </p>
                </div>
              </div>
              <div className="Expertise-and-Experience-card2">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={clientImg}
                  alt="img"
                />

                <div className="expertise-title2">
                  <h3>Client-Centric Approach</h3>
                </div>
                <div className="expertise-text2">
                  <p>
                    We prioritize clear and consistent communication throughout
                    the project.
                  </p>
                </div>
              </div>
            </div>
            <div className="software-experience-image">
              <div className="software-experience">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={exprienseImg}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="expertise-text-choose">
            <div className="design-why-Choose">
              <div className="expertice-choose-titel">
                <h3>WHY</h3>
                <h4>CHOOSE</h4>
                <h4>US?</h4>
              </div>
              <div className="expertise-choose-text">
                <p>
                  Expertise, innovation, and tailored solutions. We deliver
                  responsive designs, proven results, and ongoing support to
                  ensure your success.
                </p>
              </div>
              <div className="software-experience-image">
                <div className="design-software">
                  <Image
                    height={"100%"}
                    width={"100%"}
                    src={softwareImg}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="card-technology-pricing d-flex">
              <div className="cutting-edge-tech-card">
                <Image src={technologiesImg} alt="img" />
                <div className="expertise-title">
                  <h3>Cutting-Edge Technology</h3>
                </div>
                <div className="expertise-text">
                  <p>
                    We stay ahead of industry trends and utilize the latest
                    technologies to create modern, responsive, and secure
                    websites.
                  </p>
                </div>
              </div>
              {/* <!-- card 2 --> */}
              <div className="cutting-edge-tech-card2">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={commpetitiveImg}
                  alt="img"
                />

                <div className="expertise-title">
                  <h3>Competitive Pricing</h3>
                </div>
                <div className="expertise-text">
                  <p>
                    We deliver high-quality work that offers great value for
                    your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
