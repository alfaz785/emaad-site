"use client";
import React, { useEffect } from "react";
import hover2Img from "../../assets/images/hover-2-image.png";
import hoverImg from "../../assets/images/hover-images.png";
import Image from "next/image";
import { textTypingEffect } from "../../../commFun";
import gsap from "gsap";

const UiService = () => {
  useEffect(() => {
    const typing = document.getElementById("typing-text");
    const uiTextContents = ["UI/UX Design"];
    const uiTextClassStart = '<span className="ui-text">';
    const uiTextClassEnd = "</span>";

    // Avoid re-triggering the effect if already executed
    if (typing && typing.innerHTML === "") {
      const modifiedText = "Expert — Services For Your Website Or App ";
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".Benefits-title h4", {
      opacity: 0,
      duration: 1,
      y: 50,
      scrollTrigger: {
        trigger: ".Benefits-title h4",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <>
      <div className="Benefits-of-service">
        <div className="container">
          <div className="Benefits-title">
            <h4>
              Benefits Of Our <strong> UI/UX Design</strong> Services
            </h4>
          </div>
          {/* <!-- //  benifits our accordian design start hover/1 --> */}
          <div className="Benefits-of-service-desc">
            <div className="benifits-arrow-des">
              <div className="Benefits-of-design">
                <div className="benifits-title1">
                  <h4>Enhanced User Engagement</h4>
                </div>
                <div className="benifits-descripation">
                  <p>
                    Our UI/UX design services are tailored to captivate and
                    retain users' attention. By seamlessly blending intuitive
                    interfaces with visually appealing designs, we create
                    digital experiences that users can't help but engage with.
                  </p>
                </div>
              </div>
              <div className="benifits-btn-arrow">
                <span className="material-symbols-outlined"> call_made </span>
              </div>
            </div>
            <Image
              src={hover2Img}
              alt="Benefits of image"
              className="Benefits-hover-image"
            />
            <div className="benifits-border-bottom"></div>
          </div>
          {/* <!-- //  benifits our accordian design start hover/2 --> */}
          <div className="benifits-design-accordian">
            <div className="benifits-arrow-des">
              <div className="Benefits-of-design">
                <div className="benifits-title1">
                  <h4>Increased Brand Loyalty</h4>
                </div>
                <div className="benifits-descripation">
                  <p>
                    Investing in superior UI/UX design isn't just about creating
                    a pretty interface; it's about building relationships. By
                    prioritizing user satisfaction and delight, we help
                    cultivate strong brand loyalty, turning users into loyal
                    advocates for your brand.
                  </p>
                </div>
              </div>
              <div className="benifits-btn-arrow">
                <span className="material-symbols-outlined"> call_made </span>
              </div>
            </div>
            <Image
              src={hoverImg}
              alt="Description of image"
              className="hover-image"
            />
            <div className="benifits-border-bottom"></div>
          </div>

          {/* <!-- //  benifits our accordian design start hover/3 --> */}
          <div className="benifits-design-accordian3">
            <div className="benifits-arrow-des">
              <div className="Benefits-of-design">
                <div className="benifits-title1">
                  <h4>Improve your SEO</h4>
                </div>
                <div className="benifits-descripation">
                  <p>
                    Google is continually upgrading its search algorithms. A
                    strong UX design helps businesses gain better SEO rankings.
                  </p>
                </div>
              </div>
              <div className="benifits-btn-arrow">
                <span className="material-symbols-outlined"> call_made </span>
              </div>
            </div>
            <Image
              src={hover2Img}
              alt="Description of image"
              className="benifits-hover-image3"
            />
            <div className="benifits-border-bottom"></div>
          </div>
          {/* <!-- //  benifits our accordian design start hover/4 --> */}
          <div className="benifits-design-accordian4">
            <div className="benifits-arrow-des">
              <div className="Benefits-of-design">
                <div className="benifits-title1">
                  <h4>Reduces Development Costs</h4>
                </div>
                <div className="benifits-descripation">
                  <p>
                    A skilled UX designer can easily build and implement your
                    ideas for testing and improvement, avoiding the need for
                    major modifications later.
                  </p>
                </div>
              </div>
              <div className="benifits-btn-arrow">
                <span className="material-symbols-outlined"> call_made </span>
              </div>
            </div>
            <Image
              src={hoverImg}
              alt="Description of image"
              className="benifits-hover-image4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UiService;
