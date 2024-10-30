"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ulStar from "../../assets/images/ul-star.svg";
import ourProcessImg from "../../assets/images/Our-process-img.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProcessA = () => {
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
                <h4 className="phase-title mb-0">Discovery and Planning</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>
                    We begin with a thorough understanding of your business
                    needs, target audience, and project goals.
                  </span>
                </li>
                <li>
                  <span>
                    Detailed planning and strategy formulation to ensure a clear
                    roadmap for development.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStar} width={"100%"} height={"100%"} alt="star" />
                <h4 className="phase-title mb-0">Design and Prototyping</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>
                    Creating wireframes and prototypes to visualize the app
                    structure and flow.
                  </span>
                </li>
                <li>
                  <span>
                    Designing the user interface with a focus on aesthetics and
                    usability.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStar} width={"100%"} height={"100%"} alt="star" />
                <h4 className="phase-title mb-0">Development</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>
                    Coding the app using the latest technologies and frameworks.
                  </span>
                </li>
                <li>
                  <span>
                    Integrating necessary features and functionalities tailored
                    to your requirements.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStar} width={"100%"} height={"100%"} alt="star" />
                <h4 className="phase-title mb-0">Testing</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>
                    Comprehensive testing to identify and fix any bugs or
                    issues.
                  </span>
                </li>
                <li>
                  <span>
                    Ensuring the app is optimized for performance and user
                    experience.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main border-bottom-0">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStar} width={"100%"} height={"100%"} alt="star" />
                <h4 className="phase-title mb-0">Launch</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>Deploying the app to the respective app stores.</span>
                </li>
                <li>
                  <span>Monitoring the launch to ensure a smooth release.</span>
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

export default ProcessA;
