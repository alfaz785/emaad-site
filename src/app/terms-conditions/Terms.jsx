"use client";
import React, { useEffect } from "react";
import { MultiTypingEffect } from "../../../commFun";

const Terms = () => {
  const termsCondition = [
    { id: "terms1", text: "Terms & " },
    { id: "terms2", text: "Conditions" },
  ];

  useEffect(() => {
    MultiTypingEffect(termsCondition, 100);
  }, []);

  return (
    <>
      <div className="terms-conditions-section">
        <div className="container">
          <div className="terms-conditions-title">
            <h1 className="mb-0">
              <span id="terms1"> </span>
              <span className="highlight-jobs" id="terms2"></span>
            </h1>
            <p className="mb-0">
              Welcome to <span className="emaad-title">Emaad Infotech®. </span>{" "}
              These terms and conditions outline the rules and regulations for
              the use of Emaad Infotech's website, located at
              <a
                href="https://www.emaadinfotech.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="emaad-link"> www.emaadinfotech.com</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
