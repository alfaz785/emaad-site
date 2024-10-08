"use client";

import React, { useEffect } from "react";
import privacyImg from "../../assets/images/privacy-img.png";
import Image from "next/image";
import { InformationPrivacyFC } from "../../../commFun";

const Information = () => {
  useEffect(() => {
    InformationPrivacyFC();
  }, []);

  return (
    <>
      <div className="informatin-sharing-section">
        <div className="container">
          <div className="information-titel">
            <h4>
              Information <span>Sharing</span>
            </h4>
            <p>
              We take your privacy seriously and ensure that your personal
              information is shared only
            </p>
            <p>
              under specific and controlled circumstances. Here are the
              scenarios where information sharing may occur
            </p>
          </div>
          <div className="privacy-hover-accordian-design">
            {/* <!-- first --> */}
            <div className="privacy-design-service">
              <div className="Benefits-of-design">
                <div className="privacy-title">
                  <h4>Third-Party Service Providers</h4>
                </div>
                <div className="privacy-descripation">
                  <p>
                    We may share your information with trusted third-party
                    service providers who assist us in operating our business,
                    such as payment processors, hosting providers, and marketing
                    agencies. These providers are contractually obligated to
                    protect your information and use it only for the purposes we
                    specify.
                  </p>
                </div>
              </div>
              <div className="privacy-btn-arrow">
                <span className="material-symbols-outlined"> call_made </span>
              </div>
            </div>

            <div className="benifits-border-bottom"></div>
            {/* <!-- second --> */}
            <div className="privacy-design-service">
              <div className="Benefits-of-design">
                <div className="privacy-title">
                  <h4>Legal Requirements</h4>
                </div>
                <div className="privacy-descripation">
                  <p>
                    We may disclose your information if required to do so by law
                    or in response to valid requests by public authorities, such
                    as a court or government agency.
                  </p>
                </div>
              </div>
              <div className="privacy-btn-arrow">
                <span className="material-symbols-outlined"> call_made </span>
              </div>
            </div>

            <div className="benifits-border-bottom"></div>
            {/* <!-- thired --> */}
            <div className="privacy-design-service">
              <div className="Benefits-of-design">
                <div className="privacy-title">
                  <h4>Business Transfers</h4>
                </div>
                <div className="privacy-descripation">
                  <p>
                    In the event of a merger, acquisition, or sale of assets,
                    your personal information may be transferred as part of the
                    transaction. We will notify you of any such change in
                    ownership or control of your personal information.
                  </p>
                </div>
              </div>
              <div className="privacy-btn-arrow">
                <span className="material-symbols-outlined"> call_made </span>
              </div>
            </div>

            <div className="benifits-border-bottom"></div>
          </div>
          <div className="privacy-policy-Jurisdiction">
            <div className="privacy-policy-img">
              <Image id="rotateImg" src={privacyImg} alt="" />
            </div>
            <div className="privacy-text-policy">
              <h4>Jurisdiction </h4>
              <p>
                This website is developed, maintained, operated by Emaad
                Infotech Himmatnagar, India. Himmatnagar and Ahmedabad shall be
                the legal venue for any or all dispute(s) if arising out from or
                in connection with this website by any mean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
