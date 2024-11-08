"use client";
import React, { useEffect } from "react";
import { MultiTypingEffect } from "../../../commFun";

const CareerSection = () => {
  const careerSection = [
    { id: "part1", text: "We Don’t Offer " },
    { id: "part2", text: "Jobs. " },
    { id: "part3", text: " We Offer " },
    { id: "part4", text: "Careers." },
  ];
  useEffect(() => {
    MultiTypingEffect(careerSection, 100);
  }, []);
  return (
    <>
      <div className="careers-section">
        <div className="container">
          <div className="careers-section-title">
            <h1 className="mb-0">
              <span id="part1"> </span>
              <span className="highlight-jobs" id="part2"></span>
              <span className="we-offer" id="part3"></span>
            </h1>
            <h2 id="part4"></h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerSection;
