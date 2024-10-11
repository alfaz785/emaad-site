import React from "react";
import Process from "./Process";
import ProjectInMind from "../../component/ProjectInMind";
import Technologies from "../web-development/Technologies";
import DraggableBox from "@/component/DraggableBox";
import Expertise from "./Expertise";
import VisionWeb from "./VisionWeb";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("web-design");

const WebDesign = () => {

  return (
    <>
      {/* <!--Unveil Your vision with Our Web Design Solutions  start --> */}
      <VisionWeb />

      {/* <!-- Expertise-why-choose-design section start--> */}

      <Expertise />

      {/* <!-- Expertise-why-choose-design section end--> */}

      <Process />

      {/* <!-- TECHNOLIES --------------> */}

      <Technologies />

      {/* <!-- ProjectInMind -----------> */}

      <ProjectInMind />

      {/* <!-- DraggableBox ------------> */}

      <DraggableBox />
    </>
  );
};

export default WebDesign;
