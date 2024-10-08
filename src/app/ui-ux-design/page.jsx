import React from "react";
import ProjectInMind from "@/component/ProjectInMind";
import UiUxHead from "./UiUxHead";
import UiChooseUs from "./UiChooseUs";
import UiService from "./UiService";
import UiExellence from "./UiExellence";
import DraggableBox from "@/component/DraggableBox";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("ui-ux-design");
const UiUxDesign = () => {
  return (
    <>
      {/* <!-- ui ux titel animation start --> */}
      <UiUxHead />
      {/* <!-- ui ux titel animation end --> */}

      {/* <!-- why choose us start section --> */}
      <UiChooseUs />
      {/* <!-- why choose us end section --> */}

      {/* <!-- Benefits of Services start section --> */}

      <UiService />

      {/* <!-- Design Excellence Powered by Cutting-Edge Tols  start--> */}

      <UiExellence />
      {/* <!-- Design Excellence Powered by Cutting-Edge Tols  end--> */}
      {/* <!-- have project in mind start section --> */}

      <ProjectInMind />
      {/* <!--/. === have project in mind start section ==== --> */}

      <DraggableBox />
    </>
  );
};

export default UiUxDesign;
