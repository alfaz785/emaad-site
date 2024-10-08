"use client";
import React, { useEffect } from "react";
import { MultiTypingEffect } from "../../../commFun";

const OurTeamHead = () => {
  const parts = [
    { id: "journey1", text: "Our Journey in" },
    { id: "journey2", text: "Images" },
  ];
  useEffect(() => {
    MultiTypingEffect(parts, 100);
  }, []);
  return (
    <>
      <div className="our-journey-section">
        <div className="container">
          <div className="our-journey-title">
            <h1 className="mb-0">
              <span id="journey1"> </span>
              <span className="highlight-jobs" id="journey2"></span>
            </h1>
            <p className="mb-0">
              Follow our company’s journey through a series of images capturing
              key milestones, significant projects, and memorable moments from
              our history.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamHead;
