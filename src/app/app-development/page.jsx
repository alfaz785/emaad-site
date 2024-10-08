import React from "react";
import Technologies from "../web-development/Technologies";
import DraggableBox from "@/component/DraggableBox";
import GoMobile from "./GoMobile";
import OurPlatform from "./OurPlatform";
import ProcessApp from "./ProcessApp";
import ChooseUs from "./ChooseUs";
import ProjectInMind from "@/component/ProjectInMind";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("app-development");

const AppDevelopment = () => {
  return (
    <>
      {/* <!-- Go mobile and Run Your Business from Anywhere --> */}
      <GoMobile />
      {/* <!-- Our  Platforms  and Technologies start --> */}
      <OurPlatform />
      {/* <!-- Why Choose Us section start --> */}
      <ChooseUs />
      {/* <!-- /* ==========process section start ============  --> */}
      <ProcessApp />
      {/* <!-- Technologies we use section start  --> */}
      <Technologies />
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
      <ProjectInMind />
      <DraggableBox />
    </>
  );
};

export default AppDevelopment;
