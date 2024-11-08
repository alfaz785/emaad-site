"use client";
import React, { useEffect } from "react";
import workImg from "../../assets/images/work-with.png";
import Image from "next/image";

const WorkSection = () => {
  useEffect(() => {
    const infoItems = document.querySelectorAll(
      ".dynamic-work-section .info-item",
    );

    infoItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        // Collapse all items first
        infoItems.forEach((i) => {
          i.classList.remove("col-md-6");
          i.classList.add("col-md-2");
        });

        // Expand the hovered item
        item.classList.remove("col-md-2");
        item.classList.add("col-md-6");
      });
    });
  }, []);
  return (
    <>
      <div className="container-fluid work-custom-fluid">
        <div className="title d-none">
          <h2>Why Work with Emaad Infotech?</h2>
        </div>
        <div className="work-with-main-section">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="position-relative">
                <Image
                  src={workImg}
                  alt="Dynamic Work Environment"
                  className="img-fluid"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="why-Work-left-title">
                  <h2>Why Work with Emaad Infotech?</h2>
                </div>
              </div>
            </div>
            <div className="col-md-12 dynamic-work-section">
              <div className="row">
                <div className="info-item col-md-6">
                  <h3>01. Dynamic Work Environment</h3>
                  <p className="mb-0">
                    At Emaad Infotech®, we foster a vibrant and inclusive
                    workplace where creativity and innovation thrive. Our
                    collaborative culture encourages idea-sharing and continuous
                    learning, ensuring that every team member feels valued and
                    empowered.
                  </p>
                </div>
                <div className="info-item col-md-2">
                  <h3>02. Cutting-Edge Projects</h3>
                  <p className="mb-0">
                    Join us to work on groundbreaking projects that leverage the
                    latest technologies. From developing advanced software
                    solutions to creating intuitive user experiences, you'll
                    have the opportunity to make a real impact in the tech
                    industry.
                  </p>
                </div>
                <div className="info-item col-md-2">
                  <h3>03. Professional Growth</h3>
                  <p className="mb-0">
                    We are committed to your professional development. Benefit
                    from regular training sessions, workshops, and opportunities
                    to attend industry conferences. At Emaad Infotech®, your
                    growth is our priority.
                  </p>
                </div>
                <div className="info-item col-md-2">
                  <h3>04. Competitive Benefits</h3>
                  <p className="mb-0">
                    We offer a comprehensive benefits package that includes
                    competitive salaries, health insurance, retirement plans,
                    and paid time off. Our aim is to provide you with the
                    support you need to maintain a healthy work-life balance.
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

export default WorkSection;
