"use client";

import React, { useEffect } from "react";
import { openTab, subUnlockFc } from "../../../commFun";
import Image from "next/image";
import ulStar from "../../assets/images/ul-star.svg";

const Unlock = () => {
  useEffect(() => {
    const section = document.querySelector(".unlock-title");

    // Ensure section exists
    if (!section) return;

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply initial GSAP setup for spacing
          gsap.set(".letter", {
            display: "inline-block",
            marginRight: "5px", // Adjust the spacing between letters
          });

          // Animate each letter (including spaces)
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

    observer.observe(section);

    // Cleanup observer on unmount
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  useEffect(() => {
    const handleIntersection = (entries, observer, callback) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
          observer.unobserve(entry.target);
        }
      });
    };

    const firstTabLink = document.querySelector(".tab-link");
    const servicesLists = document.querySelectorAll(".services-list");
    const tabTitles = document.querySelectorAll(
      ".tab-pane h5.unlock-sub-title",
    );

    if (firstTabLink) firstTabLink.click();

    // Tab title animations
    tabTitles.forEach((tabTitle) => {
      const words = tabTitle.textContent
        .trim()
        .split(/\s+/)
        .map((word) => `<div className='animated-char'>&nbsp;${word}</div>`)
        .join("");
      tabTitle.innerHTML = words;

      const tl = gsap
        .timeline({ paused: true })
        .from(tabTitle.querySelectorAll(".animated-char"), {
          duration: 1.5,
          opacity: 0,
          y: 90,
          stagger: 0.03,
          ease: "elastic(1.2, 0.5)",
        });

      new IntersectionObserver((entries, obs) =>
        handleIntersection(entries, obs, () => tl.play()),
      ).observe(tabTitle);
    });

    // Services list animations
    const listObserver = new IntersectionObserver((entries, obs) =>
      handleIntersection(entries, obs, (entry) =>
        gsap.to(entry.target.querySelectorAll("li"), {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "bounce.out",
          stagger: 0.2,
          delay: 1,
        }),
      ),
    );

    servicesLists.forEach((list) => listObserver.observe(list));
  }, []);

  useEffect(() => {
    subUnlockFc();
  }, []);
  return (
    <>
      <div className="digital-potential-section">
        <div className="container">
          <div className="unlock-title">
            <h2>
              {"Unlock Your Digital Potential with Our Full-Service Website Development"
                .split(" ")
                .map((word, index) => (
                  <span key={index} className="word">
                    {word.split("").map((letter, letterIndex) => (
                      <span key={letterIndex} className="letter">
                        {letter}
                      </span>
                    ))}
                    &nbsp;
                  </span>
                ))}
            </h2>
          </div>

          <div className="unlock-tab-container mt_60">
            <div className="tab-header">
              <button
                className="tab-link"
                onClick={(event) => openTab(event, "Tab1")}
              >
                Website Development
              </button>
              <button
                className="tab-link"
                onClick={(event) => openTab(event, "Tab2")}
              >
                E-commerce Development
              </button>
              <button
                className="tab-link"
                onClick={(event) => openTab(event, "Tab3")}
              >
                Content Management Systems
              </button>
              <button
                className="tab-link"
                onClick={(event) => openTab(event, "Tab4")}
              >
                Web Application Development
              </button>
            </div>
            <div className="tab-content">
              <div id="Tab1" className="tab-pane">
                <h5 className="mb-0 unlock-sub-title">
                  Empower Your Online Presence with Our Comprehensive Website
                  Development Services{" "}
                </h5>
                <p className="mb-0 tap-para">
                  At <span>Emaad Infotech</span>, we offer comprehensive website
                  development services to bring your digital vision to life. Our
                  experienced team handles every aspect of the development
                  process, ensuring that your website is designed, coded, and
                  tested to perfection. Whether you're starting from scratch
                  with a new website or looking to revamp an existing one, we've
                  got you covered every step of the way.
                </p>
                <ul className="services-list">
                  <li>
                    <Image width={"100%"} height={"100%"} src={ulStar} />
                    Discovery Phase
                  </li>
                  <li>
                    <Image width={"100%"} height={"100%"} src={ulStar} />
                    Design
                  </li>
                  <li>
                    <Image width={"100%"} height={"100%"} src={ulStar} />
                    Development
                  </li>
                  <li>
                    <Image width={"100%"} height={"100%"} src={ulStar} />
                    Testing
                  </li>
                  <li>
                    <Image width={"100%"} height={"100%"} src={ulStar} />
                    Launch
                  </li>
                </ul>
              </div>
              {/* <!-- second tab content --> */}
              <div id="Tab2" className="tab-pane">
                <h5 className="mb-0 unlock-sub-title">
                  Revolutionize Your Online Retail Experience with Our
                  E-commerce Development Solutions
                </h5>
                <p className="mb-0 tap-para">
                  Embark on your e-commerce journey with confidence, knowing
                  that
                  <span>Emaad Infotech</span> is here to guide you every step of
                  the way. Our comprehensive e-commerce development services are
                  tailored to meet the unique needs of your business, whether
                  you're launching a new online store or seeking to enhance your
                  existing e-commerce platform. From intuitive user interfaces
                  to secure payment gateways, we'll ensure that your e-commerce
                  website is designed, developed, and optimized for success.
                </p>
                <ul className="services-list">
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Custom Website Design
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Secure Payment Gateway Integration
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Responsive Design
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Shopping Cart Functionality
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Order Management System
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Search Engine Optimization (SEO)
                  </li>
                </ul>
              </div>
              {/* <!-- third tab content --> */}
              <div id="Tab3" className="tab-pane">
                <h5 className="mb-0 unlock-sub-title">
                  Unleash the Power of Content Management with Our Comprehensive
                  Solutions
                </h5>
                <p className="mb-0 tap-para">
                  Empower your digital presence with our cutting-edge Content
                  Management Systems (CMS). At <span>Emaad Infotech</span>, we
                  offer robust CMS solutions tailored to streamline your content
                  creation, management, and delivery processes. From
                  user-friendly interfaces to powerful functionality, our CMS
                  platforms are designed to fuel your online success and elevate
                  your brand to new heights.
                </p>
                <ul className="services-list">
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    SEO Optimization
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Flexible Content Creation
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Customizable Templates
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Multi-user Collaboration
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Integration Capabilities
                  </li>
                </ul>
              </div>
              {/* <!-- fourth tab content --> */}
              <div id="Tab4" className="tab-pane">
                <h5 className="mb-0 unlock-sub-title">
                  Transform Your Ideas into Dynamic Digital Solutions with Our
                  Web Application Development Services
                </h5>
                <p className="mb-0 tap-para">
                  Elevate your business processes and engage your audience like
                  never before with our Web Application Development services. At
                  <span>Emaad Infotech</span>, we specialize in creating custom
                  web applications that address your unique challenges and
                  empower your digital journey. From concept to deployment, our
                  experienced team works tirelessly to bring your vision to
                  life, delivering scalable, secure, and innovative solutions
                  that drive results.
                </p>
                <ul className="services-list">
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Custom Solution Design
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    User-Centric Design
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Cross-Platform Compatibility
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Advanced Functionality
                  </li>
                  <li>
                    <Image src={ulStar} width={"100%"} height={"100%"} />
                    Security and Compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unlock;
