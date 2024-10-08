"use client";
import satisfactionImg from "../assets/images/client-satisfaction.png";
import Image from "next/image";

const PortfolioHome = () => {
  return (
    <section class="portfolio-v5 awesome_section mb-5">
      <div class="container">
        <div class="row">
          <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-6 col-sm-12">
            <div class="sec-title-wrapper">
              <h4 class="sec-title-1 text-wrapper">
                <span class="letter">A</span>
                <span class="letter">w</span>
                <span class="letter">e</span>
                <span class="letter">s</span>
                <span class="letter">o</span>
                <span class="letter">m</span>
                <span class="letter">e</span>
                <span class="letter-wrapper"></span>
                <br />

                <span class="letter">P</span>
                <span class="letter">r</span>
                <span class="letter">o</span>
                <span class="letter">j</span>
                <span class="letter">e</span>
                <span class="letter">c</span>
                <span class="letter">t</span>
                <span class="letter">s</span>
              </h4>
            </div>
          </div>
          <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-12">
            <div class="awesome_blog_text" id="animated-section">
              <p class="mb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-9 col-md-8">
            <div class="pp-slider-wrapper">
              <div class="swiper portfolio__project-slider">
                <div class="swiper-wrapper">
                  <div class="swiper-slide pp-slide">
                    <div class="pp-slide-img">
                      <a href="#">
                        <Image
                          src={satisfactionImg}
                          alt="Portfolio Thumbnail"
                        />
                      </a>
                      <div class="overlay">
                        <div class="overlay-text">E-COMMERCE</div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide pp-slide">
                    <div class="pp-slide-img">
                      <a href="#">
                        <Image
                          src={satisfactionImg}
                          alt="Portfolio Thumbnail"
                        />
                      </a>
                      <div class="overlay">
                        <div class="overlay-text">Real Estate</div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide pp-slide">
                    <div class="pp-slide-img">
                      <a href="#">
                        <Image
                          src={satisfactionImg}
                          alt="Portfolio Thumbnail"
                        />
                      </a>
                      <div class="overlay">
                        <div class="overlay-text">Online Medicine</div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide pp-slide">
                    <div class="pp-slide-img">
                      <a href="#">
                        <Image
                          src={satisfactionImg}
                          alt="Portfolio Thumbnail"
                        />
                      </a>
                      <div class="overlay">
                        <div class="overlay-text">NGO Charity</div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide pp-slide">
                    <div class="pp-slide-img">
                      <a href="#">
                        <Image
                          src={satisfactionImg}
                          alt="Portfolio Thumbnail"
                        />
                      </a>
                      <div class="overlay">
                        <div class="overlay-text">
                          Housing Society Management
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide pp-slide">
                    <div class="pp-slide-img">
                      <a href="#">
                        <Image
                          src={satisfactionImg}
                          alt="Portfolio Thumbnail"
                        />
                      </a>
                      <div class="overlay">
                        <div class="overlay-text">Business Directory</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pp-next swipper-btn">prev</div>
              <div class="pp-prev swipper-btn">Next</div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4">
            <div class="swiper portfolio__project-thumbs">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="pp-slide-thumb">
                    <h3 class="pp-slide-title">E-COMMERCE</h3>
                    <p>Website</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="pp-slide-thumb">
                    <h3 class="pp-slide-title">Real Estate</h3>
                    <p>Website</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="pp-slide-thumb">
                    <h3 class="pp-slide-title">Online Medicine</h3>
                    <p>Website & Application</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="pp-slide-thumb">
                    <h3 class="pp-slide-title">NGO Charity</h3>
                    <p>Website</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="pp-slide-thumb">
                    <h3 class="pp-slide-title">Housing Society Management</h3>
                    <p>Mother's Day Website</p>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="pp-slide-thumb">
                    <h3 class="pp-slide-title">Business Directory</h3>
                    <p>Website</p>
                  </div>
                </div>
                <svg
                  width="1044"
                  height="19"
                  viewBox="0 0 1044 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H207.1C207.563 1.71776 209.581 0 212 0C214.419 0 216.437 1.71776 216.9 4H414.1C414.563 1.71776 416.581 0 419 0C421.419 0 423.437 1.71776 423.9 4H621.1C621.563 1.71776 623.581 0 626 0C628.419 0 630.437 1.71776 630.9 4H828.1C828.563 1.71776 830.581 0 833 0C835.419 0 837.437 1.71776 837.9 4H1035.1C1035.56 1.71776 1037.58 0 1040 0C1042.76 0 1045 2.23858 1045 5C1045 7.76142 1042.76 10 1040 10C1037.58 10 1035.56 8.28224 1035.1 6H837.9C837.437 8.28224 835.419 10 833 10C830.581 10 828.563 8.28224 828.1 6H630.9C630.437 8.28224 628.419 10 626 10C623.581 10 621.563 8.28224 621.1 6H423.9C423.437 8.28224 421.419 10 419 10C416.581 10 414.563 8.28224 414.1 6H216.9C216.437 8.28224 214.419 10 212 10C209.581 10 207.563 8.28224 207.1 6H9.89998Z"
                    fill="#434C5D"
                  />
                  <mask
                    id="mask0_0_1"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="1044"
                    height="19"
                  >
                    <path
                      d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H207.1C207.563 1.71776 209.581 0 212 0C214.419 0 216.437 1.71776 216.9 4H414.1C414.563 1.71776 416.581 0 419 0C421.419 0 423.437 1.71776 423.9 4H621.1C621.563 1.71776 623.581 0 626 0C628.419 0 630.437 1.71776 630.9 4H828.1C828.563 1.71776 830.581 0 833 0C835.419 0 837.437 1.71776 837.9 4H1035.1C1035.56 1.71776 1037.58 0 1040 0C1042.76 0 1045 2.23858 1045 5C1045 7.76142 1042.76 10 1040 10C1037.58 10 1035.56 8.28224 1035.1 6H837.9C837.437 8.28224 835.419 10 833 10C830.581 10 828.563 8.28224 828.1 6H630.9C630.437 8.28224 628.419 10 626 10C623.581 10 621.563 8.28224 621.1 6H423.9C423.437 8.28224 421.419 10 419 10C416.581 10 414.563 8.28224 414.1 6H216.9C216.437 8.28224 214.419 10 212 10C209.581 10 207.563 8.28224 207.1 6H9.89998Z"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_0_1)">
                    {/* <!-- First step --> */}
                    <rect
                      class="mask"
                      x="0"
                      y="-49"
                      width="150"
                      height="99"
                      fill="#FFFFFF"
                    />
                    {/* <!-- Second step --> */}
                    <rect
                      class="mask"
                      x="207"
                      y="-49"
                      width="150"
                      height="99"
                      fill="#FFFFFF"
                    />
                    {/* <!-- Third step --> */}
                    <rect
                      class="mask"
                      x="414"
                      y="-49"
                      width="150"
                      height="99"
                      fill="#FFFFFF"
                    />
                    {/* <!-- Fourth step --> */}
                    <rect
                      class="mask"
                      x="621"
                      y="-49"
                      width="150"
                      height="99"
                      fill="#FFFFFF"
                    />
                    {/* <!-- Fifth step --> */}
                    <rect
                      class="mask"
                      x="828"
                      y="-49"
                      width="150"
                      height="99"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHome;
