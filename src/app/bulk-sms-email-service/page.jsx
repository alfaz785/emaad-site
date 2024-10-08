import React from "react";
import BulkHead from "./BulkHead";
import DraggableBox from "@/component/DraggableBox";
// import DiscoverSwiper from "@/component/DiscoverSwiper";
import ProjectInMind from "@/component/ProjectInMind";
import WhyChooseOurServices from "./WhyChooseOurServices";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("bulk-sms-email-service");
import dynamic from "next/dynamic";

const DiscoverSwiper = dynamic(() => import("@/component/DiscoverSwiper"), {
  ssr: false,
});
const BulkSmsEmailService = () => {
  return (
    <>
      {/* BULK HEAD ---------------------------- */}

      <BulkHead />

      {/* SERVICE HEAD ------------------------ */}

      <div className="discover-capabilites">
        <div className="container">
          <DiscoverSwiper />
          <ProjectInMind />
        </div>
      </div>
      {/* <!-- ==== why choose our service ==== --> */}
      <WhyChooseOurServices />
      {/* <!-- /.==== why choose our service ==== --> */}
      {/* DRAGGABLE  ------------------------ */}

      <DraggableBox />
    </>
  );
};

export default BulkSmsEmailService;
