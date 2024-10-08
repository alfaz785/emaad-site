import Image from "next/image";
import React from "react";
import insImg from "../assets/images/insta.png";
import twitterImg from "../assets/images/twitter.svg";
import facebookImg from "../assets/images/facebook.svg";
import whatsappImg from "../assets/images/whatsapp.svg";
import linkedinImg from "../assets/images/linkedin.svg";
import skypeImg from "../assets/images/skype.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-main-left">
                <h2 className="logo mb-0">EI.</h2>
                <div className="contact-info d-flex align-items-center gap-3">
                  <span className="material-symbols-outlined"> mail </span>
                  <a href="mailto:info@emaadinfotech.com">
                    info@emaadinfotech.com
                  </a>
                </div>
                <div className="social-icons">
                  <div className="social-icons-bg instagram-icon">
                    <a href="#">
                      <Image
                        width={100}
                        height={100}
                        src={insImg}
                        alt="Instagram"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg twitter-icon">
                    <a href="#">
                      <Image
                        width={100}
                        height={100}
                        src={twitterImg}
                        alt="Twitter"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg facebook-icon">
                    <a href="#">
                      <Image
                        width={100}
                        height={100}
                        src={facebookImg}
                        alt="Facebook"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg whatsapp-icon">
                    <a href="#">
                      <Image
                        width={100}
                        height={100}
                        src={whatsappImg}
                        alt="WhatsApp"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg linkedin-icon">
                    <a href="#">
                      <Image
                        width={100}
                        height={100}
                        src={linkedinImg}
                        alt="LinkedIn"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg skype-icon">
                    <a href="#">
                      <Image
                        width={100}
                        height={100}
                        src={skypeImg}
                        alt="Skype"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-main-right">
                <div className="">
                  <h5 className="mb-0">Products</h5>

                  <ul className="list-unstyled product">
                    <li>
                      <a href="#" className="cursor-scale small">
                        Hospital App
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Realtime Video Ads Screening App
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Grocery Delivery App
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Business Listing Software
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Community App
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Market Place Application Like Upwork
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Online Shopping Services
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt_60 explore_main">
                  <h5 className="mb-0">Explore</h5>
                  <ul className="list-unstyled explore">
                    <li>
                      <a href="#" className="cursor-scale small">
                        E-commerce Solution
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Mobile App Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Payment Gateway
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Domain & Hosting Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Aws Infrastructure Setup
                      </a>
                    </li>
                    <li>
                      <a href="#" className="cursor-scale small">
                        Data Analytics Specialist
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-12">
              <div className="footer-bottom-main">
                <p className="mb-0">
                  &copy; 2024 Emaad Infotech® All rights reserved.
                </p>
                <div className="footer-links">
                  <Link href="/terms-conditions" className="cursor-scale small">
                    Term & Condition
                  </Link>
                  <Link href="/privacy-policy" className="cursor-scale small">
                    Privacy Policy
                  </Link>
                  <Link href="/refund-policy" className="cursor-scale small">
                    Refund Policy
                  </Link>
                  <a href="#" className="cursor-scale small">
                    About Company
                  </a>
                  <a href="#" className="cursor-scale small">
                    Our Services
                  </a>
                  <a href="#" className="cursor-scale small">
                    Blog
                  </a>
                </div>
              </div>
              <h6 className="mb-0">EMAAD</h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
