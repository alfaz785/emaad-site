import React from "react";
import LetsProject from "../web-development/LetsProject";
import DomainElevate from "./DomainElevate";
import DomainAdvanced from "./DomainAdvanced";
import DomainHostiong from "./DomainHostiong";
import DomainImportance from "./DomainImportance";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("domain-hosting");
const DomainHosting = () => {
  return (
    <>
      {/* <!-- Elevate Your Online section start --> */}
      <DomainElevate />
      {/* <!-- Elevate Your Online section End --> */}
      {/* <!-- Advanced Security section start --> */}
      <DomainAdvanced />
      {/* <!-- Advanced Security section End --> */}
      {/* <!-- /* Our Robust Hosting Solutions start--> */}
      <DomainHostiong />
      {/* <!-- /* Our Robust Hosting Solutions end--> */}
      {/* <!-- The Importance of a Unique Domain Name --> */}
      <DomainImportance />
      {/* <!--  -->
    <!-- /* ========Lat’s Start Your Project section start ======== --> */}
      <LetsProject />
      {/* <!-- /* ========Lat’s Start Your Project section End ======== --> */}
    </>
  );
};

export default DomainHosting;
