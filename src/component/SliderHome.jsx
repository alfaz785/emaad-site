"use client";
import gsap from "gsap";
// components/SliderComponent.js
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SliderHome = () => {
  useEffect(() => {
    var thumbs = new Swiper(".thumbs", {
      centeredSlidesBounds: true,
      slidesPerView: 2,
      direction: "horizontal",
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 20,
      speed: 1200,
    });
    var slider = new Swiper(".main-slider", {
      spaceBetween: 1000,
      initialSlide: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "coverflow",
      speed: 2000,
      thumbs: {
        swiper: thumbs,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".thumbs .swiper-slide", {
      x: 1000,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 1,
    });
  }, []);

  return (
    <div className="leading-ecommerce main">
      <div className="main">
        <div className="swiper main-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide back_one">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">
                  Leading ECommerce Software Development Company
                </h5>
                <p className="mb-0">
                  Elevate your digital marketplace with Emaad Infotech®, a
                  premier eCommerce software development company. We engineer
                  bespoke eCommerce solutions, infusing them with robust
                  security, agile functionality, and seamless transaction
                  processing. Our comprehensive eCommerce software development
                  services are designed to empower your business, ensuring a
                  competitive edge in the dynamic online retail landscape.
                  Leveraging advanced technologies, we create platforms that are
                  not only intuitive but also scalable, supporting your growth
                  every step of the way.
                </p>

                <a href="#" className="contact-button mt_40">
                  Contact Us
                  <span className="material-symbols-outlined"> east </span>
                </a>
              </div>
            </div>
            <div className="swiper-slide back_two">
              <div className="overlay"></div>
              <div className="slider-text">
                {/* <!-- <h5 className="mb_40">
              Leading ECommerce Software Development Company
            </h5> --> */}
                <h5 className="sec-title-3 mb_40">
                  <span className="letter">L</span>
                  <span className="letter">e</span>
                  <span className="letter">a</span>
                  <span className="letter">d</span>
                  <span className="letter">i</span>
                  <span className="letter">n</span>
                  <span className="letter">g</span>{" "}
                  <span className="letter">E</span>
                  <span className="letter">C</span>
                  <span className="letter">o</span>
                  <span className="letter">m</span>
                  <span className="letter">m</span>
                  <span className="letter">e</span>
                  <span className="letter">r</span>
                  <span className="letter">c</span>
                  <span className="letter">e</span>
                  <span className="letter">S</span>
                  <span className="letter">o</span>
                  <span className="letter">f</span>
                  <span className="letter">t</span>
                  <span className="letter">w</span>
                  <span className="letter">a</span>
                  <span className="letter">r</span>
                  <span className="letter">e</span>
                  <span className="letter-wrapper"></span>
                  <br />
                  <span className="letter">D</span>
                  <span className="letter">e</span>
                  <span className="letter">v</span>
                  <span className="letter">e</span>
                  <span className="letter">l</span>
                  <span className="letter">o</span>
                  <span className="letter">p</span>
                  <span className="letter">m</span>
                  <span className="letter">e</span>
                  <span className="letter">n</span>
                  <span className="letter">t</span>{" "}
                  <span className="letter">C</span>
                  <span className="letter">o</span>
                  <span className="letter">m</span>
                  <span className="letter">p</span>
                  <span className="letter">a</span>
                  <span className="letter">n</span>
                  <span className="letter">y</span>
                </h5>

                <p className="mb-0 leading">
                  Elevate your digital marketplace with Emaad Infotech®, a
                  premier eCommerce software development company. We engineer
                  bespoke eCommerce solutions, infusing them with robust
                  security, agile functionality, and seamless transaction
                  processing. Our comprehensive eCommerce software development
                  services are designed to empower your business, ensuring a
                  competitive edge in the dynamic online retail landscape.
                  Leveraging advanced technologies, we create platforms that are
                  not only intuitive but also scalable, supporting your growth
                  every step of the way.
                </p>

                <a href="#" className="contact-button mt_40">
                  Contact Us
                  <span className="material-symbols-outlined"> east </span>
                </a>
              </div>
            </div>
            <div className="swiper-slide back_three">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">
                  Leading ECommerce Software Development Company
                </h5>
                <p className="mb-0">
                  Elevate your digital marketplace with Emaad Infotech®, a
                  premier eCommerce software development company. We engineer
                  bespoke eCommerce solutions, infusing them with robust
                  security, agile functionality, and seamless transaction
                  processing. Our comprehensive eCommerce software development
                  services are designed to empower your business, ensuring a
                  competitive edge in the dynamic online retail landscape.
                  Leveraging advanced technologies, we create platforms that are
                  not only intuitive but also scalable, supporting your growth
                  every step of the way.
                </p>

                <a href="#" className="contact-button mt_40">
                  Contact Us
                  <span className="material-symbols-outlined"> east </span>
                </a>
              </div>
            </div>
            <div className="swiper-slide back_four">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">
                  Leading ECommerce Software Development Company
                </h5>
                <p className="mb-0">
                  Elevate your digital marketplace with Emaad Infotech®, a
                  premier eCommerce software development company. We engineer
                  bespoke eCommerce solutions, infusing them with robust
                  security, agile functionality, and seamless transaction
                  processing. Our comprehensive eCommerce software development
                  services are designed to empower your business, ensuring a
                  competitive edge in the dynamic online retail landscape.
                  Leveraging advanced technologies, we create platforms that are
                  not only intuitive but also scalable, supporting your growth
                  every step of the way.
                </p>

                <a href="#" className="contact-button mt_40">
                  Contact Us
                  <span className="material-symbols-outlined"> east </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="thumb-bottom">
          <div className="position-relative slider-btn-group">
            <div className="slider-btn">
              <div className="swiper-button-next next-">
                <span className="material-symbols-outlined">
                  keyboard_arrow_left
                </span>
              </div>
              <div className="swiper-button-prev">
                <span className="material-symbols-outlined">
                  keyboard_arrow_right
                </span>
              </div>
            </div>
          </div>

          <div className="swiper thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">Healthcare</div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">Real Estatee</div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">Real Estatee</div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">Real Estatee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
