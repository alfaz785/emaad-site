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
      <div className="container follow-us-section mt_100">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 box">
                <a href="https://wa.me/919428901392" target="_blank">
                  <Image src={whatsappImg} alt="WhatsApp" />
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 box">
                <a href="https://x.com/EmaadInfotech" target="_blank">
                  <Image src={twitterImg} alt="Twitter" />
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 box">
                <a
                  href="https://www.facebook.com/emaad.developer/"
                  target="_blank"
                >
                  <Image src={facebookImg} alt="Facebook" />
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 box">
                <a
                  href="https://www.linkedin.com/company/emaad-infotech/"
                  target="_blank"
                >
                  <Image src={linkedinImg} alt="LinkedIn" />
                </a>
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
