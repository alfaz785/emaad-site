"use client";
import React from "react";
import Image from "next/image";
import customeMobileImg from "../../assets/images/custom-mobile-app.png";
import androidImg from "../../assets/images/tab-android-app.png";
import iosAppImg from "../../assets/images/tab-iOS-app.png";
import crossPlatformImg from "../../assets/images/tab-cross-platform-app.png";
import ulStarImg from "../../assets/images/ul-star.svg";
import { openTab } from "../../../commFun";

const OurPlatform = () => {
  return (
    <>
      <div className="our-platforms-section">
        <div className="container">
          <div className="our-platforms-main">
            <div className="title" id="platforms">
              <h3 id="our-title">
                Our
                <span
                  style={{
                    background:
                      "linear-gradient(104.02deg, #2d9cdb 0%, #2dc97a 88.31%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Platforms
                </span>
                and Technologies
              </h3>
            </div>
            <p className="mb-0 title-para">
              To deliver top-notch custom mobile app development services, we
              utilize cutting-edge platforms and technologies, ensuring the
              creation of reliable and customization mobile solutions
            </p>

            <div className="unlock-tab-container mt_60">
              <div className="tab-header">
                <button
                  className="tab-link active"
                  onClick={(event) => openTab(event, "Tab1")}
                >
                  Custom Mobile App
                </button>
                <button
                  className="tab-link"
                  onClick={(event) => openTab(event, "Tab2")}
                >
                  iOS App
                </button>
                <button
                  className="tab-link"
                  onClick={(event) => openTab(event, "Tab3")}
                >
                  Android App
                </button>
                <button
                  className="tab-link"
                  onClick={(event) => openTab(event, "Tab4")}
                >
                  Cross-Platform App
                </button>
              </div>
              <div className="tab-content">
                <div
                  id="Tab1"
                  className="tab-pane"
                  style={{ display: "block" }}
                >
                  <div className="row">
                    <div className="col-lg-5">
                      <Image src={customeMobileImg} alt="Mobile" />
                    </div>
                    <div className="col-lg-7">
                      <ul className="services-list">
                        <li>
                          <Image src={ulStarImg} alt="ulStarImg" />
                          End-to-End Solutions
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            We manage the entire development lifecycle, from
                            concept and design to coding, testing, and
                            deployment.
                          </p>
                        </li>

                        <li>
                          <Image src={ulStarImg} alt="ulStarImg" />
                          User-Centric Design
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Our apps feature intuitive and engaging interfaces
                            tailored to your target audience's needs.
                          </p>
                        </li>
                        <li>
                          <Image src={ulStarImg} />
                          Scalability
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            We build scalable apps that grow with your business
                            and adapt to market changes.
                          </p>
                        </li>
                        <li>
                          <Image src={ulStarImg} />
                          Seamless Integration
                        </li>
                        <li>
                          <p className="mb-0">
                            Our apps integrate smoothly with your existing
                            systems and third-party services for enhanced
                            functionality.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- second tab content --> */}
                <div id="Tab2" className="tab-pane">
                  <div className="row">
                    <div className="col-lg-5">
                      <Image src={iosAppImg} alt="iPhone" />
                    </div>
                    <div className="col-lg-7">
                      <ul className="services-list">
                        <li>
                          <Image src={ulStarImg} />
                          Native Performance
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Leverage Swift and Objective-C to create
                            high-performance native iOS apps.
                          </p>
                        </li>

                        <li>
                          <Image src={ulStarImg} />
                          App Store Compliance
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Ensure all applications meet Apple's stringent
                            guidelines for smooth submission and approval.
                          </p>
                        </li>
                        <li>
                          <Image src={ulStarImg} />
                          Innovative Features
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Incorporate the latest iOS features such as ARKit,
                            SiriKit, and CoreML to enhance user experience.
                          </p>
                        </li>
                        <li>
                          <Image src={ulStarImg} />
                          Security
                        </li>
                        <li>
                          <p className="mb-0">
                            Implement robust security measures to protect user
                            data and ensure app integrity.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- third tab content --> */}
                <div id="Tab3" className="tab-pane">
                  <div className="row">
                    <div className="col-lg-5">
                      <Image
                        src={androidImg}
                        alt="Android Mobile"
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                    <div className="col-lg-7">
                      <ul className="services-list">
                        <li>
                          <Image src={ulStarImg} />
                          Diverse Device Support
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Leverage Swift and Objective-C to create
                            high-performance native iOS apps.
                          </p>
                        </li>

                        <li>
                          <Image src={ulStarImg} />
                          Google Play Store Optimization
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Ensure all applications meet Apple's stringent
                            guidelines for smooth submission and approval.
                          </p>
                        </li>
                        <li>
                          <Image src={ulStarImg} />
                          Rich User Experience
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Utilize the latest Android features and Material
                            Design principles to create engaging user
                            interfaces.
                          </p>
                        </li>
                        <li>
                          <Image src={ulStarImg} />
                          Customization
                        </li>
                        <li>
                          <p className="mb-0">
                            Offer high levels of customization to meet the
                            unique needs of different user groups.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- fourth tab content --> */}
                <div id="Tab4" className="tab-pane">
                  <div className="row">
                    <div className="col-lg-5">
                      <Image src={crossPlatformImg} alt="Laptop with Mobile" />
                    </div>
                    <div className="col-lg-7">
                      <ul className="services-list">
                        <li>
                          <Image src={ulStarImg} />
                          Cost-Effective
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Reduce development costs and time by building a
                            single app for both platforms.
                          </p>
                        </li>

                        <li>
                          <Image src={ulStarImg} />
                          Consistent Experience
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Ensure a uniform user experience across iOS and
                            Android platforms.
                          </p>
                        </li>
                        <li>
                          <Image src={ulStarImg} />
                          Rapid Development
                        </li>
                        <li className="custom-margin">
                          <p className="mb-0">
                            Utilize frameworks like React Native and Flutter to
                            accelerate development timelines.
                          </p>
                        </li>
                        <li>
                          <Image src={ulStarImg} />
                          Maintainability
                        </li>
                        <li>
                          <p className="mb-0">
                            Simplify maintenance and updates with a single
                            codebase for both platforms.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPlatform;
