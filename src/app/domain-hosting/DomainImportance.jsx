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
      <div className="the-importance-section">
        <div className="container">
          <div className="the-importance-section">
            <div className="header-image">
              <Image
                src={impotanceImg}
                alt="laptop Image"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <section className="domain-importance domain-design-section">
              {/* <!-- <div className="domain-title-main">
              <h4 className=" mb-0">The Importance of a Domain Name</h4>
            </div> --> */}
              <div className="domain-title-main">
                <h4 className="mb-0">
                  {"The Importance Of A Unique Domain Name"
                    ?.split(" ")
                    .map((word, wordIndex) => (
                      <span key={wordIndex} className="word">
                        {word.split("").map((letter, letterIndex) => (
                          <span key={letterIndex} className="letter">
                            {letter}
                          </span>
                        ))}
                        <span className="space">&nbsp;</span>{" "}
                        {/* Adds space between words */}
                      </span>
                    ))}
                </h4>
              </div>

              <p className="domain-importance-para">
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
              <div className="domain-extensions-group">
                <span className="domain-extension">.com</span>
                <span className="domain-extension">.in</span>
                <span className="domain-extension">.edu</span>
                <span className="domain-extension">.org</span>
                <span className="domain-extension">.net</span>
              </div>
              <p className="mt-4 mb-0 domain-importance-para">
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
