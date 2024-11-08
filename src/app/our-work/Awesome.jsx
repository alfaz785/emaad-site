"use client";
import React, { useEffect } from "react";
import satisfactionImg from "../../assets/images/Online-Pharmacy.png";
import satisfactionImg1 from "../../assets/images/Charity.png";
import satisfactionImg2 from "../../assets/images/Housing-Society.png";
import satisfactionImg3 from "../../assets/images/Real-Estate.png";
import satisfactionImg4 from "../../assets/images/Online-Shopping.png";
import satisfactionImg5 from "../../assets/images/Business-Directory.png";
import satisfactionImg6 from "../../assets/images/Hospital-Management.png";
import Image from "next/image";
import gsap from "gsap";

const Awesome = () => {
  useEffect(() => {
    const head = document.querySelector(".sec-title-1");
    if (head) {
      const options = {
        threshold: 0.5, // Adjust this value as needed
      };

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

      observer?.observe(head);
    }
  }, []);
  useEffect(() => {
    var portfolio_project_thumbs = new Swiper(".portfolio__project-thumbs", {
      loop: true,
      spaceBetween: 0,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,
      allowTouchMove: false,
    });
    var portfolio_project = new Swiper(".portfolio__project-slider", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".pp-next",
        prevEl: ".pp-prev",
      },
      thumbs: {
        swiper: portfolio_project_thumbs,
      },
    });
  }, []);
  return (
    <>
      <section className="portfolio-v5 awesome_section mt_100 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12">
              <div className="sec-title-wrapper">
                <h4 className="sec-title-1 text-wrapper">
                  {"Related Projects".split(" ").map((word, index) => (
                    <div key={index} className="word">
                      {word === " " ? "\u00A0" : word}
                    </div>
                  ))}
                </h4>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12">
              <div className="awesome_blog_text" id="animated-section">
                <p className="mb-0">
                  Re-alive your imagination with us, by exploring world class
                  technology
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="pp-slider-wrapper">
                <div className="swiper portfolio__project-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide pp-slide">
                      <a
                        target="_blank"
                        href="https://emaad-infotech.com/product/e-pharma"
                      >
                        <div className="pp-slide-img">
                          <Image
                            src={satisfactionImg}
                            alt="Portfolio Thumbnail"
                          />
                          <div className="overlay">
                            <div className="overlay-text">Online Pharmacy</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide pp-slide">
                      <a
                        target="_blank"
                        href="https://www.emaadinfotech.com/non-profit-website"
                      >
                        <div className="pp-slide-img">
                          <Image
                            src={satisfactionImg1}
                            alt="Portfolio Thumbnail"
                          />
                          <div className="overlay">
                            <div className="overlay-text">
                              Non Profit Website
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide pp-slide">
                      <a
                        target="_blank"
                        href="https://www.emaad-infotech.com/product/housing-society/"
                      >
                        <div className="pp-slide-img">
                          <Image
                            src={satisfactionImg2}
                            alt="Portfolio Thumbnail"
                          />
                          <div className="overlay">
                            <div className="overlay-text">Housing Society</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide pp-slide">
                      <a
                        target="_blank"
                        href="https://www.emaad-infotech.com/product/real-estate/"
                      >
                        <div className="pp-slide-img">
                          <Image
                            src={satisfactionImg3}
                            alt="Portfolio Thumbnail"
                          />
                          <div className="overlay">
                            <div className="overlay-text">Real Estate</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide pp-slide">
                      <a
                        target="_blank"
                        href="https://emaad-infotech.com/product/online-shopping/"
                      >
                        <div className="pp-slide-img">
                          <Image
                            src={satisfactionImg4}
                            alt="Portfolio Thumbnail"
                          />
                          <div className="overlay">
                            <div className="overlay-text">
                              E-commerce Solution
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide pp-slide">
                      <a
                        target="_blank"
                        href="https://www.emaad-infotech.com/product/just-one-click"
                      >
                        <div className="pp-slide-img">
                          <Image
                            src={satisfactionImg5}
                            alt="Portfolio Thumbnail"
                          />
                          <div className="overlay">
                            <div className="overlay-text">
                              Business Directory
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide pp-slide">
                      <a
                        target="_blank"
                        href="https://hospital-management.emaad-infotech.com/"
                      >
                        <div className="pp-slide-img">
                          <Image
                            src={satisfactionImg6}
                            alt="Portfolio Thumbnail"
                          />
                          <div className="overlay">
                            <div className="overlay-text">
                              Hospital Management System
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" pp-prev swipper-btn">Next</div>
                <div className="pp-next swipper-btn"> prev</div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="swiper portfolio__project-thumbs">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="pp-slide-thumb">
                      <h3 className="pp-slide-title">
                        {" "}
                        <a
                          href="https://emaad-infotech.com/product/e-pharma/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Online Pharmacy
                        </a>
                      </h3>
                      <p>Website</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="pp-slide-thumb">
                      <h3 className="pp-slide-title">
                        <a
                          href="https://www.emaad-infotech.com/product/ngo/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Non Profit Website
                        </a>
                      </h3>
                      <p>Website</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="pp-slide-thumb">
                      <h3 className="pp-slide-title">
                        <a
                          href="https://www.emaad-infotech.com/product/housing-society/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Housing Society
                        </a>
                      </h3>
                      <p>Website & Application</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="pp-slide-thumb">
                      <h3 className="pp-slide-title">
                        <a
                          href="https://www.emaad-infotech.com/product/real-estate/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Real Estate
                        </a>
                      </h3>
                      <p>Website</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="pp-slide-thumb">
                      <h3 className="pp-slide-title">
                        <a
                          href="https://emaad-infotech.com/product/online-shopping/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          E-commerce Solution
                        </a>
                      </h3>
                      <p>Mother's Day Website</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="pp-slide-thumb">
                      <h3 className="pp-slide-title">
                        <a href="https://www.emaad-infotech.com/product/just-one-click/">
                          Business Directory
                        </a>
                      </h3>
                      <p>Website</p>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="pp-slide-thumb">
                      <h3 className="pp-slide-title">
                        <a
                          href="https://hospital-management.emaad-infotech.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          Hospital Management System
                        </a>
                      </h3>
                      <p>Website</p>
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awesome;
