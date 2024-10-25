"use client";
import React, { useEffect } from "react";
import startImg from "../../assets/images/go-mobile-star.svg";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const GoMobile = () => {
  useEffect(() => {
    gsap.to(".mobile-star", {
      duration: 2.5,
      delay: 1,
      rotate: 360,
      repeat: -1,
      yoyo: true,
    });

    gsap.from(".go-mobile", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });

    function splitTextToCharsWithSpaces(element) {
      if (element) {
        const words = element.innerText.split(" ");
        const charactersWithSpaces = words
          .map((word) => word.split("").concat("&nbsp;"))
          .flat();
        element.innerHTML = charactersWithSpaces
          .map((char) => `<span class="char">${char}</span>`)
          .join("");
      }
    }

    const text2 = document.getElementById("our-title");
    splitTextToCharsWithSpaces(text2);

    const chars2 = document.querySelectorAll("#our-title .char");
    if (chars2) {
      for (let index = 4; index <= 13; index++) {
        chars2[index]?.setAttribute(
          "style",
          `
                background: linear-gradient(104.02deg, #2d9cdb 0%, #2dc97a 88.31%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              `,
        );
      }
      gsap.registerPlugin(ScrollTrigger);

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#platforms",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl2.from(chars2, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "elastic.out(1, 0.5)",
        stagger: 0.05,
      });
    }
  }, []);
  return (
    <>
      <div className="go-mobile-section">
        <div className="container">
          <div className="go-mobile-section-main">
            <div className="go-mobile-title">
              <h1 className="mb-0 go-mobile">
                Go <span className="highlight">Mobile</span> And Run Your
                Business From Anywhere
                <span style={{ marginLeft: 20 }}>
                  <Image
                    id="star-img"
                    src={startImg}
                    alt="star"
                    className="mobile-star"
                  />
                </span>
              </h1>
            </div>
            <p className="description mb-0 go-description" id="go-description">
              At <span>Emaad Infotech®</span>, we turn your vision into reality
              with cutting-edge, user-friendly mobile applications. Our expert
              team creates high-quality solutions designed to boost user
              engagement and drive business growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoMobile;
