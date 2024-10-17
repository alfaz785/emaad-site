"use client";

import React, { useEffect } from "react";
import { MultiTypingEffect } from "../../../commFun";
import gsap from "gsap";

const Privacy = () => {
  const partsPrivacy = [
    { id: "privacy1", text: "Privacy " },
    { id: "privacy2", text: "Policy" },
  ];
  useEffect(() => {
    MultiTypingEffect(partsPrivacy, 100);
  }, []);
  useEffect(() => {
    gsap.from(".privacy-policy-pra ", {
      opacity: 0,
      y: 30,
      duration: 2.5,
      delay: 1,
    });
  }, []);
  return (
    <>
      <div className="privacy-policy-section">
        <div className="container">
          <div className="privacy-policy-title">
            <h1 className="mb-0">
              <span id="privacy1"> </span>
              <span className="highlight-titel" id="privacy2"></span>
            </h1>
            <p className="privacy-policy-pra">
              At <strong>Emaad Infotech®</strong>, we prioritize your privacy.
              This Privacy Policy explains how we collect, use, and protect your
              information when you use our services and website at
              <span className="policy-mail">www.emaadinfotech.com.</span> By
              using our services, you consent to the practices described in this
              policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
