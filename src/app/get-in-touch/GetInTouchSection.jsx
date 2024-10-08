"use client";
import React, { useEffect } from "react";
import { MultiTypingEffect } from "../../../commFun";

const GetInTouchSection = () => {
  const parts = [
    { id: "touch1", text: "Let’s get in" },
    { id: "touch2", text: "Touch" },
  ];
  useEffect(() => {
    MultiTypingEffect(parts, 100);
  }, []);
  return (
    <>
      <div className="get-in-touch-section">
        <div className="container">
          <div className="get-in-touch-title">
            <h1 className="mb-0">
              <span id="touch1"> </span>
              <span className="highlight-jobs" id="touch2"></span>
            </h1>
            <p className="get-in-touch-para">
              Great! We're excited to hear from you and let's start something
              special togerter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouchSection;
