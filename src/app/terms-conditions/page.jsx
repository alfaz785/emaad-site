import DraggableBox from "@/component/DraggableBox";
import React from "react";
import Terms from "./Terms";
import TermsDetails from "./TermsDetails";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("terms-conditions");

const TermCondition = () => {
  return (
    <>
      {/* <!-- navbar end   --> */}
      {/* <!-- Terms & Conditions start --> */}
      <Terms />
      {/* <!-- Terms & Conditions  End --> */}
      {/* <!-- Terms & Conditions detail start --> */}
      <div className="terms-conditions-detail mt_60">
        <TermsDetails />
        {/* <!-- Terms & Conditions detail End --> */}
        {/* <!-- draggable-boxes start --> */}
        <DraggableBox />
        {/* <!-- draggable-boxes End --> */}
      </div>
    </>
  );
};

export default TermCondition;
