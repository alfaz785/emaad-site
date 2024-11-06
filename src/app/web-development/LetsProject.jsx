"use client";
import React, { useEffect } from "react";
import letsStartImg from "../../assets/images/lats-start-project-section-img.png";
import Image from "next/image";
import DraggableBox from "@/component/DraggableBox";
import { wcButtonFC } from "../../../commFun";

const LetsProject = () => {
  useEffect(() => {
    wcButtonFC();
  }, []);
  return (
    <>
      <div className="lats-start-project mt_100">
        <div className="container">
          <section className="lats-start-project-section">
            <div className="project-text">
              <span>Let's Start Your Project</span>
              <span></span>
              <Image
                src={letsStartImg}
                alt="Person with Headset"
                width="100%"
                height="100%"
              />
            </div>
            <div className="project-button">
              <div className="d-flex align-items-center justify-content-center">
                <div className="btn_wrapper">
                  <a
                    href="/get-in-touch"
                    className="wc-btn-primary btn-outline-light mt_40"
                  >
                    Start a
                    <br />
                    Project
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                    <span className="circle"></span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- draggable-boxes start --> */}
        <DraggableBox />
        {/* <!-- draggable-boxes End --> */}
      </div>
    </>
  );
};

export default LetsProject;
