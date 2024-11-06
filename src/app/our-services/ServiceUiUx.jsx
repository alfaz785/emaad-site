"use client";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import webDesignImg from "../../assets/images/Web-Design.svg";
import webDevelopmentImg from "../../assets/images/Web-Development.svg";
import digitalMarketingImg from "../../assets/images/Digital-Marketing.svg";
import mobileAppImg from "../../assets/images/Mobile-App-Developing.svg";
import uiuxDesign from "../../assets/images/uiux-design.svg";
import hover2Img from "../../assets/images/hover-image1.png";
import hover3Img from "../../assets/images/hover-image2.png";
import hover4Img from "../../assets/images/hover-image3.png";
import Image from "next/image";

const ServiceUiUx = () => {
  useEffect(() => {
    // GSAP ScrollTrigger animation
    const sections = document.querySelectorAll(".uiux-design-section");

    sections.forEach((section) => {
      const uiuxTitleMain = section.querySelector(".uiux-title-main");

      gsap.fromTo(
        uiuxTitleMain,
        { x: 0 },
        {
          x: -400,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    });
  }, []);

  useEffect(() => {
    // uiux-subtitle text animation
    const animateText = (id) => {
      const text = document.getElementById(id);
      if (text) {
        const characters = text.innerText.split("");
        text.innerHTML = characters
          .map((char) => `<span className="char">${char}</span>`)
          .join("");
      }

      const chars = document.querySelectorAll(`#${id} .char`);
      if (chars) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `#${id}`,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        tl.from(chars, {
          duration: 1,
          opacity: 0,
          y: 50,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.05,
        });
      }
    };

    ["uiux", "design", "development", "digital", "developing"].forEach((id) =>
      animateText(id),
    );
  }, []);

  useEffect(() => {
    // Select all paragraphs with the class 'lead'
    const paragraphs = document.querySelectorAll(".lead");

    // Wrap each paragraph's text with <span> tags if not already done
    paragraphs.forEach((paragraph) => {
      if (!paragraph.dataset.processed) {
        const text = paragraph.innerText || ""; // Ensure innerText exists
        paragraph.innerHTML = `<span>${text.replace(
          /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
          "$1</span>$2<span>",
        )}</span>`;
        paragraph.dataset.processed = true; // Avoid re-processing
      }
    });

    // Observer options for IntersectionObserver
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the paragraph is visible
    };

    // Create an IntersectionObserver to animate the paragraphs
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const paragraph = entry.target;

          gsap.from(`#${paragraph.id} span`, {
            opacity: 0,
            y: "100%",
            duration: 1,
            ease: "power2.out",
            stagger: 0.1,
            onComplete: function () {
              gsap.to(`#${paragraph.id}`, { opacity: 1, duration: 0 });
            },
          });

          observer.unobserve(paragraph); // Unobserve after animation triggers
        }
      });
    }, options);

    // Observe each paragraph if it has an ID
    paragraphs.forEach((paragraph) => {
      if (paragraph.id) {
        observer.observe(paragraph);
      }
    });

    // GSAP animation for the main title
    gsap.from("#mainTitle", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Cleanup on component unmount
    return () => {
      paragraphs.forEach((paragraph) => {
        if (paragraph.id) observer.unobserve(paragraph);
      });
    };
  }, []);

  useEffect(() => {
    const titles = document.querySelectorAll(".uiux-title-main");
    const cursorCircle = document.getElementById("cursor-circle");
    console.log(cursorCircle);
    let currentIndex = 0;

    // Array of image URLs
    const imageUrls = [hover2Img.src, hover3Img.src, hover4Img.src];

    let intervalId;

    const updateCircleImage = () => {
      if (cursorCircle) {
        cursorCircle.style.backgroundImage = `url(${imageUrls[currentIndex]})`;
      }
      currentIndex = (currentIndex + 1) % imageUrls.length;
    };

    const handleMouseEnter = () => {
      if (cursorCircle) cursorCircle.style.display = "block";
      updateCircleImage();
      intervalId = setInterval(updateCircleImage, 2000);
    };

    const handleMouseLeave = () => {
      if (cursorCircle) cursorCircle.style.display = "none";
      clearInterval(intervalId);
    };

    const handleMouseMove = (e) => {
      const x = e.clientX - 100; // Adjust to center the circle
      const y = e.clientY - 100; // Adjust to center the circle
      if (cursorCircle) {
        cursorCircle.style.left = `${x}px`;
        cursorCircle.style.top = `${y}px`;
      }
    };

    titles.forEach((title) => {
      title.addEventListener("mouseenter", handleMouseEnter);
      title.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listeners
    return () => {
      titles.forEach((title) => {
        title.removeEventListener("mouseenter", handleMouseEnter);
        title.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {/* <!-- uiux-design-section start --> */}
      <div id="cursor-circle"></div>
      <section className="uiux-design-section mt_80">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="uiux-design-content">
                <div className="container uiux-subtitle-main">
                  <div className="d-flex align-items-center uiux-title-main">
                    <Image
                      src={uiuxDesign}
                      alt="UI/UX Design"
                      className="uiux-design-img"
                    />
                    <h2 className="mb-0">UI/UX Design</h2>
                  </div>
                  <h4 className="uiux-subtitle" id="uiux">
                    UI/UX Design
                  </h4>
                  <p className="lead animation-section" id="lead1">
                    User experience is at the heart of everything we do. Our
                    UI/UX design services focus on creating visually stunning
                    interfaces that are intuitive, engaging, and memorable. From
                    wireframing and prototyping to user testing and refinement,
                    our talented designers collaborate closely with you to
                    ensure that every aspect of your software solution is
                    designed with the end user in mind, resulting in a seamless
                    and delightful user experience.
                  </p>
                  <a href="/ui-ux-design" className="btn btn-primary btn-lg">
                    UI / UX Design
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- uiux-design-section  End--> */}
      {/* <!-- Web Design-section start --> */}
      <section className="uiux-design-section mt_80">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="uiux-design-content">
                <div className="container uiux-subtitle-main">
                  <div className="d-flex align-items-center uiux-title-main">
                    <Image
                      src={webDesignImg}
                      alt="img"
                      className="uiux-design-img"
                    />
                    <h2 className="mb-0">Web Design</h2>
                  </div>
                  <h4 className="uiux-subtitle" id="design">
                    Web Design
                  </h4>
                  <p className="lead animation-section" id="lead2">
                    We work hard to ensure that your site has both creative
                    flair and function. Our team of developers build clean and
                    efficient websites that are responsive across all devices,
                    so that users can enjoy them from wherever they choose to
                    browse. Whether you're a business that needs e-commerce,
                    portfolio site or something more enterprise, we've got you
                    covered.
                  </p>
                  <a href="/web-design" className="btn btn-primary btn-lg">
                    Web Design Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Web Design-section end --> */}
      {/* <!-- Web Development-section start --> */}
      <section className="uiux-design-section mt_80">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="uiux-design-content">
                <div className="container uiux-subtitle-main">
                  <div className="d-flex align-items-center uiux-title-main">
                    <Image
                      src={webDevelopmentImg}
                      alt="img"
                      className="uiux-design-img"
                    />
                    <h2 className="mb-0">Web Development</h2>
                  </div>
                  <h4 className="uiux-subtitle" id="development">
                    Web Development
                  </h4>
                  <p className="lead" id="lead3">
                    We work hard to ensure that your site has both creative
                    flair and function. Our team of developers build clean and
                    efficient websites that are responsive across all devices,
                    so that users can enjoy them from wherever they choose to
                    browse. Whether you're a business that needs e-commerce,
                    portfolio site or something more enterprise, we've got you
                    covered.
                  </p>
                  <a href="/web-development" className="btn btn-primary btn-lg">
                    Web Development Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Web Development-section end --> */}
      {/* <!-- Digital Marketing-section start --> */}
      <section className="uiux-design-section mt_80">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="uiux-design-content">
                <div className="container uiux-subtitle-main">
                  <div className="d-flex align-items-center uiux-title-main">
                    <Image
                      src={digitalMarketingImg}
                      alt="img"
                      className="uiux-design-img"
                    />
                    <h2 className="mb-0">Digital Marketing</h2>
                  </div>
                  <h4 className="uiux-subtitle" id="digital">
                    Digital Marketing
                  </h4>
                  <p className="lead" id="lead4">
                    Ready to take your brand to the next level? With our digital
                    marketing expertise, we can help you reach and engage your
                    audience through digital campaigns. After all, there is no
                    point having an amazing website, if nobody knows it’s there,
                    right?
                  </p>
                  <a href="/digital-marketing" className="btn btn-primary btn-lg">
                    Digital Marketing Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Digital Marketing-section end --> */}
      {/* <!-- Mobile App Developing-section start --> */}
      <section className="uiux-design-section mt_80">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="uiux-design-content">
                <div className="container uiux-subtitle-main">
                  <div className="d-flex align-items-center uiux-title-main">
                    <Image
                      src={mobileAppImg}
                      alt="img"
                      className="uiux-design-img"
                    />
                    <h2 className="mb-0">Mobile App Developing</h2>
                  </div>
                  <h4 className="uiux-subtitle" id="developing">
                    Mobile App Developing
                  </h4>
                  <p className="lead" id="lead5">
                    In the bustling world of app stores and digital innovation,
                    your mobile presence can either make or break your brand. At
                    Emaad Infotech®, we're not just about crafting apps; we're
                    about empowering your vision to reach its fullest potential.
                  </p>
                  <a href="/app-development" className="btn btn-primary btn-lg">
                    App Developing Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceUiUx;
