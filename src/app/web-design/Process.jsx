"use client";
import React, { useState } from "react";
import Image from "next/image";
import processImg from "../../assets/images/process.png";
import processTabImg from "../../assets/images/process-tab.svg";

const Process = () => {
  const [activeContent, setActiveContent] = useState(null); // To store the active content ID

  function showContent(contentId) {
    setActiveContent(contentId); // Set the clicked content ID as active
  }

  return (
    <>
      <div className="process-design">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="process-design-title">
                <h1>
                  Web Design
                  <span className="process-bg-img">
                    Process
                    <span className="process-bg">
                      <Image
                        height={"100%"}
                        width={"100%"}
                        src={processImg}
                        alt="img"
                      />
                    </span>
                  </span>
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="process-design-text">
                <p>
                  Welcome to our Web Design services, where innovation meets
                  functionality to create captivating digital experiences. At &nbsp;
                  <strong>Emaad Infotech</strong>, we specialize in crafting
                  bespoke websites tailored to your unique brand identity and
                  objectives.
                </p>
              </div>
            </div>
          </div>

          <div className="design-tabs-process d-flex justify-content-center gap-3">
            {/* Render tabs and content together */}
            {[...Array(6)].map((_, index) => {
              const contentId = `content-0${index + 1}`;
              return (
                <React.Fragment key={contentId}>
                  {console.log(activeContent === contentId)}{" "}
                  <div
                    className={`process-tab-design ${
                      activeContent === contentId ? "hide" : ""
                    }`}
                    onClick={() => showContent(contentId)}
                  >
                    <div className="process-content">
                      <div className="process-tex-No">
                        <h4>{`0${index + 1}.`}</h4>
                        <div className="border-procese"></div>
                        <div className="process-tab-text-content">
                          <h4>
                            {
                              [
                                "Wireframing",
                                "Responsive Design",
                                "Prototyping",
                                "Web Copy",
                                "UX Design",
                                "UI Design",
                              ][index]
                            }
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {activeContent === contentId && (
                    <div
                      id={contentId}
                      className="process-tab-design-content show"
                    >
                      <div className="process-card-tab">
                        <div className="procees-tab-No">
                          <h4>{`0${index + 1}.`}</h4>
                        </div>
                        <div className="process-tab-contant d-flex gap-3 align-items-center">
                          <div className="process-icon-tab">
                            <Image src={processTabImg} alt="img" />
                          </div>
                          <div className="tab-content-title">
                            <h4>
                              {
                                [
                                  "Wireframing",
                                  "Responsive Design",
                                  "Prototyping",
                                  "Web Copy",
                                  "UX Design",
                                  "UI Design",
                                ][index]
                              }
                            </h4>
                          </div>
                        </div>
                        <div className="border-procese"></div>
                        <div className="procees-content1">
                          <p>
                            {
                              [
                                "Wireframing is an essential step in the web design process that involves creating a visual blueprint of a website's structure and layout. It outlines the placement of key elements such as navigation menus, content areas, buttons, and images without focusing on design details like colors or typography.",
                                "Responsive Web Design is an approach to web development that ensures a website looks and functions well across a variety of devices and screen sizes. This means the website automatically adjusts its layout, images, and functionalities to provide an optimal viewing experience, whether accessed on a smartphone, tablet, laptop, or desktop computer.",
                                "Prototyping is a crucial phase in the web design process where interactive models of a website are developed to visualize and test its functionality, design, and user experience.",
                                "Web copy is essential for conveying your brand's voice, values, and personality. It helps establish a connection with your audience and sets you apart from competitors.",
                                "User Experience (UX) Design is a crucial aspect of the web design process that focuses on creating a seamless, intuitive, and enjoyable experience for users as they interact with a website. It involves understanding user behaviors, needs, and motivations through various research methods and applying these insights to design solutions that enhance user satisfaction and engagement.",
                                "User Interface (UI) Design: Crafting captivating interfaces for websites and apps. From color schemes to navigation, we ensure your digital presence is visually stunning and effortlessly navigable, enhancing user experience and achieving your goals.",
                              ][index]
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
