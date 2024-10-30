import React from "react";
import DraggableBox from "@/component/DraggableBox";
import DigitalHead from "./DigitalHead";
import DigitalMarket from "./DigitalMarket";
import DigitalExpertise from "./DigitalExpertise";
import DigitalContact from "./DigitalContact";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("digital-marketing");
const DigitalMarketing = () => {
  return (
    <>
      {/* <!-- // Boost Your Online sucess text typing animation start --> */}
      <DigitalHead />
      {/* <!-- // Boost Your Online sucess text typing animation end --> */}
      {/* <!-- Why Choose Our Digital Marketing Services start --> */}
      <DigitalMarket />
      {/* <!-- Why Choose Our Digital Marketing Services end --> */}
      {/* <!-- ==== our expertise section ==== --> */}
      <DigitalExpertise />
      {/* <!-- /. our expertise section --> */}
      {/* <!--  =====   contact-design ==== --> */}
      <DigitalContact />
      {/* <!-- === /. contact-design ==== --> */}
      <DraggableBox />
    </>
  );
};

export default DigitalMarketing;
