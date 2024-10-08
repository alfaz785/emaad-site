import React from "react";
import UiUxImg from "../../assets/images/ui-ux-image.png";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <>
      {" "}
      <div className="why-choose-us-section">
        <div className="why-choose-sec">
          <div className="why-choose-img">
            <Image src={UiUxImg} alt="" />
          </div>
          <div className="container-fluid">
            <div className="why-choose-title-section">
              <div className="why-choose-button">
                <h4>Why Choose Us</h4>
              </div>
              <div className="choose-title mt_30">
                <h1 className="choose-title-1 ui-text-wrapper">
                  <span className="letter">E</span>
                  <span className="letter">l</span>
                  <span className="letter">e</span>
                  <span className="letter">v</span>
                  <span className="letter">e</span>
                  <span className="letter">n</span>
                  <span className="letter">t</span>{" "}
                  <span className="letter">y</span>
                  <span className="letter">o</span>
                  <span className="letter">u</span>
                  <span className="letter">r</span>{" "}
                  <span className="letter">b</span>
                  <span className="letter">r</span>
                  <span className="letter">a</span>
                  <span className="letter">n</span>
                  <span className="letter">d</span>
                  <span className="letter">w</span>
                  <span className="letter">i</span>
                  <span className="letter">t</span>
                  <span className="letter">h</span>
                  <span className="letter">o</span>
                  <span className="letter">u</span>
                  <span className="letter">r</span>{" "}
                  <span className="letter">U</span>
                  <span className="letter">I</span>
                  <span className="letter">/</span>
                  <span className="letter">U</span>
                  <span className="letter">X</span>
                  <span className="letter-wrapper"></span>
                  <span className="letter">s</span>
                  <span className="letter">e</span>
                  <span className="letter">r</span>
                  <span className="letter">v</span>
                  <span className="letter">i</span>
                  <span className="letter">c</span>
                  <span className="letter">e</span>
                  <span className="letter">s</span>
                </h1>
              </div>
              <div className="choose-text mt_20">
                <h5>Revolutionize Your Brand with Our UI/UX Expertise</h5>
              </div>
              <div className="choose-desc mt_20">
                <p>
                  Our UI/UX services are meticulously crafted to elevate your
                  brand to new heights, seamlessly blending stunning aesthetics
                  with intuitive functionality. Let us turn your digital vision
                  into an unforgettable reality, captivating audiences and
                  fostering lasting connections that propel your brand forward.
                </p>
              </div>
              <div className="get-quote">Get A Quote Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
