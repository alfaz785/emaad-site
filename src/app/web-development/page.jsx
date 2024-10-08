import React from "react";
import Trusted from "./Trusted";
import Unlock from "./Unlock";
import Process from "./Process";
import LetsProject from "./LetsProject";
import Technologies from "./Technologies";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("web-development");

const WebDevelopment = () => {
  return (
    <>
      {/* <!-- TRUSTED SECTION START --> */}
      <Trusted />
      {/* <!-- unlock section start --> */}
      <Unlock />
      {/* <!-- /* ==========process section start ============ */}
      <Process />
      {/* <!-- Technologies we use section start  --> */}
      <Technologies />
      {/* <!-- /* ========Lat’s Start Your Project section start ======== */}
      <LetsProject />
    </>
  );
};

export default WebDevelopment;
