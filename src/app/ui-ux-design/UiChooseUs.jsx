"use client";
import React, { useEffect } from "react";
import ElevateImg from "../../assets/images/Elevate.png";
import Image from "next/image";

const ChooseUs = () => {
  useEffect(() => {
    const paragraph = document.querySelector(".choose-desc p");

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
    const section = document.querySelector(".choose-desc");
    observer.observe(section);
  }, []);
  useEffect(() => {
    const head = document.querySelector(".choose-title-1");
    const options = {
      threshold: 0.5,
    };

    if (head && window.gsap) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.set(".letter", { display: "inline-block" });

            gsap.from(".letter", {
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

      observer.observe(head);
    } else {
      console.error(
        "Either the .choose-title-1 element or GSAP library is missing.",
      );
    }
  }, []);
  return (
    <>
      {" "}
      <div className="why-choose-us-section">
        <div className="why-choose-sec">
          <div className="why-choose-img">
            <Image src={ElevateImg} alt="img" width={"100%"} height={"100%"} />
          </div>
          <div className="container-fluid">
            <div className="why-choose-title-section">
              <div className="why-choose-button">
                <h4>Why Choose Us</h4>
              </div>
              <div className="choose-title mt_30">
                <h1 className="choose-title-1 ui-text-wrapper">
                  {"Elevate Your Brand With Our UI/UX Services"
                    .split("")
                    .map((char, index) => (
                      <span className="letter" key={index}>
                        {char === " " ? <span>&nbsp;</span> : char}
                      </span>
                    ))}
                </h1>
              </div>
              <div className="choose-text mt_20">
                <h5>Revolutionize Your Brand With Our UI/UX Expertise</h5>
              </div>
              <div className="choose-desc mt_20">
                <p>
                  Our UI/UX services are meticulously crafted to elevate your
                  brand to new heights, seamlessly blending stunning aesthetics
                  with intuitive functionality. Let us turn your digital vision
                  into an unforgettable reality, captivating audiences and
                  fostering lasting connections that propel your brand forward.
                </p>
              </div>
              <div className="get-quote">Get A Quote Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
