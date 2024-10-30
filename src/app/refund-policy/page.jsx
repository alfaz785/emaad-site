import DraggableBox from "@/component/DraggableBox";
import React from "react";
import Amendments from "./Amendments";
import RefundCondition from "./RefundCondition";
import RefundHead from "./RefundHead";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("refund-policy");
const RefundPolicy = () => {
  return (
    <>
      {/* <!-- Refund Policy start --> */}
      <RefundHead />
      {/* <!-- /* Refund Conditions section start*/}
      <RefundCondition />
      {/* <!-- amendments-section start --> */}
      <Amendments />
      {/* <!--DraggableBox-section end  --> */}
      <DraggableBox />
    </>
  );
};

export default RefundPolicy;
