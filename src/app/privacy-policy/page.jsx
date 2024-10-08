import React from "react";
import Information from "./Information";
import Privacy from "./Privacy";
import DraggableBox from "@/component/DraggableBox";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("privacy-policy");
const PrivacyPolicy = () => {
  return (
    <>
      {/* <!-- === privacy policy start --> */}
      <Privacy />
      {/* <!-- informatioh sharing section start --> */}
      <Information />
      {/* <!-- project counter start --> */}
      <DraggableBox />
    </>
  );
};

export default PrivacyPolicy;
