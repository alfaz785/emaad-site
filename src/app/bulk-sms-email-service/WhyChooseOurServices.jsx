"use client";

import Image from "next/image";
import ServiceImg from "../../assets/images/service-bg.png";
import SupImg from "../../assets/images/sup.png";
import cusomizationImg from "../../assets/images/cusomization.png";
import effencyImg from "../../assets/images/effency.png";
import realibilityImg from "../../assets/images/realibility.png";
import { useEffect } from "react";

export default function WhyChooseOurServices() {
  useEffect(() => {
    const serviceItems = document.querySelectorAll(".text-item-service");
    const serviceCards = document.querySelectorAll(".service-design-card");

    serviceItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        const targetClass = this.getAttribute("data-target");
        serviceCards.forEach((card) => {
          if (card.querySelector(targetClass)) {
            card.style.opacity = "1";
          } else {
            card.style.opacity = "0";
          }
        });
      });
    });
  }, []);

  return (
    <div className="why-choose-service-cards">
      <div className="container">
        <div className="why-choose-title-service">
          <h4>
            Why Choose Our Services?
            <Image className="why-choose-bg-text" src={ServiceImg} alt="img" />
            <p>
              Choosing our Bulk SMS and Email Services means you’re opting for
              reliability, efficiency, customization, and unparalleled support.
            </p>
          </h4>
        </div>
        <div className="why-choose-our-service">
          <div className="why-choose-service-section">
            <p className="text-item-service" data-target=".service-card-hover">
              Reliability
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </p>
            <p className="text-item-service" data-target=".service-card-hover2">
              Efficiency
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </p>
            <p className="text-item-service" data-target=".service-card-hover3">
              Customization
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </p>
            <p className="text-item-service" data-target=".service-card-hover4">
              Support
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </p>
          </div>
          <div className="service-card-grabe">
            <div className="service-design-card">
              <div className="service-card-hover">
                <div className="shedual-img">
                  <Image src={SupImg} alt="img" />
                </div>
                <div className="silver-img">
                  <Image src={cusomizationImg} alt="img" />
                </div>
                <div className="card-2-img">
                  <Image src={effencyImg} alt="img" />
                </div>
                <Image src={realibilityImg} alt="Reliability" />

                <div className="overlay-text1">
                  <h4>Reliability</h4>
                  <p>
                    High delivery rates ensure your messages reach your audience
                  </p>
                </div>
              </div>
            </div>
            <div className="service-design-card">
              <div className="service-card-hover2">
                <div className="shedual-img">
                  <Image src={realibilityImg} alt="Reliability" />
                </div>
                <div className="silver-img">
                  <Image src={SupImg} alt="img" />
                </div>
                <div className="card-2-img">
                  <Image src={cusomizationImg} alt="img" />
                </div>

                <Image src={effencyImg} alt="img" />

                <div className="overlay-text1">
                  <h4>Efficiency</h4>
                  <p>
                    High delivery rates ensure your messages reach your audience
                  </p>
                </div>
              </div>
            </div>
            <div className="service-design-card">
              <div className="service-card-hover3">
                <div className="shedual-img">
                  <Image src={effencyImg} alt="img" />
                </div>
                <div className="silver-img">
                  <Image src={realibilityImg} alt="Reliability" />
                </div>
                <div className="card-2-img">
                  <Image src={SupImg} alt="img" />
                </div>
                <div className="service-card-img">
                  <Image src={cusomizationImg} alt="Customization" />

                  <div className="overlay-text1">
                    <h4>Customization</h4>
                    <p>
                      High delivery rates ensure your messages reach your
                      audience
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-design-card">
              <div className="service-card-hover4">
                <div className="shedual-img">
                  <Image src={effencyImg} alt="img" />
                </div>
                <div className="silver-img">
                  <Image src={realibilityImg} alt="Reliability" />
                </div>
                <div className="card-2-img">
                  <Image src={cusomizationImg} alt="Customization" />
                </div>
                <div className="service-card-img">
                  <Image src={SupImg} alt="img" />

                  <div className="overlay-text1">
                    <h4>Support</h4>
                    <p>
                      Our team is available to assist you with setup and
                      optimization to ensure your campaigns succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
