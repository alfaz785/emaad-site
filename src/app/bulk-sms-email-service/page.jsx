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
          <DiscoverSwiper
            firstTxt={"Bulk SMS &"}
            secondTxt={"Email Services"}
          />
        </div>
      </div>
      {/* <!-- ==== why choose our service ==== --> */}
      <WhyChooseOurServices />
      {/* <!-- /.==== why choose our service ==== --> */}
      <div className="ideas-wait-main mt_100">
        <div className="container-fluid text-center">
          <div className="header-text" id="breathing">
            <p className="mb-0" id="brands">
            Breathing Life Into Brands Through Innovative Digital Strategies!
            </p>
          </div>
        </div>
      </div>
      <ProjectInMind mainTxt={"Have A Project In Mind ? Let's Get To Work"} />

      {/* DRAGGABLE  ------------------------ */}

      <DraggableBox />
    </>
  );
};

export default BulkSmsEmailService;
