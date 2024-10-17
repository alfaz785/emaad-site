"use client";
import React, { useEffect } from "react";
import reactJSImg from "../../assets/images/ReactJs-logo.svg";
import angularImg from "../../assets/images/Angular-logo.svg";
import flutterImg from "../../assets/images/Flutter-logo.svg";
import nodeJSImg from "../../assets/images/NodeJs-logo.svg";
import phpImg from "../../assets/images/php-logo.svg";
import Image from "next/image";
import gsap from "gsap";

const CurrentOpening = () => {
  useEffect(() => {
    let paragraphNew = document.querySelector(".title-para");

    if (paragraphNew) {
      const words = paragraphNew?.innerHTML
        .split(" ")
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      paragraphNew.innerHTML = words;

      const spans = paragraphNew.querySelectorAll("span");

      const tl = gsap.timeline({ paused: true });

      tl.from(spans, {
        duration: 0.3,
        opacity: 0,
        y: 20,
        stagger: 0.02,
        ease: "power2.inOut",
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tl.play();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 },
      );

      const section = document.querySelector(".title-para");
      observer?.observe(section);
    }
  }, []);

  return (
    <>
      {" "}
      <div className="current-openings">
        <div className="container">
          <div className="title" id="openings">
            <h4 className="text-center" id="current-openings">
              Current&nbsp;
              <span
                style={{
                  background:
                    "linear-gradient(104.02deg, #2d9cdb 0%, #2dc97a 88.31%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block", // Required for the gradient effect to show on the text
                }}
              >
                Openings
              </span>
            </h4>
          </div>
          <p className="text-center title-para mb-0">
            Join our team of innovative thinkers and tech enthusiasts at Emaad
            Infotech. We are always on the lookout for talented individuals who
            are passionate about technology and eager to make an impact. Explore
            our current openings and discover exciting career opportunities that
            align with your skills and aspirations. At Emaad Infotech, we offer
            a dynamic work environment, continuous learning, and the chance to
            work on cutting-edge projects.
          </p>
          <div className="all-developer-data-cards">
            <div className="row">
              {/* <!-- React JS Developer --> */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 developer-cards">
                  <div className="card-body p-0">
                    <div className="logo-title d-flex gap-3 align-items-center">
                      <Image src={reactJSImg} alt="React Js logo" />
                      <h5 className="card-title mb-0">React JS Developer</h5>
                    </div>
                    <p className="card-text mb-0">
                      We are looking for a skilled React JS Developer to join
                      our dynamic team at Emaad Infotech.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item badge badge-primary">
                        HTML
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        CSS
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        JavaScript
                      </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-location d-flex align-items-center gap-1 mb-0">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        Himmatnagar
                      </p>
                      <p className="card-location-num mb-0">3</p>
                    </div>
                    <a href="#" className="btn btn-primary btn-block">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Angular Developer --> */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 developer-cards">
                  <div className="card-body p-0">
                    <div className="logo-title d-flex gap-3 align-items-center">
                      <Image src={angularImg} alt="Angular logo" />
                      <h5 className="card-title mb-0">Angular Developer</h5>
                    </div>
                    <p className="card-text mb-0">
                      We are looking for an experienced Angular Developer to
                      join our team at Emaad Infotech.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item badge badge-primary">
                        HTML
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        CSS
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        JavaScript
                      </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-location d-flex align-items-center gap-1 mb-0">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        Himmatnagar
                      </p>
                      <p className="card-location-num mb-0">5</p>
                    </div>
                    <a href="#" className="btn btn-primary btn-block">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Flutter Developer --> */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 developer-cards">
                  <div className="card-body p-0">
                    <div className="logo-title d-flex gap-3 align-items-center">
                      <Image src={flutterImg} alt="Flutter log" />
                      <h5 className="card-title mb-0">Flutter Developer</h5>
                    </div>
                    <p className="card-text mb-0">
                      We are seeking a talented Flutter Developer to join our
                      team at Emaad Infotech.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item badge badge-primary">
                        JavaScript
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        Dart
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        Flutter
                      </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-location d-flex align-items-center gap-1 mb-0">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        Himmatnagar
                      </p>
                      <p className="card-location-num mb-0">2</p>
                    </div>
                    <a href="#" className="btn btn-primary btn-block">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- NodeJS Developer --> */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 developer-cards">
                  <div className="card-body p-0">
                    <div className="logo-title d-flex gap-3 align-items-center">
                      <Image src={nodeJSImg} alt="Node Js logo" />
                      <h5 className="card-title mb-0">NodeJS Developer</h5>
                    </div>
                    <p className="card-text mb-0">
                      We are looking for a skilled NodeJS Developer to join our
                      dynamic team at Emaad Infotech.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item badge badge-primary">
                        HTML
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        CSS
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        JavaScript
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        SQL
                      </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-location d-flex align-items-center gap-1 mb-0">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        Himmatnagar
                      </p>
                      <p className="card-location-num mb-0">9</p>
                    </div>
                    <a href="#" className="btn btn-primary btn-block">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- PHP Developer --> */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 developer-cards">
                  <div className="card-body p-0">
                    <div className="logo-title d-flex gap-3 align-items-center">
                      <Image src={phpImg} alt="PHP logo" />
                      <h5 className="card-title mb-0">PHP Developer</h5>
                    </div>
                    <p className="card-text mb-0">
                      We are looking for a skilled PHP Developer to join our
                      dynamic team at Emaad Infotech.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item badge badge-primary">
                        HTML
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        CSS
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        SQL
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        PHP
                      </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-location d-flex align-items-center gap-1 mb-0">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        Himmatnagar
                      </p>
                      <p className="card-location-num mb-0">1</p>
                    </div>
                    <a href="#" className="btn btn-primary btn-block">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- React JS Developer (Duplicate) --> */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 developer-cards">
                  <div className="card-body p-0">
                    <div className="logo-title d-flex gap-3 align-items-center">
                      <Image src={reactJSImg} alt="React Js logo" />
                      <h5 className="card-title mb-0">React JS Developer</h5>
                    </div>
                    <p className="card-text mb-0">
                      We are looking for a skilled React JS Developer to join
                      our dynamic team at Emaad Infotech.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item badge badge-primary">
                        HTML
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        CSS
                      </li>
                      <li className="list-inline-item badge badge-primary">
                        JavaScript
                      </li>
                    </ul>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="card-location d-flex align-items-center gap-1 mb-0">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        Himmatnagar
                      </p>
                      <p className="card-location-num mb-0">4</p>
                    </div>
                    <a href="#" className="btn btn-primary btn-block">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentOpening;
