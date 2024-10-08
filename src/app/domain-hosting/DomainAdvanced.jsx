import React from "react";
import advancedImg from "../../assets/images/Advanced-Security-img.png";
import Image from "next/image";

const DomainAdvanced = () => {
  return (
    <>
      <div class="advanced-security-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="image">
                <Image
                  src={advancedImg}
                  alt="Advanced Security"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="advanced-security-right">
                <p class="reliability mb-0">Reliability</p>
                <h5 class="mb-0">
                  24/7 Customer Support and Advanced Security
                </h5>
                <p class="hosting-services mb-0">
                  Our hosting services come with 24/7 customer support to assist
                  you with any issues and ensure your website remains online and
                  efficient. We also prioritize security, providing regular
                  backups, malware protection, SSL certificates, and
                  comprehensive firewall protection to safeguard your data and
                  maintain your website’s integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainAdvanced;
