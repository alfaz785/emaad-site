import React from "react";
import Process from "./Process";
import ProjectInMind from "../../component/ProjectInMind";
import Technologies from "../web-development/Technologies";
import DraggableBox from "@/component/DraggableBox";
import Expertise from "./Expertise";
import VisionWeb from "./VisionWeb";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("web-design");
import ourProcessImg from "../../assets/images/app-process-bg.png";
import ProcessImg from "@/component/ProcessImg";

const WebDesign = () => {
  return (
    <>
      {/* <!--Unveil Your vision with Our Web Design Solutions  start --> */}
      <VisionWeb />

      {/* <!-- Expertise-why-choose-design section start--> */}

      <Expertise />

      {/* <!-- Expertise-why-choose-design section end--> */}
      <ProcessImg mainImg={ourProcessImg} />

      <Process />

      {/* <!-- TECHNOLIES --------------> */}

      <Technologies />

      {/* <!-- ProjectInMind -----------> */}

      <ProjectInMind mainTxt={"Have a project in mind ? Let's get to work"} />

      {/* <!-- DraggableBox ------------> */}

      <DraggableBox />
    </>
  );
};

export default WebDesign;
