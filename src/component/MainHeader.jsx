"use client";
import React, { useEffect, useRef } from "react";
import indiaImg from "../assets/images/India.png";
import emailImg from "../assets/images/email.png";
import shapeImg from "../assets/images/Shape.png";
import youtubeImg from "../assets/images/youtube.png";
import instImg from "../assets/images/insta.png";
import telegramImg from "../assets/images/teligrame.png";
import facebookImg from "../assets/images/facebook.svg";
import Image from "next/image";
import Link from "next/link";
import { gsap, Power2 } from "gsap";
import { usePathname } from "next/navigation";
import { handleNavigate } from "../../commFun";

const MainHeader = () => {
  const pathname = usePathname();

  const lastScrollTop = useRef(0);
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const dropLinks = document.querySelectorAll(".nav-drowpdown");

    const handleNavClick = (event) => {
      // event.preventDefault();
      const dropdown = event.currentTarget.nextElementSibling;
      if (dropdown) {
        dropdown.classList.toggle("active");
      }
    };

    const handleDropClick = (event) => {
      event.preventDefault();
      const submenu = event.currentTarget.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("active");
      }
    };

    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", handleNavClick);
    });

    dropLinks.forEach((dropLink) => {
      dropLink.addEventListener("click", handleDropClick);
    });

    return () => {
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("click", handleNavClick);
      });
      dropLinks.forEach((dropLink) => {
        dropLink.removeEventListener("click", handleDropClick);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop.current) {
        // Scroll down
        document.querySelector(".nav-bar")?.classList.add("hidden");
        document.querySelector(".nav-bar")?.classList.remove("visible");
      } else {
        // Scroll up
        document.querySelector(".nav-bar")?.classList.remove("hidden");
        document.querySelector(".nav-bar")?.classList.add("visible");
      }

      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll; // Reset to 0 if scrolled to the top
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const menuBtn = document.querySelector(".menuBtn");
    const closeBtn = document.querySelector(".close");

    let navbar_tl = gsap.timeline({ paused: true });
    navbar_tl.to(".menu-content", {
      opacity: 1,
      duration: 0.5,
      top: 0,
      ease: Power2.easeInOut,
      zIndex: 9,
    });
    navbar_tl.to(".nav-text", {
      opacity: 1,
      duration: 0.2,
      stagger: 0.3,
      marginTop: 0,
      ease: Power2.easeInOut,
    });
    menuBtn.addEventListener("click", () => {
      navbar_tl.play().timeScale(1);
      const body = document.getElementById("body");
      body.style.overflow = "hidden";
    });
    closeBtn.addEventListener("click", () => {
      navbar_tl.timeScale(3);
      navbar_tl.reverse();

      const body = document.getElementById("body");

      body.style.overflow = "";
    });
  }, [pathname]);

  useEffect(() => {
    var cursor = document.querySelector(".cursor"),
      cursorScale = document.querySelectorAll(".cursor-scale"),
      mousX = 0,
      mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,

      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mousX,
            top: mouseY,
          },
        });
      },
    });
    window.addEventListener("mousemove", function (e) {
      mousX = e.clientX;
      mouseY = e.clientY;
    });
    cursorScale.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-main");
        cursor.classList.remove("cursor-small");
      });
      link.addEventListener("mousemove", () => {
        cursor.classList.add("cursor-main");
        if (link.classList.contains("small")) {
          cursor.classList.remove("cursor-main");
          cursor.classList.add("cursor-small");
        }
      });
    });
  }, []);
  useEffect(() => {
    gsap.to(".border-bottom img", {
      duration: 3,
      delay: 1.5,
      rotate: 360,
      scale: 0.3,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <>
      <div className="nav-bar" id="navBar">
        <div className="emaad-log">
          <Link href="/">
            <svg
              className="dashed-path"
              viewBox="0 0 44 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.35 19.15H22.815V23H0.66V0.389999H22.78V4.275H5.35V10.295H19.595V13.165H5.35V19.15ZM28.2244 0.389999H32.8794V23H28.2244V0.389999ZM43.6321 19.01V23H38.3471V19.01H43.6321Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>

        <div className="emmad-header">
          <div className="menu menuBtn">
            <h4>menu</h4>
            <span className="material-symbols-outlined"> drag_handle </span>
          </div>
        </div>
      </div>
      <div className="menu-content">
        <div className="main-close-btn">
          <div className="main-logo">
            <div className="emaad-logo1">
              <Link href="/">
                <svg
                  className="dashed-path"
                  viewBox="0 0 44 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.35 19.15H22.815V23H0.66V0.389999H22.78V4.275H5.35V10.295H19.595V13.165H5.35V19.15ZM28.2244 0.389999H32.8794V23H28.2244V0.389999ZM43.6321 19.01V23H38.3471V19.01H43.6321Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
            <div className="emmad-border">
              <div className="close closeBtn">
                <h4>close</h4>
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-container">
          <ul className="nav-list SMN_effect-1">
            <li className="nav-text">
              <Link
                onClick={handleNavigate}
                href="/"
                className="nav-link cursor-scale"
              >
                Home&nbsp;
                <span className="numbers">01</span>
              </Link>
            </li>
            <li className="nav-text said-drowpdown">
              <a href="#" className="nav-link p-0 cursor-scale">
                What we do <span className="numbers">02</span>
              </a>
              <div className="main-drowpdown">
                {/* <!-- drowpdown 1 --> */}
                <ul className="dropdown">
                  <div className="menu-icon">
                    <li className="mb-4">
                      <a href="#" className="nav-drowpdown p-0">
                        Services
                        <div className="border-line"></div>
                      </a>
                    </li>
                    <div className="menu-drowp">
                      <div className="drow  p-0">
                        <li className="hover">
                          <Link
                            href="/web-development"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Web Development
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/web-design"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Web Design
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/app-development"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Mobile App Development
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/ui-ux-design"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            UI / UX Design
                          </Link>
                        </li>
                      </div>
                      <div className="drowp-2">
                        <li className="hover">
                          <Link
                            href="/digital-marketing"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Digital Marketing
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/domain-hosting"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Domain & Hosting Services
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/bulk-sms-email-service"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Bulk SMS & Email Service
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div className="menu-icon">
                    <li className="mb-4">
                      <Link href="#" className="nav-drowpdown p-0">
                        Industries
                        <div className="border-line"></div>
                      </Link>
                    </li>
                    <div className="menu-drowp-icon">
                      <div className="drowp-1">
                        <div className="icon">
                          <span className="material-symbols-outlined material-symbols-fill">
                            school
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Education
                            </Link>
                          </li>
                        </div>
                        <div className="icon">
                          <span className="material-symbols-outlined">
                            diversity_3
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Charity Organization
                            </Link>
                          </li>
                        </div>
                        <div className="icon">
                          <span className="material-symbols-outlined">
                            diversity_3
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Real Estate
                            </Link>
                          </li>
                        </div>
                        <div className="icon">
                          <span className="material-symbols-outlined material-symbols-fill">
                            home_work
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Financial & Insurance
                            </Link>
                          </li>
                        </div>
                        <div className="icon">
                          <span className="material-symbols-outlined">
                            local_dining
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Food Processing
                            </Link>
                          </li>
                        </div>
                      </div>
                      <div className="drowp-2 we-do">
                        <div className="icon">
                          <span className="material-symbols-outlined material-symbols-fill">
                            school
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Manufacturing
                            </Link>
                          </li>
                        </div>
                        <div className="icon">
                          <span className="material-symbols-outlined">
                            cardiology
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Healthcare
                            </Link>
                          </li>
                        </div>
                        <div className="icon">
                          <span className="material-symbols-outlined material-symbols-fill">
                            home_health
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Tourism & Hospitality
                            </Link>
                          </li>
                        </div>
                        <div className="icon">
                          <span className="material-symbols-outlined material-symbols-fill">
                            sports_cricket
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Sport & Fitness
                            </Link>
                          </li>
                        </div>
                        <div className="icon">
                          <span className="material-symbols-outlined">
                            public
                          </span>
                          <li className="hover">
                            <Link
                              href="/get-in-touch"
                              className="nav-drowpdown1 p-0"
                              onClick={handleNavigate}
                            >
                              Information Technology
                            </Link>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </li>
            <li className="nav-text said-product-dowpdown">
              <a href="#" className="nav-link p-0 cursor-scale ">
                Product <span className="numbers">03</span>
              </a>
              <div className="main-drowpdown">
                {/* <!-- dorwpdonw 2 --> */}
                <ul className="product-drowpdown">
                  <div className="icons">
                    <div className="border-line"></div>
                    <span className="material-symbols-outlined">
                      sync_saved_locally
                    </span>
                    <li className="mb-4">
                      <Link href="/get-in-touch" className="nav-drowpdown p-0">
                        Web Products{" "}
                      </Link>
                    </li>
                  </div>
                  <div className="menu-drowpdown">
                    <div className="drowp-0">
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          Online Pharmacy Solution
                        </Link>
                      </li>
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          Real Estate Software Solution
                        </Link>
                      </li>
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          E-commerce Solution
                        </Link>
                      </li>
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          NGO - Charity Website Service
                        </Link>
                      </li>
                    </div>
                    <div className="drowp-2">
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          Housing & Society Management
                        </Link>
                      </li>
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          Business Directory
                        </Link>
                      </li>
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          Hospital Management System
                        </Link>
                      </li>
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          Job Portal
                        </Link>
                      </li>
                    </div>
                  </div>
                  <div className="menu-icon">
                    <div className="icons">
                      <div className="border-line"></div>
                      <span className="material-symbols-outlined">
                        phone_iphone
                      </span>
                      <li className="mb-4">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown p-0"
                        >
                          Android & iOS App
                        </Link>
                      </li>
                    </div>
                    <div className="menu-drowp-icons">
                      <div className="drowp-1">
                        <li className="hover">
                          <Link
                            href="/get-in-touch"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Hospital App - Video Call App...
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/get-in-touch"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Realtime Video Ads Screening App
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/get-in-touch"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Grocery Delivery App
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/get-in-touch"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Business Listing Software
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/get-in-touch"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Garage App
                          </Link>
                        </li>
                      </div>
                      <div className="drowp-2 we-do">
                        <li className="hover">
                          <Link
                            href="/get-in-touch"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Community App
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/get-in-touch"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Market place app like Upwork
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/get-in-touch"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Online Shopping Services
                          </Link>
                        </li>
                        <li className="hover">
                          <Link
                            href="/get-in-touch"
                            className="nav-drowpdown1 p-0"
                            onClick={handleNavigate}
                          >
                            Matrimony App
                          </Link>
                        </li>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </li>
            <li className="nav-text said-company-dropdown">
              <a href="#" className="nav-link p-0 cursor-scale ">
                Company <span className="numbers">04</span>
              </a>
              <div className="main-drowpdown">
                <ul className="company-dropdown">
                  <li className="mb-4">
                    <a href="#" className="nav-drowpdown p-0">
                      Quick Links
                      <div className="border-line"></div>
                    </a>
                  </li>
                  <div className="row g-0">
                    <div className="col-xl-7 col-lg-9 col-md-8 col-sm-7">
                      <li className="hover">
                        <Link
                          href="/about-us"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          About us
                        </Link>
                      </li>
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          Blog
                        </Link>
                      </li>
                    </div>
                    <div className="col-xl-5 col-lg-1 col-md-4 col-sm-4">
                      <li className="hover">
                        <Link
                          href="/career"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          Career
                        </Link>
                      </li>
                      <li className="hover">
                        <Link
                          href="/get-in-touch"
                          className="nav-drowpdown1 p-0"
                          onClick={handleNavigate}
                        >
                          Gallery
                        </Link>
                      </li>
                    </div>
                  </div>
                  <div className="menu-icon">
                    <li className="mb-4">
                      <a href="#" className="nav-drowpdown p-0">
                        Get in Touch
                        <div className="border-line"></div>
                      </a>
                    </li>
                    <div className="row g-0">
                      <div className="col-xl-7 col-lg-9 col-md-8 col-sm-7">
                        <div className="calling-text">
                          <Image src={indiaImg} alt="img" />
                          <div className="call-num">
                            <h5>Phone Number</h5>
                            <a href="tel:94270 79165">
                              <h2>+91 76001 45260</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-1 col-md-4 col-sm-4">
                        <div className="Email-text">
                          <Image src={emailImg} alt="img" />
                          <div className="call-num">
                            <h5>Email</h5>
                            <a href="mailto:info@emaadinfotech.com">
                              <h2>info@emaadinfotech.com</h2>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </li>
            <div className="border-bottom cursor-scale small p-0">
              <Image src={shapeImg} alt="img" />
            </div>
          </ul>

          <div className="social-iocn cursor-scale small">
            <div className="youtube">
              <a href="">
                <Image src={youtubeImg} alt="img" />
              </a>
            </div>
            <div className="youtube">
              <a href="">
                {" "}
                <Image src={instImg} alt="img" />
              </a>
            </div>
            <div className="youtube">
              <a href="">
                {" "}
                <Image src={telegramImg} alt="img" />
              </a>
            </div>
            <div className="youtube">
              <a href="">
                {" "}
                <Image src={facebookImg} alt="img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
