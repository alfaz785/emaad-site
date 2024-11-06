import ProcessImg from "@/component/ProcessImg";
import Image from "next/image";
import React from "react";
import ulStarImg from "../../assets/images/ul-star.svg";
import ourProcess from "../../assets/images/Our-process-img.svg";

const ProcessApp = () => {
  return (
    <>
      <ProcessImg />

      {/* <!-- process-section-data start --> */}
      <div className="container">
        <div className="process-section-data">
          <h3 className="mb-0">
            Our
            <Image src={ourProcess} alt="arrow" /> Process
          </h3>
          <p className="lead">
            At <span className="company-name">Emaad Infotech®</span>, our
            streamlined development approach ensures a seamless journey from
            concept to launch. Here’s how we transform your vision into a
            dynamic mobile app:
          </p>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStarImg} alt="star" />
                <h4 className="phase-title mb-0">Discovery and Planning</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>
                    We begin with a thorough understanding of your business
                    needs, target audience, and project goals.
                  </span>
                </li>
                <li>
                  <span>
                    Detailed planning and strategy formulation to ensure a clear
                    roadmap for development.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStarImg} alt="star" />
                <h4 className="phase-title mb-0">Design and Prototyping</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>
                    Creating wireframes and prototypes to visualize the app
                    structure and flow.
                  </span>
                </li>
                <li>
                  <span>
                    Designing the user interface with a focus on aesthetics and
                    usability.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStarImg} alt="star" />
                <h4 className="phase-title mb-0">Development</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>
                    Coding the app using the latest technologies and frameworks.
                  </span>
                </li>

                <li>
                  <span>
                    Integrating necessary features and functionalities tailored
                    to your requirements.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStarImg} alt="star" />
                <h4 className="phase-title mb-0">Testing</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>
                    Comprehensive testing to identify and fix any bugs or
                    issues.
                  </span>
                </li>

                <li>
                  <span>
                    Ensuring the app is optimized for performance and user
                    experience.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="row phase-text-main border-bottom-0">
            <div className="col-md-4">
              <div className="d-flex align-items-start phase-title-img">
                <Image src={ulStarImg} alt="star" />
                <h4 className="phase-title mb-0">Launch</h4>
              </div>
            </div>

            <div className="col-md-8">
              <ul>
                <li>
                  <span>Deploying the app to the respective app stores.</span>
                </li>
                <li>
                  <span>Monitoring the launch to ensure a smooth release.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /* ==========process section End ============  --> */}
    </>
  );
};

export default ProcessApp;
