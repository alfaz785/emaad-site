"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ulStar from "../../assets/images/ul-star.svg";
import ourProcessImg from "../../assets/images/Our-process-img.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Process = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Function to animate each phase section
    function animatePhases() {
      const phases = document.querySelectorAll(".phase-text-main");

      phases.forEach((section, index) => {
        const staggerDelay = index * 0.2;

        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          delay: staggerDelay,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }

    // Call the animate function
    animatePhases();

    // Animate the main title (coming from above)
    gsap.from(".process-section-data h3", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process-section-data h3",
        start: "top 90%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate the lead paragraph (coming from above)
    gsap.from(".process-section-data p.lead", {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process-section-data p.lead",
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate images inside the process phases with a scale effect
    document.querySelectorAll(".phase-title-img img").forEach((img) => {
      gsap.from(img, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Animate the list items in each phase
    document
      .querySelectorAll(".phase-text-main ul li")
      .forEach((listItem, index) => {
        gsap.from(listItem, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.2,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listItem,
            start: "top 90%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
          },
        });
      });
  }, []);
  return (
    <>
      {" "}
      {/* <!-- process-section-data start --> */}
      <div className="container">
        <div className="process-section-data">
          <h3 className="mb-0">
            Our
            <Image
              width={"100%"}
              height={"100%"}
              src={ourProcessImg}
              alt="arrow"
            />{" "}
            Process
          </h3>
          <p className="lead">
            At <span className="company-name">Emaad Infotech</span>, we follow a
            systematic approach to ensure the success of your web development
            project. Our process is designed to deliver high-quality results
            while maintaining transparency and collaboration throughout the
            journey.
          </p>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStar} width={"100%"} height={"100%"} alt="star" />
                <h4 className="phase-title mb-0">Discovery Phase</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  Initial Consultation:&nbsp;
                  <span>
                    We start by understanding your goals, target audience, and
                    project requirements through in-depth discussions.
                  </span>
                </li>
                <li>
                  Research and Analysis:&nbsp;
                  <span>
                    Our team conducts market research and competitor analysis to
                    identify opportunities and challenges.
                  </span>
                </li>
                <li>
                  Define Project Scope:&nbsp;
                  <span>
                    Based on our findings, we outline the project scope,
                    timeline, and deliverables to set clear expectations.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStar} width={"100%"} height={"100%"} alt="star" />
                <h4 className="phase-title mb-0">Design Phase</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  Wireframing:&nbsp;
                  <span>
                    We create wireframes to outline the layout and structure of
                    your website, focusing on user experience and navigation.
                  </span>
                </li>
                <li>
                  Visual Design:&nbsp;
                  <span>
                    Our designers work on creating mockups and visual concepts
                    that align with your brand identity and preferences.
                  </span>
                </li>
                <li>
                  Feedback and Iteration:&nbsp;
                  <span>
                    We gather feedback from you and iterate on the designs until
                    they meet your expectations.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStar} width={"100%"} height={"100%"} alt="star" />
                <h4 className="phase-title mb-0">Development Phase</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  Front-End Development:&nbsp;
                  <span>
                    Our front-end developers bring the designs to life using
                    HTML, CSS, and JavaScript, ensuring responsiveness and
                    cross-browser compatibility.
                  </span>
                </li>
                <li>
                  Back-End Development:&nbsp;
                  <span>
                    Our back-end developers build the server-side logic and
                    database architecture using technologies like PHP, Node.js.
                  </span>
                </li>
                <li>
                  Integration and Testing:&nbsp;
                  <span>
                    We integrate third-party services, APIs, and
                    functionalities, rigorously testing the website for
                    performance, security, and functionality.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStar} width={"100%"} height={"100%"} alt="star" />
                <h4 className="phase-title mb-0">Testing Phase</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  Comprehensive Testing:&nbsp;
                  <span>
                    Our team identifies and addresses any issues or bugs,
                    ensuring a seamless and reliable application before launch
                  </span>
                </li>
                <li>
                  User Acceptance Testing (UAT):&nbsp;
                  <span>
                    We involve stakeholders in UAT to validate that the app
                    meets business requirements and provides an optimal user
                    experience.
                  </span>
                </li>
                <li>
                  Bug Identification and Fixing:&nbsp;
                  <span>
                    We conduct final testing to verify that everything is
                    working as expected in the live environment.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main border-bottom-0">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStar} width={"100%"} height={"100%"} alt="star" />
                <h4 className="phase-title mb-0">Maintenance and Support</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  Ongoing Support:&nbsp;
                  <span>
                    We provide post-launch support and maintenance services to
                    address any issues and ensure the website's continued
                    performance.
                  </span>
                </li>
                <li>
                  Updates and Enhancements:&nbsp;
                  <span>
                    We work with you to implement updates, enhancements, and new
                    features based on user feedback and changing business needs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /* ==========process section End ============ */}
    </>
  );
};

export default Process;
