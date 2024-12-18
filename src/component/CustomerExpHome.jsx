"use client";
import { useEffect } from "react";
import EperiencesImg from "../assets/images/Eperiences.svg";
import educationImg from "../assets/images/education.png";
import packwellImg from "../assets/images/packwell.png";
import dancheImg from "../assets/images/Danche.png";
import universalImg from "../assets/images/Universal.png";
import alamanImg from "../assets/images/alaman.png";
import aspireImg from "../assets/images/aspire.png";
import mawadahImg from "../assets/images/mawadah.png";
import mpathicImg from "../assets/images/mpathic.png";
import urduImg from "../assets/images/urdu.png";
import stitleImg from "../assets/images/stitle.png";
import icuImg from "../assets/images/icu.png";
import Image from "next/image";
import { gsap } from "gsap";

const CustomerExpHome = () => {
  
  useEffect(() => {
    // Initialize the left swiper
    const leftSwiper = new Swiper(".leftSwiper", {
      spaceBetween: 10,
      slidesPerView: "auto",
      loop: true,
      autoplay: {
        pauseOnMouseEnter: true,
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 5000,
    });

    // Add hover event listeners to control left swiper autoplay
    document
      .querySelectorAll(".leftSwiper .swiper-slide")
      .forEach((slide) => {
        slide.addEventListener("mouseenter", () => {
          leftSwiper.autoplay.stop();
        });
        slide.addEventListener("mouseleave", () => {
          leftSwiper.autoplay.start();
        });
      });

    // Initialize the right swiper
    const rightSwiper = new Swiper(".rightSwiper", {
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

    // Add hover event listeners to control right swiper autoplay
    document
      .querySelectorAll(".rightSwiper .swiper-slide")
      .forEach((slide) => {
        slide.addEventListener("mouseenter", () => {
          rightSwiper.autoplay.stop();
        });
        slide.addEventListener("mouseleave", () => {
          rightSwiper.autoplay.start();
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
        { threshold: 0.1 }
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
      <section className="customer-experiences text-white ">
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
                      src={educationImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                      width={"100%"}
                      height={"100%"}
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
                        <span className="author-name">Darlene Robertson</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={packwellImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “Amazing support from these people. Our website got rank
                        in just a few months after engaging with them. Purely
                        dedicated and surely supportive group specialists.
                        Thanks, Team Emaad”.
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">
                          Packwell Traders, India
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={dancheImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ They understood my requirements very well and create a
                        custom module as per my direction. Thanks, team Emaad
                        Infotech. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">
                          The Danche Foundation, Dunwoody, USA
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={universalImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ I really love the design they made. So elegant and
                        full of rich colors.”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">
                          Universal Proline, Atlanta, USA
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={alamanImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ Online presence really makes a difference nowadays. I
                        got a nice website and they advertised it very well. I
                        definitely got an increase in sell. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">
                          Al Aman Goat Farm, Idar
                        </span>
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
                      src={aspireImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                      width={"100%"}
                      height={"100%"}
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ Emaad Infotech delivered an exceptional website for
                        us—quick, professional, and impactful. Our online reach
                        has soared!”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Job-Portal Aspire</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={mawadahImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “At Emaad Infotech, we create top-tier web and app
                        solutions that elevate your business and engage your
                        audience. Trust us for the best results!”.
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Mawadah</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={mpathicImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ Looking for exceptional web and app development? Emaad
                        Infotech specializes in delivering innovative,
                        high-quality solutions to help your business succeed. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Mpathic Family</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={urduImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ At Emaad Infotech, we specialize in WhatsApp marketing
                        that connects you directly with your customers. Our
                        targeted strategies ensure your message reaches the
                        right audience, boosting engagement and driving
                        results!”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Musalih, Oman</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={stitleImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ Emaad Infotech brings your ideas to life with expert
                        web and app development. Experience the difference in
                        quality and functionality with us! ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Sanjar Dairy</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="customer-card">
                  <div className="customer-card-content">
                    <Image
                      src={icuImg}
                      alt="Kristin Watson"
                      className="customer-card-image"
                    />
                    <div className="customer-card-text">
                      <p className="quote mb-0">
                        “ Looking for exceptional web and app development? Emaad
                        Infotech specializes in delivering innovative,
                        high-quality solutions to help your business succeed. ”
                      </p>
                      <p className="author mb-0">
                        <span className="material-symbols-outlined face">
                          call_made
                        </span>
                        <span className="author-name">Internet Care Unit</span>
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
