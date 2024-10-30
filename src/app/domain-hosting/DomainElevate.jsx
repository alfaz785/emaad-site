"use client";
import React, { useEffect } from "react";
import { MultiTypingEffect } from "../../../commFun";

const DomainElevate = () => {
  const parts = [
    { id: "part5", text: "Elevate Your Online Presence With Premium " },
    { id: "part6", text: "Domain" },
    { id: "ampersand", text: " & " },
    { id: "part7", text: "Hosting" },
    { id: "part8", text: "Services" },
  ];
  useEffect(() => {
    MultiTypingEffect(parts, 100);
  }, []);
  return (
    <>
      <div className="elevate-online-section">
        <div className="container">
          <div className="elevate-online-title">
            <h1 className="mb-0">
              <span id="part5"> </span>
              <span className="text-gradient" id="part6"></span>
              <span id="ampersand"></span>
              <span className="text-gradient" id="part7"></span>
              <span id="part8"></span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainElevate;
