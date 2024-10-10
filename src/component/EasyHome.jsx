"use client";
import React, { useEffect } from "react";
import discoverImg from "../assets/images/discovery.svg";
import leafImg from "../assets/images/leaf.svg";
import gsap from "gsap";
import Image from "next/image";

const EasyHome = () => {
  useEffect(() => {
    const easy = document.querySelector(".easy");
    const sections = gsap.utils.toArray(".easy section");
    const texts = gsap.utils.toArray(".anim");
    const mask = document.querySelector(".mask");
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".easy",
        pin: true,
        scrub: 1,
        end: "+=3000",
        // snap: 1 / (sections.length - 1),
        // markers: true,
      },
    });

    console.log(1 / (sections.length - 1));

    gsap.to(".discovery", {
      duration: 5, // Slower rotation
      delay: 1,
      rotate: 360,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut", // Add easing for smoother animation
    });

    //Progress bar animation

    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
      },
    });

    // whizz around the sections
    sections.forEach((section) => {
      // grab the scoped text
      let text = section.querySelectorAll(".anim");
      // if (text.length === 0) return;

      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          //   markers: true,
        },
      });
    });
  }, []);
  return (
    <>
      <div className="wrapper mt-5">
        <div className="container scrollx easy">
          <div className="intro-text">
            <div className="big-title">
              <h4 className="text-center position-relative">
                <p className="text-start mb-0">How it Works</p>
                We Have Some easy
                <span className="position-relative">
                  Steps
                  <span className="text-img-leaf">
                    <Image src={leafImg} alt="" />
                  </span>
                </span>
                <p className="text-end mb-0">To Process</p>
              </h4>
            </div>
          </div>

          <div className="steps">
            <svg
              width="1044"
              height="19"
              viewBox="0 0 1044 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H207.1C207.563 1.71776 209.581 0 212 0C214.419 0 216.437 1.71776 216.9 4H414.1C414.563 1.71776 416.581 0 419 0C421.419 0 423.437 1.71776 423.9 4H621.1C621.563 1.71776 623.581 0 626 0C628.419 0 630.437 1.71776 630.9 4H828.1C828.563 1.71776 830.581 0 833 0C835.419 0 837.437 1.71776 837.9 4H1035.1C1035.56 1.71776 1037.58 0 1040 0C1042.76 0 1045 2.23858 1045 5C1045 7.76142 1042.76 10 1040 10C1037.58 10 1035.56 8.28224 1035.1 6H837.9C837.437 8.28224 835.419 10 833 10C830.581 10 828.563 8.28224 828.1 6H630.9C630.437 8.28224 628.419 10 626 10C623.581 10 621.563 8.28224 621.1 6H423.9C423.437 8.28224 421.419 10 419 10C416.581 10 414.563 8.28224 414.1 6H216.9C216.437 8.28224 214.419 10 212 10C209.581 10 207.563 8.28224 207.1 6H9.89998Z"
                fill="#434C5D"
              />
              <mask
                id="mask0_0_1"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1044"
                height="19"
              >
                <path
                  d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H207.1C207.563 1.71776 209.581 0 212 0C214.419 0 216.437 1.71776 216.9 4H414.1C414.563 1.71776 416.581 0 419 0C421.419 0 423.437 1.71776 423.9 4H621.1C621.563 1.71776 623.581 0 626 0C628.419 0 630.437 1.71776 630.9 4H828.1C828.563 1.71776 830.581 0 833 0C835.419 0 837.437 1.71776 837.9 4H1035.1C1035.56 1.71776 1037.58 0 1040 0C1042.76 0 1045 2.23858 1045 5C1045 7.76142 1042.76 10 1040 10C1037.58 10 1035.56 8.28224 1035.1 6H837.9C837.437 8.28224 835.419 10 833 10C830.581 10 828.563 8.28224 828.1 6H630.9C630.437 8.28224 628.419 10 626 10C623.581 10 621.563 8.28224 621.1 6H423.9C423.437 8.28224 421.419 10 419 10C416.581 10 414.563 8.28224 414.1 6H216.9C216.437 8.28224 214.419 10 212 10C209.581 10 207.563 8.28224 207.1 6H9.89998Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_0_1)">
                {/* <!-- First step --> */}
                <rect
                  className="mask"
                  x="0"
                  y="-49"
                  width="150"
                  height="99"
                  fill="#FFFFFF"
                />
                {/* <!-- Second step --> */}
                <rect
                  className="mask"
                  x="207"
                  y="-49"
                  width="150"
                  height="99"
                  fill="#FFFFFF"
                />
                {/* <!-- Third step --> */}
                <rect
                  className="mask"
                  x="414"
                  y="-49"
                  width="150"
                  height="99"
                  fill="#FFFFFF"
                />
                {/* <!-- Fourth step --> */}
                <rect
                  className="mask"
                  x="621"
                  y="-49"
                  width="150"
                  height="99"
                  fill="#FFFFFF"
                />
                {/* <!-- Fifth step --> */}
                <rect
                  className="mask"
                  x="828"
                  y="-49"
                  width="150"
                  height="99"
                  fill="#FFFFFF"
                />
              </g>
            </svg>

            <section className="sec1 pin">
              <div className="d-flex align-items-center gap-3">
                <Image src={discoverImg} alt="" className="discovery" />
                <h5 className="planning-title">Discovery and Planning</h5>
              </div>
              <ul className="disc">
                <li className="mb_30">
                  Initial Consultation:
                  <span>
                    We begin by understanding your project requirements,
                    objectives, and expectations through detailed discussions
                    and consultations.
                  </span>
                </li>
                <li className="mb_30">
                  Project Scope Definition:
                  <span>
                    Based on our discussions, we define the scope of the
                    project, outlining deliverables, timelines, and budget
                    considerations.
                  </span>
                </li>
                <li>
                  Requirement Gathering:
                  <span>
                    Our team conducts thorough research and analysis to gather
                    all necessary requirements and specifications for the
                    project.
                  </span>
                </li>
              </ul>
            </section>

            <section className="sec2 pin">
              <div className="d-flex align-items-center gap-3 anim">
                <Image src={discoverImg} alt="" className="discovery" />
                <h5 className="planning-title">Discovery and Planning</h5>
              </div>
              <ul className="disc anim">
                <li className="mb_30">
                  Initial Consultation:
                  <span>
                    We begin by understanding your project requirements,
                    objectives, and expectations through detailed discussions
                    and consultations.
                  </span>
                </li>
                <li className="mb_30">
                  Project Scope Definition:
                  <span>
                    Based on our discussions, we define the scope of the
                    project, outlining deliverables, timelines, and budget
                    considerations.
                  </span>
                </li>
                <li>
                  Requirement Gathering:
                  <span>
                    Our team conducts thorough research and analysis to gather
                    all necessary requirements and specifications for the
                    project.
                  </span>
                </li>
              </ul>
            </section>
            <section className="sec3 pin">
              <div className="d-flex align-items-center gap-3 anim">
                <Image src={discoverImg} alt="" className="discovery" />
                <h5 className="planning-title">Discovery and Planning</h5>
              </div>
              <ul className="disc anim">
                <li className="mb_30">
                  Initial Consultation:
                  <span>
                    We begin by understanding your project requirements,
                    objectives, and expectations through detailed discussions
                    and consultations.
                  </span>
                </li>
                <li className="mb_30">
                  Project Scope Definition:
                  <span>
                    Based on our discussions, we define the scope of the
                    project, outlining deliverables, timelines, and budget
                    considerations.
                  </span>
                </li>
                <li>
                  Requirement Gathering:
                  <span>
                    Our team conducts thorough research and analysis to gather
                    all necessary requirements and specifications for the
                    project.
                  </span>
                </li>
              </ul>
            </section>
            {/* <!-- Adding new sections --> */}
            <section className="sec4 pin">
              <div className="d-flex align-items-center gap-3 anim">
                <Image src={discoverImg} alt="" className="discovery" />
                <h5 className="planning-title">Discovery and Planning</h5>
              </div>
              <ul className="disc anim">
                <li className="mb_30">
                  Initial Consultation:
                  <span>
                    We begin by understanding your project requirements,
                    objectives, and expectations through detailed discussions
                    and consultations.
                  </span>
                </li>
                <li className="mb_30">
                  Project Scope Definition:
                  <span>
                    Based on our discussions, we define the scope of the
                    project, outlining deliverables, timelines, and budget
                    considerations.
                  </span>
                </li>
                <li>
                  Requirement Gathering:
                  <span>
                    Our team conducts thorough research and analysis to gather
                    all necessary requirements and specifications for the
                    project.
                  </span>
                </li>
              </ul>
            </section>
            <section className="sec5 pin">
              <div className="d-flex align-items-center gap-3 anim">
                <Image src={discoverImg} alt="" className="discovery" />
                <h5 className="planning-title">Discovery and Planning</h5>
              </div>
              <ul className="disc anim">
                <li className="mb_30">
                  Initial Consultation:
                  <span>
                    We begin by understanding your project requirements,
                    objectives, and expectations through detailed discussions
                    and consultations.
                  </span>
                </li>
                <li className="mb_30">
                  Project Scope Definition:
                  <span>
                    Based on our discussions, we define the scope of the
                    project, outlining deliverables, timelines, and budget
                    considerations.
                  </span>
                </li>
                <li>
                  Requirement Gathering:
                  <span>
                    Our team conducts thorough research and analysis to gather
                    all necessary requirements and specifications for the
                    project.
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyHome;
