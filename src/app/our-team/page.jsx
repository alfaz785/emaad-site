import React from "react";
import MasonaryGallery from "./MasonaryGallery";
import OurTeamHead from "./OurTeamHead";
import DraggableBox from "@/component/DraggableBox";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("our-team");
const OurTeam = () => {
 
  return (
    <>
      {/* <!-- Our Journey  start --> */}
      <OurTeamHead />
      {/* <!-- Our Journey End --> */}
      {/* <!-- STANDARD GALLERY START --> */}
      <MasonaryGallery />
      {/* <!--STANDARD GALLERY END  --> */}
      {/* <!-- draggable-boxes start --> */}
      <DraggableBox /> {/* <!-- draggable-boxes End --> */}
    </>
  );
};

export default OurTeam;
