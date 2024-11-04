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
                  <h4>Define Your Brand Voice and Aesthetic</h4>
                  <p>
                    Consistency is key! Develop a tone, color palette, and
                    visual style that reflects your brand’s personality and
                    values. This ensures recognizability across all platforms.
                  </p>
                  <div className="acordian-text-our">
                    <h4>Understand Your Audience</h4>
                    <p>
                      Research your audience demographics, interests, and
                      behaviors on different platforms. Tailor your content to
                      speak directly to their needs and preferences.
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
                  <h4>Overview</h4>
                  <p>
                    Repurposing content for various platforms maximizes reach
                    and engagement while reducing workload.
                  </p>
                  <div className="acordian-text-our">
                    <h4>Key Points</h4>
                    <p>
                      Transforming blog posts into videos, infographics, or
                      podcasts. Adapting content to fit the unique requirements
                      of platforms like Instagram, LinkedIn, or email. Benefits
                      include increased visibility, improved SEO, and extended
                      content lifespan.
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
                  <h4>Product Use Cases and Success</h4>
                  <p>
                    Share real-life use cases, customer testimonials, and
                    success stories. Highlight how your product or service has
                    helped solve specific problems or improve users' lives.
                    Include relatable scenarios and, if possible, brief metrics
                    to show measurable success. This gives potential customers a
                    clearer view of how they might benefit directly and builds
                    trust through authentic endorsements.
                  </p>
                  <div className="acordian-text-our">
                    <h4>Exclusive Educational Content or Tips</h4>
                    <p>
                      Offer tips, best practices, or industry insights related
                      to your product or service. For example, if you’re a SaaS
                      company, provide a series on optimizing workflows,
                      improving productivity, or the latest trends in your
                      niche. This positions you as an authority in the field and
                      keeps your audience engaged by adding real value to their
                      inbox.
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
                  <h4>Industry Innovations</h4>
                  <p>
                    Focus on how your company is contributing to innovations in
                    your industry. Highlight any new technologies, practices, or
                    products you’ve developed that set your company apart from
                    competitors. For example, if you're in the tech sector, you
                    could showcase advancements in AI or software solutions that
                    improve efficiency.
                  </p>
                  <div className="acordian-text-our">
                    <h4> Customer Success Stories</h4>
                    <p>
                      Share testimonials or case studies that demonstrate how
                      your products or services have positively impacted your
                      clients. This approach not only showcases your offerings
                      but also builds trust with potential customers by
                      highlighting real-world applications and outcomes.
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
