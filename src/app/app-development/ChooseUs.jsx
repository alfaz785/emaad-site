import React from "react";
import experiencedImg from "../../assets/images/Experienced Team.png";
import userCentrictImg from "../../assets/images/User-Centric-Approach.png";
import qualityAssuranceImg from "../../assets/images/Quality-Assurance.png";
import postLanchImg from "../../assets/images/Post-Launch-Support.png";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <>
      <div className="Why-choose-us-main">
        <div className="container-fluid custom-container">
          <div className="Why-choose-us-main">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-start why-choose-text-section">
                <h3>
                  Why.<span className="bg-container">Choose. </span>Us.
                </h3>
                <p className="mb-0 commitment">
                  At <span>Emaad Infotech®</span>, we stand out in the mobile
                  app development industry due to our commitment to excellence
                  and client satisfaction. Here's why you should choose us:
                </p>

                <div className="btn_wrapper custom_display_none">
                  <a
                    href="#"
                    className="wc-btn-primary btn btn-outline-light mt_40"
                  >
                    Quick <br />
                    Inquiry
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                    <span className="circle"></span>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2"></div>
              <div className="col-lg-6 col-md-12 d-flex flex-wrap feature-section h-100">
                <div className="col-12 col-sm-6">
                  <div className="why-choose-box position-relative">
                    <div className="overlay"></div>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      src={experiencedImg}
                      alt="transport-card"
                    />
                    <div className="why-choose-box_text">
                      <h5>Experienced Team</h5>
                      <div className="circle">
                        <span className="material-symbols-outlined">
                          {" "}
                          call_made{" "}
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Experienced Team</h4>
                      <p className="mb-0">
                        We provide continuous support and updates to keep your
                        app relevant and effective.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="why-choose-box position-relative">
                    <div className="overlay"></div>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      src={userCentrictImg}
                      alt="transport-card"
                    />
                    <div className="why-choose-box_text">
                      <h5>User Centric Approach</h5>
                      <div className="circle">
                        <span className="material-symbols-outlined">
                          {" "}
                          call_made{" "}
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h4>User Centric Approach</h4>
                      <p className="mb-0">
                        We provide continuous support and updates to keep your
                        app relevant and effective.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="why-choose-box position-relative">
                    <div className="overlay"></div>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      src={qualityAssuranceImg}
                      alt="transport-card"
                    />
                    <div className="why-choose-box_text">
                      <h5>Quality Assurance</h5>
                      <div className="circle">
                        <span className="material-symbols-outlined">
                          {" "}
                          call_made{" "}
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Quality Assurance</h4>
                      <p className="mb-0">
                        We provide continuous support and updates to keep your
                        app relevant and effective.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="why-choose-box position-relative">
                    <div className="overlay"></div>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      src={postLanchImg}
                      alt="transport-card"
                    />
                    <div className="why-choose-box_text">
                      <h5>Post Launch Support</h5>
                      <div className="circle">
                        <span className="material-symbols-outlined">
                          {" "}
                          call_made{" "}
                        </span>
                      </div>
                    </div>
                    <div className="content">
                      <h4>Post Launch Support</h4>
                      <p className="mb-0">
                        We provide continuous support and updates to keep your
                        app relevant and effective.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_wrapper custom_display_block d-none">
                <a
                  href="#"
                  className="wc-btn-primary btn btn-outline-light mt_40"
                >
                  Quick <br />
                  Inquiry
                  <span className="material-symbols-outlined">
                    {" "}
                    arrow_right_alt{" "}
                  </span>
                  <span className="circle"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
