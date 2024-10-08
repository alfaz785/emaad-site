import Image from 'next/image'
import React from 'react'
import expertiseImg from "../../assets/images/expertise.svg";
import clientImg from "../../assets/images/client.svg";
import exprienseImg from "../../assets/images/expriense.png";
import softwareImg from "../../assets/images/softwate-design.png";
import commpetitiveImg from "../../assets/images/commpetitive-p.svg";
import technologiesImg from "../../assets/images/technology.svg";

const Expertise = () => {
  return (
    <>
        <div className="vision-why-choose-design container-fluid">
        <div className="expertise-design-text d-flex">
          <div className="exprience-design-cards d-flex">
            <div className="Expertise-design-card-">
              <div className="Expertise-and-Experience-card">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={expertiseImg}
                  alt=""
                />
                <div className="expertise-title">
                  <h3>Expertise and Experience</h3>
                </div>
                <div className="expertise-text">
                  <p>
                    Our team comprises highly skilled designers and developers
                    with years of experience in the industry.
                  </p>
                </div>
              </div>
              <div className="Expertise-and-Experience-card2">
                <Image height={"100%"} width={"100%"} src={clientImg} alt="" />

                <div className="expertise-title2">
                  <h3>Expertise and Experience</h3>
                </div>
                <div className="expertise-text2">
                  <p>
                    Our team comprises highly skilled designers and developers
                    with years of experience in the industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="software-experience-image">
              <div className="software-experience">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={exprienseImg}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="expertise-text-choose">
            <div className="design-why-Choose">
              <div className="expertice-choose-titel">
                <h3>WHY</h3>
                <h4>CHOOSE</h4>
                <h4>US?</h4>
              </div>
              <div className="expertise-choose-text">
                <p>
                  Expertise, innovation, and tailored solutions. We deliver
                  responsive designs, proven results, and ongoing support to
                  ensure your success.
                </p>
              </div>
              <div className="software-experience-image">
                <div className="design-software">
                  <Image
                    height={"100%"}
                    width={"100%"}
                    src={softwareImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="card-technology-pricing d-flex">
              <div className="cutting-edge-tech-card">
                <Image src={technologiesImg} alt="" />
                <div className="expertise-title">
                  <h3>Cutting-Edge Technology</h3>
                </div>
                <div className="expertise-text">
                  <p>
                    We stay ahead of industry trends and utilize the latest
                    technologies to create modern, responsive, and secure
                    websites.
                  </p>
                </div>
              </div>
              {/* <!-- card 2 --> */}
              <div className="cutting-edge-tech-card2">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={commpetitiveImg}
                  alt=""
                />

                <div className="expertise-title">
                  <h3>Cutting-Edge Technology</h3>
                </div>
                <div className="expertise-text">
                  <p>
                    We stay ahead of industry trends and utilize the latest
                    technologies to create modern, responsive, and secure
                    websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Expertise