"use client";
import React, { useEffect } from "react";
import designErro from "../../assets/images/design-errow.png";
import Image from "next/image";

const UiUxHead = () => {
  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.1, 
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    };
    
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(".benifits-title1");

    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);
  return (
    <>
      {" "}
      <section className="ui-text-design">
        <div className="container">
          <div className="ui-app-text">
            <div className="ux-text">
              {/* <!-- Initial text the typing effect start --> */}
              <div className="ui-typing-text">
                <div className="text1ui" id="typing-text"></div>
              </div>
              {/* <!-- Initial text the typing effect end --> */}

              <div className="designer-errows">
                <div className="design-errow-img">
                  <Image src={designErro} alt="img" />
                </div>
                <div className="design-btn">
                  <h4>Designer</h4>
                </div>
              </div>
            </div>

            <div className="ui-to-info">
              <p>
                Welcome to our UI/UX design hub, where user experience reigns
                supreme in crafting successful digital products. Our tailored
                services aim not just to meet but surpass user expectations,
                guaranteeing intuitive and delightful interactions with your
                product. Services aim not just to meet but surpass user
                expectations, guaranteeing intuitive and delightful interactions
                with your product.
              </p>
            </div>
          </div>
        </div>
        <div className="bordr"></div>
      </section>
    </>
  );
};

export default UiUxHead;
