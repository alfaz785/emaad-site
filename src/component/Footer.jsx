import Image from "next/image";
import React from "react";
import insImg from "../assets/images/insta.png";
import twitterImg from "../assets/images/twitter.svg";
import facebookImg from "../assets/images/facebook.svg";
import whatsappImg from "../assets/images/whatsapp.svg";
import linkedinImg from "../assets/images/linkedin.svg";
import skypeImg from "../assets/images/skype.svg";
import footerCallImg from "../assets/images/footer-call-icone.svg";
import footerLocationImg from "../assets/images/footer-location-icon.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-main-left">
                <h2 className="logo">EI.</h2>
                <div className="contact-info d-flex align-items-center gap-3">
                  <span className="material-symbols-outlined"> mail </span>
                  <a href="mailto:info@emaadinfotech.com">
                    info@emaadinfotech.com
                  </a>
                </div>
                <div class="contact-info d-flex align-items-center gap-3  ">
                  <div class="icon_bg">
                    <Image src={footerCallImg} alt="FooterCallImg" />
                  </div>
                  <a href="tel:+917600145260">+91 76001 45260</a>
                  <a href="tel:+917600145260">+91 76001 45260</a>
                </div>
                <div class="contact-info d-flex align-items-start gap-3 ">
                  <div class="icon_bg">
                    <Image src={footerLocationImg} alt="footerLocationImg" />
                  </div>
                  <p class="mb-0">
                    D/308, Shantam - 7, RTO Circle, Himmatnagar, GJ, India,
                    383001
                  </p>
                </div>
                <div className="social-icons">
                  <div className="social-icons-bg instagram-icon">
                    <a
                      href="https://www.instagram.com/emaadinfotech/"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={insImg}
                        alt="Instagram"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg twitter-icon">
                    <a href="https://x.com/EmaadInfotech" target="_blank">
                      <Image
                        width={100}
                        height={100}
                        src={twitterImg}
                        alt="Twitter"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg facebook-icon">
                    <a
                      href="https://www.facebook.com/emaad.developer/"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={facebookImg}
                        alt="Facebook"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg whatsapp-icon">
                    <a
                      href="https://wa.me/919428901392"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={whatsappImg}
                        alt="WhatsApp"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg linkedin-icon">
                    <a
                      href="https://www.linkedin.com/company/emaad-infotech/"
                      target="_blank"
                    >
                      <Image
                        width={100}
                        height={100}
                        src={linkedinImg}
                        alt="LinkedIn"
                      />
                    </a>
                  </div>
                  <div className="social-icons-bg skype-icon">
                    <a href="skype:Tohid Kovadiya?chat" target="_blank">
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
                      <Link href="https://hospital-management.emaad-infotech.com/" className="cursor-scale small">
                        Hospital Webapp
                      </Link>
                    </li>

                    <li>
                      <Link href="/get-in-touch" className="cursor-scale small">
                        Grocery Delivery Web & App
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.emaadinfotech.com/business-directory/" className="cursor-scale small">
                        Business Listing Software
                      </Link>
                    </li>
                    <li>
                      <Link href="/get-in-touch" className="cursor-scale small">
                        Community Webapp
                      </Link>
                    </li>

                    <li>
                      <Link href="https://emaad-infotech.com/product/online-shopping/" className="cursor-scale small">
                        E-commerce Solution
                      </Link>
                    </li>
                    <li>
                      <Link href="https://aspire-job-portal.vercel.app/" className="cursor-scale small">
                      Job Portal
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://emaad-infotech.com/product/tours-travel/"
                        className="cursor-scale small"
                      >
                        Tours & Travels Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://emaad-infotech.com/product/tours-travel/"
                        className="cursor-scale small"
                      >
                         Real Estate  Property Management
                      </Link>
                    </li>
                    <li>
                      <Link href="/get-in-touch" className="cursor-scale small">
                        Realtime Video Ads Screening App
                      </Link>
                    </li>
                    <li>
                      <Link href="/get-in-touch" className="cursor-scale small">
                        Market Place Application Like Upwork
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt_60 explore_main">
                  <h5 className="mb-0">Explore</h5>
                  <ul className="list-unstyled explore">
                    <li>
                      <Link
                        href="/app-development"
                        className="cursor-scale small"
                      >
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/get-in-touch" className="cursor-scale small">
                        Payment Gateway
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/domain-hosting"
                        className="cursor-scale small"
                      >
                        Domain & Hosting Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/digital-marketing"
                        className="cursor-scale small"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="/get-in-touch" className="cursor-scale small">
                        Aws Infrastructure Setup
                      </Link>
                    </li>
                    <li>
                      <Link href="/get-in-touch" className="cursor-scale small">
                        Data Analytics Specialist
                      </Link>
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
                  &copy; 2024 Emaad Infotech®&nbsp;
                  {/* <a href="https://www.emaadinfotech.com/" target="_blank">
                    Emaad Infotech®
                  </a>{" "} */}
                  All rights reserved.
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
                  <Link href="/about-us" className="cursor-scale small">
                    About Company
                  </Link>
                  <Link href="/our-services" className="cursor-scale small">
                    Our Services
                  </Link>
                  <Link href="" className="cursor-scale small">
                    Blog
                  </Link>
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
