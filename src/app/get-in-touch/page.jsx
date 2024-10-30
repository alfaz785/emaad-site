import React from "react";
import DraggableBox from "@/component/DraggableBox";
import TouchContactUs from "./TouchContactUs";
import TouchFollowUs from "./TouchFollowUs";
import TouchGoogle from "./TouchGoogle";
import GetInTouchSection from "./GetInTouchSection";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("get-in-touch");
const GetInTouch = () => {
  return (
    <>
      {/* <!-- Let’s get in touch start --> */}
      <GetInTouchSection />
      {/* <!-- Let’s get in touch End --> */}
      {/* <!-- contact us section start --> */}
      <TouchContactUs />
      {/* <!-- contact us section End --> */}
      {/* <!-- Follow Us section start --> */}
      <TouchFollowUs />
      {/* <!-- Follow Us section End --> */}
      {/* <!-- google map start --> */}
      <TouchGoogle />
      {/* <!-- google map start --> */}
      {/* <!-- draggable-boxes start --> */}
      <DraggableBox />
      {/* <!-- draggable-boxes End --> */}
    </>
  );
};

export default GetInTouch;
