"use client";
import React, { useEffect } from "react";
import impotanceImg from "../../assets/images/the-importance-img.png";
import Image from "next/image";
import { MainDomainPeragraphFC, UiDomainTitleFC } from "../../../commFun";

const DomainImportance = () => {
  useEffect(() => {
    UiDomainTitleFC();
    MainDomainPeragraphFC();
  }, []);

  return (
    <>
      <div class="the-importance-section">
        <div class="container">
          <div class="the-importance-section">
            <div class="header-image">
              <Image
                src={impotanceImg}
                alt="laptop Image"
                style={{ width: "100%" }}
              />
            </div>
            <section class="domain-importance domain-design-section">
              {/* <!-- <div class="domain-title-main">
              <h4 class=" mb-0">The Importance of a Domain Name</h4>
            </div> --> */}
              <div class="domain-title-main">
                <h4 class="mb-0">
                  <span class="letter">T</span>
                  <span class="letter">h</span>
                  <span class="letter">e</span>
                  <span class="letter">I</span>
                  <span class="letter">m</span>
                  <span class="letter">p</span>
                  <span class="letter">o</span>
                  <span class="letter">r</span>
                  <span class="letter">t</span>
                  <span class="letter">a</span>
                  <span class="letter">n</span>
                  <span class="letter">c</span>
                  <span class="letter">e</span> <span class="letter">o</span>
                  <span class="letter">f</span> <span class="letter">a</span>
                  <span class="letter">D</span>
                  <span class="letter">o</span>
                  <span class="letter">m</span>
                  <span class="letter">a</span>
                  <span class="letter">i</span>
                  <span class="letter">n</span>
                  <span class="letter">N</span>
                  <span class="letter">a</span>
                  <span class="letter">m</span>
                  <span class="letter">e</span>
                </h4>
              </div>

              <p class="domain-importance-para">
                A domain name is the unique identity of your brand on the
                internet. Registering a domain name through a recognized
                registrar gives your business a distinct personality and makes
                it easily identifiable. The right domain name not only boosts
                your brand’s credibility but also improves search engine
                rankings and drives traffic to your website. Our domain
                registration services offer a wide variety of extensions,
                including A domain name is the unique identity of your brand on
                the internet. Registering a domain name through a recognized
                registrar gives your business a distinct personality and makes
                it easily identifiable. The right domain name not only boosts
                your brand’s credibility but also improves search engine
                rankings and drives traffic to your website. Our domain
                registration services offer a wide variety of extensions,
                including
              </p>
              <div class="domain-extensions-group">
                <span class="domain-extension">.com</span>
                <span class="domain-extension">.in</span>
                <span class="domain-extension">.edu</span>
                <span class="domain-extension">.org</span>
                <span class="domain-extension">.net</span>
              </div>
              <p class="mt-4 mb-0 domain-importance-para">
                We help you choose and secure the perfect domain name that
                aligns with your brand's identity and business goals.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainImportance;
