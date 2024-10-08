"use client";

import React, { useEffect } from "react";
import { textTypingEffect } from "../../../commFun";

const DigitalHead = () => {
  useEffect(() => {
    const typing = document.getElementById("online-text-success");
    const uiTextContents = ["Success"];
    const uiTextClassStart = '<span className="success">';
    const uiTextClassEnd = "</span>";

    // Avoid re-triggering the effect if already executed
    if (typing && typing.innerHTML === "") {
      const modifiedText = "Boost Your Online —  ";
      textTypingEffect(
        typing,
        modifiedText,
        uiTextContents,
        uiTextClassStart,
        uiTextClassEnd,
      );
    }

    // Optional cleanup if the component unmounts
    return () => {
      if (typing) {
        typing.innerHTML = ""; // Clean up the text
      }
    };
  }, []);
  return (
    <>
      <section className="bost-online-success">
        <div className="container">
          <div className="ui-app-text">
            <div className="ux-text">
              {/* <!-- digital text the typing effect start --> */}
              <div className="boost-your-success">
                <div className="boost" id="online-text-success"></div>
              </div>
              {/* <!-- digital text the typing effect end --> */}
            </div>

            <div className="ui-to-info">
              <p>
                Empowering your digital presence, we offer tailored digital
                marketing services for software development companies. Our
                expert team uses innovative strategies and cutting-edge
                technology to boost your online visibility, drive targeted
                traffic, and increase conversions. Transform your digital
                landscape with us and propel your business forward.
              </p>
            </div>
          </div>
        </div>
        <div className="bordr"></div>
      </section>
    </>
  );
};

export default DigitalHead;
