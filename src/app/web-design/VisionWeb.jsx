"use client";
import React, { useEffect } from "react";
import serviceImg from "../../assets/images/services-section-bg.png";
import Image from "next/image";
import { textTypingEffect } from "../../../commFun";

const VisionWeb = () => {
  useEffect(() => {
    const typing = document.getElementById("vision-typing-text");
    const uiTextContents = ["Vision", "Web Design"];
    const uiTextClassStart = '<span class="vision-text">';
    const uiTextClassEnd = "</span>";

    // Avoid re-triggering the effect if already executed
    if (typing && typing.innerHTML === "") {
      const modifiedText = "Unveil Your — With Our — Solutions ";
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
      <section className="vision-web-design">
        <div className="container">
          <div className="ui-app-text">
            <div className="ux-text">
              <div className="ui-moon-img">
                <div className="ui-bg-img">
                  <Image
                    height={"100%"}
                    width={"100%"}
                    src={serviceImg}
                    alt="img"
                  />
                </div>
              </div>

              {/* <!-- Initial text the typing effect start --> */}
              <div className="vision-web-design-text">
                <div className="vision" id="vision-typing-text"></div>
              </div>
              {/* <!-- Initial text the typing effect end --> */}
            </div>

            <div className="ui-to-info">
              <p>
                Start with a brief introduction to your web design services,
                highlighting your expertise and experience in creating stunning
                and functional websites.
              </p>
            </div>
          </div>
        </div>
        <div className="bordr"></div>
      </section>
    </>
  );
};

export default VisionWeb;
