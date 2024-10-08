import React from "react";
import digitalImg from "../assets/images/digital.png";
import marqueImg from "../assets/images/marque svg.svg";
import vortexImg from "../assets/images/vortex.png";
import travelImg from "../assets/images/travel.png";
import mediaImg from "../assets/images/travel.png";
import fuzionImg from "../assets/images/travel.png";
import Image from "next/image";

const SlideSection = () => {
  return (
    <>
      <div className="scrollpage2">
        <div className="move">
          <div className="marque">
            <Image src={digitalImg} alt="digital" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={vortexImg} alt="vortex" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={travelImg} alt="travel" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={fuzionImg} alt="fuzion" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={mediaImg} alt="media" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={digitalImg} alt="digital" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
          <div className="marque">
            <Image src={vortexImg} alt="vortex" />
            <div className="whell">
              <Image src={marqueImg} alt="marque" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideSection;
