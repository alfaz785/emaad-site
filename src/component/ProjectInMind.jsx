"use client";

import React, { useEffect } from "react";
import { animateLetters, wcButtonFC } from "../../commFun";

const ProjectInMind = () => {
  useEffect(() => {
    animateLetters();
    wcButtonFC();
  }, []);

  return (
    <>
      <div className="ideas-wait-main mt_100">
        <div className="container-fluid text-center">
          <div className="ideas-wait-text mt_40 sec-title-2">
            <h3 className="mb-0 text-wrapper" id="text">
              <span className="letter">H</span>
              <span className="letter">a</span>
              <span className="letter">v</span>
              <span className="letter">e</span>
              <span className="letter">a</span>{" "}
              <span className="letter">p</span>
              <span className="letter">r</span>
              <span className="letter">o</span>
              <span className="letter">j</span>
              <span className="letter">e</span>
              <span className="letter">c</span>
              <span className="letter">t</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">m</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">d</span>
              <span className="letter">?</span>
              <span className="letter-wrapper"></span>
              <br />
              <span className="letter">L</span>
              <span className="letter">e</span>
              <span className="letter">t</span>
              <span className="letter">'</span>
              <span className="letter">s</span>{" "}
              <span className="letter">g</span>
              <span className="letter">e</span>
              <span className="letter">t</span>
              <span className="letter">t</span>
              <span className="letter">o</span>
              <span className="letter">w</span>
              <span className="letter">o</span>
              <span className="letter">r</span>
              <span className="letter">k</span>
            </h3>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="btn_wrapper">
            <a
              href="#"
              className="wc-btn-primary btn btn-outline-light work-btn mt_40"
            >
              Lets'talk
              <span className="material-symbols-outlined">
                {" "}
                arrow_right_alt{" "}
              </span>
              <span className="circle"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInMind;
