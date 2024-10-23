"use client";
import React from "react";
import experienceImg from "../../assets/images/Eperiences.svg";
import rightAccorianImg from "../../assets/images/right-accordian.svg";
import Image from "next/image";
import { toggleAccordion } from "../../../commFun";

const DigitalExpertise = () => {
  return (
    <>
      <div className="out-expertise-section">
        <div className="container">
          <div className="our-experse-title">
            <h4>
              Our E<Image src={experienceImg} alt="img" />
              pertise
            </h4>
            <p>
              In our digital marketing services, we harness a diverse range of
              capabilities to help software development companies achieve their
              online goals. Here’s a look at what we offer
            </p>
          </div>
        </div>
        {/* <!-- accordian start --> */}

        <div className="our-expertise-accordian">
          <div className="accordion">
            {/* <!-- first --> */}
            <div className="expertice-digital accordion-item">
              <button
                className="accordion-header"
                onClick={(event) => toggleAccordion(event.currentTarget)}
              >
                <span>Search Engine Optimization (SEO)</span>
                <span className="accordion-icon">
                  <Image src={rightAccorianImg} alt="img" />
                </span>
              </button>
              <div className="accordion-content">
                <div className="our-expertise-text-accordian">
                  <h4>On-Page and Off-Page SEO</h4>
                  <p>
                    Unlock the full potential of your website with our
                    cutting-edge SEO services. We enhance your website’s content
                    and structure to align with search engine algorithms,
                    ensuring optimal visibility. Our strategic approach to
                    building high-quality backlinks boosts your online authority
                    and credibility, driving more traffic to your site.
                  </p>
                  <div className="acordian-text-our">
                    <h4>On-Page and Off-Page SEO</h4>
                    <p>
                      Unlock the full potential of your website with our
                      cutting-edge SEO services. We enhance your website’s
                      content and structure to align with search engine
                      algorithms, ensuring optimal visibility. Our strategic
                      approach to building high-quality backlinks boosts your
                      online authority and credibility, driving more traffic to
                      your site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- second --> */}
            <div className="expertice-digital accordion-item">
              <button
                className="accordion-header"
                onClick={(event) => toggleAccordion(event.currentTarget)}
              >
                <span>Pay-Per-Click (PPC) Advertising</span>
                <span className="accordion-icon">
                  <Image src={rightAccorianImg} alt="img" />
                </span>
              </button>
              <div className="accordion-content">
                <div className="our-expertise-text-accordian">
                  <h4>
                    Strategic Campaign Planning and Creative Ad Development
                  </h4>
                  <p>
                    Maximize your online advertising ROI with our expert PPC
                    services. We begin with strategic campaign planning,
                    developing targeted campaigns tailored to reach your ideal
                    audience. Our creative ad development focuses on crafting
                    compelling, high-converting ads that capture attention and
                    drive clicks, ensuring your message resonates with potential
                    customers.
                  </p>
                  <div className="acordian-text-our">
                    <h4>Performance Analytics and Optimization</h4>
                    <p>
                      To ensure your campaigns perform at their best, we provide
                      detailed performance analytics. By monitoring key metrics
                      and continuously optimizing your campaigns, we achieve
                      maximum ROI. Whether you're aiming to increase brand
                      awareness, generate leads, or drive sales, our PPC
                      services deliver measurable results that align with your
                      business goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- thired --> */}
            <div className="expertice-digital accordion-item">
              <button
                className="accordion-header"
                onClick={(event) => toggleAccordion(event.currentTarget)}
              >
                <span>Social Media Marketing</span>
                <span className="accordion-icon">
                  <Image src={rightAccorianImg} alt="img" />
                </span>
              </button>
              <div className="accordion-content">
                <div className="our-expertise-text-accordian">
                  <h4>On-Page and Off-Page SEO</h4>
                  <p>
                    Unlock the full potential of your website with our
                    cutting-edge SEO services. We enhance your website’s content
                    and structure to align with search engine algorithms,
                    ensuring optimal visibility. Our strategic approach to
                    building high-quality backlinks boosts your online authority
                    and credibility, driving more traffic to your site.
                  </p>
                  <div className="acordian-text-our">
                    <h4>On-Page and Off-Page SEO</h4>
                    <p>
                      Unlock the full potential of your website with our
                      cutting-edge SEO services. We enhance your website’s
                      content and structure to align with search engine
                      algorithms, ensuring optimal visibility. Our strategic
                      approach to building high-quality backlinks boosts your
                      online authority and credibility, driving more traffic to
                      your site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- fourth --> */}
            <div className="expertice-digital accordion-item">
              <button
                className="accordion-header"
                onClick={(event) => toggleAccordion(event.currentTarget)}
              >
                <span>Content Marketing</span>
                <span className="accordion-icon">
                  <Image src={rightAccorianImg} alt="img" />
                </span>
              </button>
              <div className="accordion-content">
                <div className="our-expertise-text-accordian">
                  <h4>On-Page and Off-Page SEO</h4>
                  <p>
                    Unlock the full potential of your website with our
                    cutting-edge SEO services. We enhance your website’s content
                    and structure to align with search engine algorithms,
                    ensuring optimal visibility. Our strategic approach to
                    building high-quality backlinks boosts your online authority
                    and credibility, driving more traffic to your site.
                  </p>
                  <div className="acordian-text-our">
                    <h4>On-Page and Off-Page SEO</h4>
                    <p>
                      Unlock the full potential of your website with our
                      cutting-edge SEO services. We enhance your website’s
                      content and structure to align with search engine
                      algorithms, ensuring optimal visibility. Our strategic
                      approach to building high-quality backlinks boosts your
                      online authority and credibility, driving more traffic to
                      your site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- fiveth --> */}
            <div className="expertice-digital accordion-item">
              <button
                className="accordion-header"
                onClick={(event) => toggleAccordion(event.currentTarget)}
              >
                <span>Email Marketing</span>
                <span className="accordion-icon">
                  <Image src={rightAccorianImg} alt="img" />
                </span>
              </button>
              <div className="accordion-content">
                <div className="our-expertise-text-accordian">
                  <h4>On-Page and Off-Page SEO</h4>
                  <p>
                    Unlock the full potential of your website with our
                    cutting-edge SEO services. We enhance your website’s content
                    and structure to align with search engine algorithms,
                    ensuring optimal visibility. Our strategic approach to
                    building high-quality backlinks boosts your online authority
                    and credibility, driving more traffic to your site.
                  </p>
                  <div className="acordian-text-our">
                    <h4>On-Page and Off-Page SEO</h4>
                    <p>
                      Unlock the full potential of your website with our
                      cutting-edge SEO services. We enhance your website’s
                      content and structure to align with search engine
                      algorithms, ensuring optimal visibility. Our strategic
                      approach to building high-quality backlinks boosts your
                      online authority and credibility, driving more traffic to
                      your site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- sixth --> */}
            <div className="expertice-digital accordion-item">
              <button
                className="accordion-header"
                onClick={(event) => toggleAccordion(event.currentTarget)}
              >
                <span>Google Ads</span>
                <span className="accordion-icon">
                  <Image src={rightAccorianImg} alt="img" />
                </span>
              </button>
              <div className="accordion-content">
                <div className="our-expertise-text-accordian">
                  <h4>On-Page and Off-Page SEO</h4>
                  <p>
                    Unlock the full potential of your website with our
                    cutting-edge SEO services. We enhance your website’s content
                    and structure to align with search engine algorithms,
                    ensuring optimal visibility. Our strategic approach to
                    building high-quality backlinks boosts your online authority
                    and credibility, driving more traffic to your site.
                  </p>
                  <div className="acordian-text-our">
                    <h4>On-Page and Off-Page SEO</h4>
                    <p>
                      Unlock the full potential of your website with our
                      cutting-edge SEO services. We enhance your website’s
                      content and structure to align with search engine
                      algorithms, ensuring optimal visibility. Our strategic
                      approach to building high-quality backlinks boosts your
                      online authority and credibility, driving more traffic to
                      your site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- saventh--> */}
            <div className="expertice-digital accordion-item">
              <button
                className="accordion-header"
                onClick={(event) => toggleAccordion(event.currentTarget)}
              >
                <span>Email Marketing</span>
                <span className="accordion-icon">
                  <Image src={rightAccorianImg} alt="img" />
                </span>
              </button>
              <div className="accordion-content">
                <div className="our-expertise-text-accordian">
                  <h4>Email Marketing</h4>
                  <p>
                    Unlock the full potential of your website with our
                    cutting-edge SEO services. We enhance your website’s content
                    and structure to align with search engine algorithms,
                    ensuring optimal visibility. Our strategic approach to
                    building high-quality backlinks boosts your online authority
                    and credibility, driving more traffic to your site.
                  </p>
                  <div className="acordian-text-our">
                    <h4>On-Page and Off-Page SEO</h4>
                    <p>
                      Unlock the full potential of your website with our
                      cutting-edge SEO services. We enhance your website’s
                      content and structure to align with search engine
                      algorithms, ensuring optimal visibility. Our strategic
                      approach to building high-quality backlinks boosts your
                      online authority and credibility, driving more traffic to
                      your site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- accordian end --> */}
      </div>
    </>
  );
};

export default DigitalExpertise;
