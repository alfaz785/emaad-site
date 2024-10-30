"use client";

import React from "react";
import { useEffect } from "react";
import customeArrow from "../assets/images/custome-arrow.png";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";

const HomeHead = () => {
  useEffect(() => {
    const checkbox = document.querySelector(".checkbox");
    const section = document.querySelector(".grow-toggel-section");
    const cursor = document.querySelector(".cursor");
    const cursorScale = document.querySelectorAll(".cursor-scale");

    let mousX = 0,
      mouseY = 0;

    // Checkbox change event listener
    const handleCheckboxChange = () => {
      if (checkbox.checked) {
        section?.classList.add("dark");
      } else {
        section?.classList.remove("dark");
      }
    };

    // Add the checkbox listener
    checkbox?.addEventListener("change", handleCheckboxChange);

    // GSAP animation for cursor movement
    const cursorAnimation = gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: () => {
        gsap.set(cursor, {
          css: {
            left: mousX,
            top: mouseY,
          },
        });
      },
    });

    // Mousemove event listener for updating mouse position
    const handleMouseMove = (e) => {
      mousX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cursor scaling based on hovered elements
    cursorScale.forEach((link) => {
      const handleMouseLeave = () => {
        cursor.classList.remove("cursor-main");
        cursor.classList.remove("cursor-small");
      };
      const handleMouseMoveOverLink = () => {
        cursor.classList.add("cursor-main");
        if (link.classList.contains("small")) {
          cursor.classList.remove("cursor-main");
          cursor.classList.add("cursor-small");
        }
      };

      link.addEventListener("mouseleave", handleMouseLeave);
      link.addEventListener("mousemove", handleMouseMoveOverLink);

      // Clean up listeners on unmount
      return () => {
        link.removeEventListener("mouseleave", handleMouseLeave);
        link.removeEventListener("mousemove", handleMouseMoveOverLink);
      };
    });

    // Clean up when component unmounts
    return () => {
      checkbox?.removeEventListener("change", handleCheckboxChange);
      window.removeEventListener("mousemove", handleMouseMove);
      cursorAnimation.kill(); // Kill GSAP animation on unmount
    };
  }, []);
  useEffect(() => {
    const rainContainer = document.querySelector(".rain-container");
    const background = ["aqua", "red", "limegreen", "white", "yellow"];

    const amount = 10;
    let i = 0;

    if (rainContainer) {
      while (i < amount) {
        // Creating an Element
        const drop = document.createElement("i");

        // CSS Properties for raindrop
        const raindropProperties = {
          width: Math.random() + 1 + "px",
          positionX: Math.floor(Math.random() * window.innerWidth) + "px",
          delay: Math.random() * -50 + "s",
          duration: Math.random() + 1 + 7 + "s",
          bg:
            background.length > 0
              ? background[Math.floor(Math.random() * background.length)]
              : "#3498db",
          opacity: Math.random() + 0.1,
        };

        // Setting Styles for raindrop
        drop.style.width = raindropProperties.width;
        drop.style.left = raindropProperties.positionX;
        drop.style.animationDelay = raindropProperties.delay;
        drop.style.animationDuration = raindropProperties.duration;
        drop.style.background = raindropProperties.bg;
        drop.style.opacity = raindropProperties.opacity;

        // Appending the raindrop to the raindrop container
        rainContainer.appendChild(drop);
        i++;
      }
    }
  }, []);
  return (
    <>
      <div className="rain-container">
        <div className="grow-toggel-section">
          <div className="growwith-section">
            <div className="info">
              <h1>CONSULTING, PROGRAMMING & DESIGN</h1>
            </div>
            <div className="grow-text">
              <h1>we support</h1>
              <span className="material-symbols-outlined">call_received</span>
            </div>
          </div>
          <div className="grow-titel"></div>
          {/* <!-- toggle button --> */}
          <div className="theme">
            <h1>gr</h1>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="checkbox-label">
              <span className="ball"></span>
            </label>
            <h1>wth</h1>
          </div>
          {/* <!-- toggle button end --> */}
          <div className="grow-business-text">
            <div className="business-icon">
              <Image src={customeArrow} alt="custome-arrow" />
            </div>
            <div className="business-text">
              <h1>of your business</h1>
            </div>
          </div>
          <div className="grow-with-info">
            <p>
              We turn great ideas into working products we focus on good
              communication and understanding your business
            </p>
          </div>

          {/* <!-- button --> */}
          <div className="growth-contact-button">
            <Link href="/get-in-touch" className="grow-contact-button">
              Contact Us <span className="material-symbols-outlined">east</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHead;
