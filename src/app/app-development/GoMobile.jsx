import React from "react";
import startImg from "../../assets/images/go-mobile-star.svg";
import Image from "next/image";

const GoMobile = () => {
  return (
    <>
      <div className="go-mobile-section">
        <div className="container">
          <div className="go-mobile-section-main">
            <div className="go-mobile-title">
              <h1 className="mb-0 go-mobile">
                Go <span className="highlight">Mobile</span> And Run Your
                Business From Anywhere
                <span style={{ marginLeft: 20 }}>
                  <Image
                    id="star-img"
                    src={startImg}
                    alt="star"
                    className="mobile-star"
                  />
                </span>
              </h1>
            </div>
            <p className="description mb-0 go-description" id="go-description">
              At <span>Emaad Infotech®</span>, we turn your vision into reality
              with cutting-edge, user-friendly mobile applications. Our expert
              team creates high-quality solutions designed to boost user
              engagement and drive business growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoMobile;
