import React from "react";

import ProjectInMind from "@/component/ProjectInMind";
import DraggableBox from "@/component/DraggableBox";
import OurSerice from "./OurSerice";
import ServiceUiUx from "./ServiceUiUx";
import Comprehensive from "./Comprehensive";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("our-services");
const OurServices = () => {
  return (
    <>
      {/* <!-- navbar end   --> */}
      <OurSerice />
      {/* <!-- uiux-design-section start --> */}
      <ServiceUiUx />

      {/* <!-- Mobile App Developing-section end --> */}
      {/* <!-- Comprehensive Web Solutions section start --> */}
      <Comprehensive />
      {/* <!-- Comprehensive Web Solutions section End --> */}
      {/* <!-- Ideas can't wait section start --> */}
      <div className="ideas-wait-main mt_100">
        <div className="container-fluid text-center">
          <div className="header-text" id="breathing">
            <p className="mb-0" id="brands">
              Breathing Life into Brands through Innovative Digital Strategies!
            </p>
          </div>
        </div>
      </div>
      <ProjectInMind mainTxt={"Have A Project In Mind ? Let's Get To Work"} />
      {/* <!-- draggable-boxes start --> */}
      <DraggableBox />

      {/* <!-- draggable-boxes End --> */}
    </>
  );
};

export default OurServices;
