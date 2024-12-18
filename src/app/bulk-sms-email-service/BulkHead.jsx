"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { bulkHead, textTypingEffect } from "../../../commFun";

const BulkHead = () => {
  useEffect(() => {
    const typing = document.getElementById("bulk-sms-service-marketing");
    const uiTextContents = ["Bulk SMS", "Email"];
    const uiTextClassStart = '<span className="bulkemail">';
    const uiTextClassEnd = "</span>";

    // Avoid re-triggering the effect if already executed
    if (typing && typing.innerHTML === "") {
      const modifiedText = "Reach Your Audience with — & — Marketing ";
      textTypingEffect(
        typing,
        modifiedText,
        uiTextContents,
        uiTextClassStart,
        uiTextClassEnd
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
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Optional: Stop observing after animation
        }
      });
    };
    // bulk sms accordian text
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(".benifits-title1");

    targets.forEach((target) => {
      observer.observe(target);
    });
  }, []);

  return (
    <>
      {/* <!--===  bulk sms email service css  ===  --> */}
      <section className="bulk-sms-email-marketing">
        <div className="container">
          <div className="ui-app-text">
            <div className="ux-text">
              <div className="ui-moon-img"></div>
              {/* <!-- digital text the typing effect start --> */}
              <div className="boost-your-success">
                <div className="bulksms" id="bulk-sms-service-marketing"></div>
              </div>
              {/* <!-- digital text the typing effect end --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- /. ==== bulk sms email service css ==== --> */}
      {/* <!--====  Bulk Email Service section ====  --> */}
      <div className="bulk-email-service">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="bulk-text">
                <h1>
                  Bulk Email <span>Service</span>
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bulk-desc">
                <p>
                  Our Bulk Email service helps you maintain strong communication
                  with your customers through beautifully crafted emails. Key
                  features include
                </p>
              </div>
            </div>
          </div>
          <div className="benifits-border-bottom"></div>
          <div className="bulk-hover-design-text">
            {/* <!-- bulk service hover first --> */}
            {bulkHead?.map((data, index) => (
              <div className="bulk-service-email-desing" key={index}>
                <div className="benifits-arrow-des">
                  <div className="Benefits-of-design">
                    <div className="benifits-title1">
                      <h4>{data?.title}</h4>
                    </div>
                    <div className="benifits-descripation">
                      <p className="mb=0">{data?.description}</p>
                    </div>
                  </div>
                  <div className="benifits-btn-arrow">
                    <span className="material-symbols-outlined">
                      {" "}
                      call_made{" "}
                    </span>
                  </div>
                </div>
                <Image
                  src={data?.serviceImg}
                  alt="Benefits of image"
                  className="bolk-service-img"
                />
                {index !== 3 && <div className="benifits-border-bottom"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- == /.Bulk Email Service section ===  --> */}
    </>
  );
};

export default BulkHead;
