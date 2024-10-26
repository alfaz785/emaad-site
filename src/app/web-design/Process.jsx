"use client";
import React from "react";
import Image from "next/image";
import processImg from "../../assets/images/process.png";

const Process = () => {
  function showContent(contentId) {
    // Hide all contents
    var contents = document.querySelectorAll(".process-tab-design-content");
    contents.forEach(function (content) {
      content.classList.remove("show");
    });

    // Remove 'hide' class from all tabs
    var tabs = document.querySelectorAll(".process-tab-design");
    tabs.forEach(function (tab) {
      tab.classList.remove("hide");
    });
    // Show the selected content
    var content = document.getElementById(contentId);
    if (content) {
      content.classList.add("show");
    }
    // Add 'hide' class to the clicked tab
    var clickedTab = document.querySelector(
      "[onclick=\"showContent('" + contentId + "')\"]",
    );
    if (clickedTab) {
      clickedTab.classList.add("hide");
    }
  }

  return (
    <>
      <div className="process-design">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="process-design-title">
                <h1>
                  Web Design
                  <span className="process-bg-img">
                    Process
                    <span className="process-bg">
                      <Image
                        height={"100%"}
                        width={"100%"}
                        src={processImg}
                        alt="img"
                      />
                    </span>
                  </span>
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="process-design-text">
                <p>
                  Welcome to our Web Design services, where innovation meets
                  functionality to create captivating digital experiences. At
                  <strong>Emaad Infotech</strong>, we specialize in crafting
                  bespoke websites tailored to your unique brand identity and
                  objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="design-tabs-process d-flex justify-content-center gap-3">
            <div
              className="process-tab-design"
              onClick={() => showContent("content-01")}
            >
              <div className="process-content">
                <div className="process-tex-No">
                  <h4>01.</h4>
                  <div className="border-procese"></div>
                  <div className="process-tab-text-content">
                    <h4>Wireframing</h4>
                  </div>
                </div>
              </div>
            </div>

            <div id="content-01" className="process-tab-design-content">
              <div className="process-card-tab">
                <div className="procees-tab-No">
                  <h4>01.</h4>
                </div>
                <div className="process-tab-contant d-flex gap-3 align-items-center">
                  <div className="process-icon-tab">
                    <Image src={processImg} alt="img" />
                  </div>
                  <div className="tab-content-title">
                    <h4>Wireframing</h4>
                  </div>
                </div>
                <div className="border-procese"></div>
                <div className="procees-content1">
                  <p>
                    Responsive Web Design is an approach to web development that
                    ensures a website looks and functions well across a variety
                    of devices and screen sizes. This means the website
                    automatically adjusts its layout, images, and
                    functionalities to provide an optimal viewing experience,
                    whether accessed on a smartphone, tablet, laptop, or desktop
                    computer.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="process-tab-design"
              onClick={() => showContent("content-02")}
            >
              <div className="process-content">
                <div className="process-tex-No">
                  <h4>02.</h4>
                  <div className="border-procese"></div>
                  <div className="process-tab-text-content">
                    <h4>Responsive Design</h4>
                  </div>
                </div>
              </div>
            </div>

            <div id="content-02" className="process-tab-design-content">
              <div className="process-card-tab">
                <div className="procees-tab-No">
                  <h4>02.</h4>
                </div>
                <div className="process-tab-contant d-flex gap-3 align-items-center">
                  <div className="process-icon-tab">
                    <Image src={processImg} alt="img" />
                  </div>
                  <div className="tab-content-title">
                    <h4>Responsive Design</h4>
                  </div>
                </div>
                <div className="border-procese"></div>
                <div className="procees-content1">
                  <p>
                    Responsive Web Design is an approach to web development that
                    ensures a website looks and functions well across a variety
                    of devices and screen sizes. This means the website
                    automatically adjusts its layout, images, and
                    functionalities to provide an optimal viewing experience,
                    whether accessed on a smartphone, tablet, laptop, or desktop
                    computer.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="process-tab-design"
              onClick={() => showContent("content-03")}
            >
              <div className="process-content">
                <div className="process-tex-No">
                  <h4>03.</h4>
                  <div className="border-procese"></div>
                  <div className="process-tab-text-content">
                    <h4>Prototyping</h4>
                  </div>
                </div>
              </div>
            </div>

            <div id="content-03" className="process-tab-design-content">
              <div className="process-card-tab">
                <div className="procees-tab-No">
                  <h4>03.</h4>
                </div>
                <div className="process-tab-contant d-flex gap-3 align-items-center">
                  <div className="process-icon-tab">
                    <Image src={processImg} alt="img" />
                  </div>
                  <div className="tab-content-title">
                    <h4>Prototyping</h4>
                  </div>
                </div>
                <div className="border-procese"></div>
                <div className="procees-content1">
                  <p>
                    Responsive Web Design is an approach to web development that
                    ensures a website looks and functions well across a variety
                    of devices and screen sizes. This means the website
                    automatically adjusts its layout, images, and
                    functionalities to provide an optimal viewing experience,
                    whether accessed on a smartphone, tablet, laptop, or desktop
                    computer.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="process-tab-design"
              onClick={() => showContent("content-04")}
            >
              <div className="process-content">
                <div className="process-tex-No">
                  <h4>04.</h4>
                  <div className="border-procese"></div>
                  <div className="process-tab-text-content">
                    <h4>Web Copy</h4>
                  </div>
                </div>
              </div>
            </div>

            <div id="content-04" className="process-tab-design-content">
              <div className="process-card-tab">
                <div className="procees-tab-No">
                  <h4>04.</h4>
                </div>
                <div className="process-tab-contant d-flex gap-3 align-items-center">
                  <div className="process-icon-tab">
                    <Image src={processImg} alt="img" />
                  </div>
                  <div className="tab-content-title">
                    <h4>Web Copy</h4>
                  </div>
                </div>
                <div className="border-procese"></div>
                <div className="procees-content1">
                  <p>
                    Responsive Web Design is an approach to web development that
                    ensures a website looks and functions well across a variety
                    of devices and screen sizes. This means the website
                    automatically adjusts its layout, images, and
                    functionalities to provide an optimal viewing experience,
                    whether accessed on a smartphone, tablet, laptop, or desktop
                    computer.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="process-tab-design"
              onClick={() => showContent("content-05")}
            >
              <div className="process-content">
                <div className="process-tex-No">
                  <h4>05.</h4>
                  <div className="border-procese"></div>
                  <div className="process-tab-text-content">
                    <h4>UX Design</h4>
                  </div>
                </div>
              </div>
            </div>

            <div id="content-05" className="process-tab-design-content">
              <div className="process-card-tab">
                <div className="procees-tab-No">
                  <h4>05.</h4>
                </div>
                <div className="process-tab-contant d-flex gap-3 align-items-center">
                  <div className="process-icon-tab">
                    <Image src={processImg} alt="img" />
                  </div>
                  <div className="tab-content-title">
                    <h4>UX Design</h4>
                  </div>
                </div>
                <div className="border-procese"></div>
                <div className="procees-content1">
                  <p>
                    Responsive Web Design is an approach to web development that
                    ensures a website looks and functions well across a variety
                    of devices and screen sizes. This means the website
                    automatically adjusts its layout, images, and
                    functionalities to provide an optimal viewing experience,
                    whether accessed on a smartphone, tablet, laptop, or desktop
                    computer.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="process-tab-design"
              onClick={() => showContent("content-06")}
            >
              <div className="process-content">
                <div className="process-tex-No">
                  <h4>06.</h4>
                  <div className="border-procese"></div>
                  <div className="process-tab-text-content">
                    <h4>UI Design</h4>
                  </div>
                </div>
              </div>
            </div>

            <div id="content-06" className="process-tab-design-content">
              <div className="process-card-tab">
                <div className="procees-tab-No">
                  <h4>06.</h4>
                </div>
                <div className="process-tab-contant d-flex gap-3 align-items-center">
                  <div className="process-icon-tab">
                    <Image src={processImg} alt="img" />
                  </div>
                  <div className="tab-content-title">
                    <h4>UI Design</h4>
                  </div>
                </div>
                <div className="border-procese"></div>
                <div className="procees-content1">
                  <p>
                    Responsive Web Design is an approach to web development that
                    ensures a website looks and functions well across a variety
                    of devices and screen sizes. This means the website
                    automatically adjusts its layout, images, and
                    functionalities to provide an optimal viewing experience,
                    whether accessed on a smartphone, tablet, laptop, or desktop
                    computer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
