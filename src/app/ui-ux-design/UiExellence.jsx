import React from "react";
import designTool from "../../assets/images/design-tool.png";
import excludeImg from "../../assets/images/Exclude.png";
import Image from "next/image";
import Technologies from "../web-development/Technologies";
const UiExellence = () => {
  return (
    <>
      {" "}
      <div className="design-Excellence">
        <div className="container">
          <div className="design-title-Excellence">
            <div className="design-Excellence-title">
              <Image className="circale-design" src={designTool} alt="" />
              <div className="design-text">
                <h4>
                  Design Excellence Powered by Cutting-Edge T
                  <Image className="Excellence-img" src={excludeImg} alt="" />
                  ls
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slider main container --> */}
        <Technologies isUiUX={true} />
      </div>
    </>
  );
};

export default UiExellence;
