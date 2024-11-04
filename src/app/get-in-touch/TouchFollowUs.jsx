"use client";
import React from "react";
import whatsappImg from "../../assets/images/whatsapp.svg";
import twitterImg from "../../assets/images/twitter.svg";
import facebookImg from "../../assets/images/facebook.svg";
import linkedinImg from "../../assets/images/linkedin.svg";
import skypeImg from "../../assets/images/skype.svg";
import Image from "next/image";

const TouchFollowUs = () => {
  return (
    <>
      <div className="container follow-us-section ">
        <div className="row">
          <h4 class="follow-us-title">Follow Us</h4>

          <div className="col-lg-6">
            <div className="row">
              <div
                onClick={() =>
                  window.open("https://wa.me/919428901392", "_blank")
                }
                className="col-lg-6 col-md-6 col-sm-6 col-12 box"
              >
                <Image src={whatsappImg} alt="WhatsApp" />
              </div>
              <div
                onClick={() =>
                  window.open("https://x.com/EmaadInfotech", "_blank")
                }
                className="col-lg-6 col-md-6 col-sm-6 col-12 box"
              >
                <Image src={twitterImg} alt="Twitter" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/emaad.developer/",
                    "_blank"
                  )
                }
                className="col-lg-6 col-md-6 col-sm-6 col-12 box"
              >
                <Image src={facebookImg} alt="Facebook" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/emaad-infotech/",
                    "_blank"
                  )
                }
                className="col-lg-6 col-md-6 col-sm-6 col-12 box"
              >
                <Image src={linkedinImg} alt="LinkedIn" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="info-item-group">
              <div className="info-item">
                <p className="mb-0 address_text">Address</p>
                <div className="d-flex align-items-start gap-2 info-icon-data">
                  <div className="icon_bg">
                    <span className="material-symbols-outlined">
                      {" "}
                      location_on{" "}
                    </span>
                  </div>
                  <p className="mb-0">
                    D/308, Shantam - 7, RTO Circle, Himmatnagar, GJ, India,
                    383001
                  </p>
                </div>
              </div>
              <div className="info-item">
                <p className="mb-0 title_icon">General Enquiries</p>
                <div className="d-flex align-items-center gap-2 info-icon-data">
                  <div className="icon_bg">
                    <span className="material-symbols-outlined"> mail </span>
                  </div>
                  <a href="mailto:info@emaadinfotech.com">
                    info@emaadinfotech.com
                  </a>
                </div>
              </div>
              <div className="info-item">
                <p className="mb-0 title_icon">Phone Number</p>
                <div className="d-flex align-items-center gap-2 info-icon-data">
                  <div className="icon_bg">
                    <span className="material-symbols-outlined">
                      {" "}
                      phone_in_talk{" "}
                    </span>
                  </div>
                  <a href="tel:+919428901392">+91 94289 01392</a>
                  <a href="tel:+917600145260">+91 76001 45260</a>
                </div>
              </div>
              <div className="info-item">
                <p className="mb-0 title_icon">WhatsApp Number</p>
                <div className="d-flex align-items-center gap-2 info-icon-data">
                  <div className="icon_bg">
                    <Image src={whatsappImg} alt="WhatsApp" />
                  </div>
                  <a href="tel:+919428901392">+91 94289 01392</a>
                </div>
              </div>
              <div className="info-item">
                <p className="mb-0 title_icon">Skype ID</p>
                <div className="d-flex align-items-center gap-2 info-icon-data">
                  <div className="icon_bg">
                    <Image src={skypeImg} alt="img" />
                  </div>
                  <p className="mb-0">Emaad Infotech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouchFollowUs;
