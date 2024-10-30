import React from "react";
import CareerSection from "./CareerSection";
import WorkSection from "./WorkSection";
import CurrentOpening from "./CurrentOpening";
import DraggableBox from "@/component/DraggableBox";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("career");

const Career = () => {
  return (
    <>
      {/* <!-- careers section start --> */}
      <CareerSection />
      {/* <!-- career section End --> */}
      {/* <!-- Work with Emaad --> */}
      <WorkSection />
      {/* <!-- work with emaad end --> */}
      {/* <!-- current openings section start --> */}
      <CurrentOpening />
      {/* <!-- current openings section End --> */}
      <DraggableBox />
    </>
  );
};

export default Career;
