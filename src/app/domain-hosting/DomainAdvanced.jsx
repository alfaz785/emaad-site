"use client";
import React, { useEffect } from "react";
import advancedImg from "../../assets/images/Advanced-Security-img.png";
import Image from "next/image";

const DomainAdvanced = () => {
  useEffect(() => {
    const paragraph = document.querySelector(".hosting-services");

    if (paragraph) {
      const words = paragraph.innerHTML
        .split(" ")
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      paragraph.innerHTML = words;

      const spans = paragraph.querySelectorAll("span");

      const tl = gsap.timeline({ paused: true });

      tl.from(spans, {
        duration: 0.3,
        opacity: 0,
        y: 20,
        stagger: 0.02,
        ease: "power2.inOut",
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

      observer.observe(paragraph);
    }
  }, []);
  return (
    <>
      <div className="advanced-security-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image">
                <Image
                  src={advancedImg}
                  alt="Advanced Security"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advanced-security-right">
                <p className="reliability mb-0">Reliability</p>
                <h5 className="mb-0">
                  24/7 Customer Support and Advanced Security
                </h5>
                <p className="hosting-services mb-0">
                  Our hosting services come with 24/7 customer support to assist
                  you with any issues and ensure your website remains online and
                  efficient. We also prioritize security, providing regular
                  backups, malware protection, SSL certificates, and
                  comprehensive firewall protection to safeguard your data and
                  maintain your website’s integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainAdvanced;
