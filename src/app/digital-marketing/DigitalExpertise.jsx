"use client";
import React from "react";
import experienceImg from "../../assets/images/Eperiences.svg";
import rightAccorianImg from "../../assets/images/right-accordian.svg";
import Image from "next/image";
import { toggleAccordion } from "../../../commFun";

const dDigitalExpertise = () => {
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
                  <h4>On-Page And Off-Page SEO</h4>
                  <p>
                    Unlock the full potential of your website with our
                    cutting-edge SEO services. We enhance your website’s content
                    and structure to align with search engine algorithms,
                    ensuring optimal visibility. Our strategic approach to
                    building high-quality backlinks boosts your online authority
                    and credibility, driving more traffic to your site.
                  </p>
                  <div className="acordian-text-our">
                    <h4>Technical SEO And Performance</h4>
                    <p>
                      With a focus on technical excellence, we ensure your site
                      is fast, secure, and easily crawlable by search engines.
                      Our holistic SEO strategies not only improve search engine
                      rankings but also enhance user engagement. This
                      comprehensive approach leads to increased conversions and
                      sustained business growth. Experience the transformative
                      power of SEO with us.
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
                  <h4>Targeted Audience Engagement and Community Management</h4>
                  <p>
                    Engage your audience with our tailored strategies for social
                    media marketing. We focus on building meaningful connections
                    by understanding your target demographic and creating
                    content that resonates. Our community management approach
                    ensures timely interactions, fostering brand loyalty and
                    encouraging conversations around your products or services.
                  </p>
                  <div className="acordian-text-our">
                    <h4>Content Creation and Brand Storytelling</h4>
                    <p>
                      Enhance your brand's narrative with visually appealing and
                      shareable content. We create engaging graphics and
                      impactful videos that tell your story, foster audience
                      engagement, and strengthen your brand identity across all
                      platforms.
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
                  <h4>Strategic Content Development and Distribution</h4>
                  <p>
                    Transform your brand's message with our strategic content
                    marketing services. We craft high-quality, relevant content
                    tailored to your audience's needs, ensuring it resonates and
                    drives engagement. Our multi-channel distribution approach
                    maximizes reach and impact, helping you build authority and
                    foster customer loyalty.
                  </p>
                  <div className="acordian-text-our">
                    <h4>Performance Tracking and Optimization</h4>
                    <p>
                      Achieve your content marketing goals with our detailed
                      performance tracking and optimization strategies. We
                      analyze key metrics to assess the effectiveness of your
                      content and make data-driven adjustments. This continuous
                      improvement process ensures your content delivers maximum
                      ROI, enhances brand visibility, and supports your business
                      objectives.
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
                  <h4>Targeted Email Campaigns and List Management</h4>
                  <p>
                    Maximize your outreach with targeted email campaigns
                    designed to engage your audience. We segment your email list
                    to deliver personalized content that resonates with your
                    subscribers. From captivating subject lines to compelling
                    calls to action, our email marketing strategies drive
                    conversions and build lasting customer relationships.
                  </p>
                  <div className="acordian-text-our">
                    <h4>Performance Analysis and A/B Testing</h4>
                    <p>
                      Optimize your email marketing efforts with in-depth
                      performance analysis and A/B testing. We track key metrics
                      such as open rates, click-through rates, and conversions
                      to evaluate campaign effectiveness. By testing different
                      elements, we refine your emails for better engagement,
                      ensuring every campaign contributes to your business
                      goals.
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
                  <h4>Strategic Campaign Setup and Ad Creation</h4>
                  <p>
                    Drive targeted traffic to your website with our strategic
                    Google Ads services. We design customized ad campaigns
                    tailored to your business goals, focusing on effective
                    keyword targeting and compelling ad copy. Our approach
                    ensures your ads reach the right audience at the right time,
                    maximizing visibility and conversions.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- saventh--> */}
            <div className="expertice-digital accordion-item">
              <button
                className="accordion-header"
                onClick={(event) => toggleAccordion(event.currentTarget)}
              >
                <span>Facebook Ads</span>
                <span className="accordion-icon">
                  <Image src={rightAccorianImg} alt="img" />
                </span>
              </button>
              <div className="accordion-content">
                <div className="our-expertise-text-accordian">
                  <h4> Test and Optimize</h4>
                  <p>
                    Run A/B tests on different versions of your ads to see which
                    performs better. Use Facebook Analytics to track performance
                    and adjust your strategy accordingly.
                  </p>
                  <div className="acordian-text-our">
                    <h4>Engaging Formats</h4>
                    <p>
                      Experiment with different ad formats, like carousel ads,
                      video ads, or slideshow ads. Use Facebook Stories for a
                      more ephemeral and engaging experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- eight--> */}
            <div className="expertice-digital accordion-item">
              <button
                className="accordion-header"
                onClick={(event) => toggleAccordion(event.currentTarget)}
              >
                <span>App Store Optimisation</span>
                <span className="accordion-icon">
                  <Image src={rightAccorianImg} alt="img" />
                </span>
              </button>
              <div className="accordion-content">
                <div className="our-expertise-text-accordian">
                  <h4>App Description</h4>
                  <p>
                    First Few Lines: Capture attention with a compelling opening
                    that outlines the app's main features and benefits. Detailed
                    Features: List and describe the primary functionalities of
                    the app. Use bullet points for easy readability. Call to
                    Action: Encourage users to download with phrases like
                    "Download now for a better experience!" or "Join our
                    community of users today!"
                  </p>
                  <div className="acordian-text-our">
                    <h4>Regular Updates</h4>
                    <p>
                      Personalized Tracking: Monitor your daily steps, calorie
                      intake, and water consumption effortlessly. Health
                      Insights: Get personalized insights based on your data to
                      help you reach your goals. Community Support: Join a
                      vibrant community of users and share your health journey.
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
