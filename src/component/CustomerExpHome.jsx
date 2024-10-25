"use client";
import { useEffect } from "react";
import EperiencesImg from "../assets/images/Eperiences.svg";
import kristionImg from "../assets/images/Kristin Watson.svg";
import Image from "next/image";
import Swiper from "swiper";
import { gsap } from "gsap";

const CustomerExpHome = () => {
  useEffect(() => {
    var swiper2 = new Swiper(".leftSwiper", {
      spaceBetween: 10,
      slidesPerView: "auto",
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 5000,
    });

    // Add event listeners for hover to control autoplay
    document
      .querySelectorAll(".leftSwiper .swiper-slide")
      .forEach(function (slide) {
        slide?.addEventListener("mouseenter", function () {
          swiper2.autoplay.stop();
        });
        slide?.addEventListener("mouseleave", function () {
          swiper2.autoplay.start();
        });
      });
    var swiper2 = new Swiper(".rightSwiper", {
      spaceBetween: 10,
      slidesPerView: "auto",
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
      },
      speed: 5000,
    });

    // Add event listeners for hover to control autoplay
    document
      .querySelectorAll(".rightSwiper .swiper-slide")
      .forEach(function (slide) {
        slide?.addEventListener("mouseenter", function () {
          swiper2.autoplay.stop();
        });
        slide?.addEventListener("mouseleave", function () {
          swiper2.autoplay.start();
        });
      });
  }, []);
  useEffect(() => {
    const paragraph = document.querySelector("p.para");

    if (paragraph) {
      const words = paragraph?.innerHTML
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

      const section = document.querySelector("p.para");
      observer?.observe(section);
    }
  }, []);
  useEffect(() => {
    gsap.to(".experiences", {
      duration: 5,
      rotate: 360,
      repeat: -1,
      ease: "linear",
    });
  }, []);
  return (
    <>
      <section className="customer-experiences text-white py-5">
        <div className="customer-experiences-title">
          <div className="container-fluid">
            <h3 className="title mb-0">Customers</h3>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 d-flex align-items-center order-lg-2 order-1">
                <h3 className="mb-0">
                  E
                  <Image
                    src={EperiencesImg}
                    alt="Experiences"
                    className="experiences"
                  />
                  periences
                </h3>
              </div>
              <div className="col-lg-4 col-md-12 d-flex align-items-center order-lg-1 order-2">
                <p className="mb-0 para">
                  Best way to find out if something is running or not for
                  client. Read the studies from our happy customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="customer-experiences-boxes">
          {/* <!-- 1 Swiper --> */}

          <div className="swiper leftSwiper custom-swiper-width mb_40">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="tcustomer-card-tex">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 2 Swiper --> */}
          <div className="swiper rightSwiper custom-swiper-width">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={kristionImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Kristin Watson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerExpHome;
