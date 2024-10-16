"use client";

import React, { useEffect } from "react";
import { animateLetters, wcButtonFC } from "../../commFun";
import Link from "next/link";
import { Router } from "react-router-dom";
import { useRouter } from "next/navigation";

const ProjectInMind = () => {
  const router = useRouter();
  useEffect(() => {
    animateLetters();
    wcButtonFC();
  }, []);

  return (
    <>
      <div className="ideas-wait-main mt_40">
        <div className="container-fluid text-center">
          <div className="ideas-wait-text mt_40 sec-title-2">
            <h3 className="mb-0 text-wrapper" id="text">
              {"Ideas can't wait Put us to work on them!"
                .split("")
                .map((letter, index) => (
                  <span key={index} className="letter">
                    {letter === " " ? "\u00A0" : letter}{" "}
                    {/* Using non-breaking space */}
                  </span>
                ))}
            </h3>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="btn_wrapper">
            <Link
              onClick={() => router.push("/get-in-touch")}
              href="/get-in-touch"
              className="wc-btn-primary btn btn-outline-light work-btn mt_40"
            >
              Start a Project
              <span className="material-symbols-outlined">
                {" "}
                arrow_right_alt{" "}
              </span>
              <span className="circle"></span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInMind;
