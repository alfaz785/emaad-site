import React from "react";
import OurWorkHead from "./OurWorkHead";
import ProductFeature from "./ProductFeature";
import Technologies from "../web-development/Technologies";
import DraggableBox from "@/component/DraggableBox";
import ProjectInMind from "@/component/ProjectInMind";
import WorkPreviews from "./WorkPreviews";
import { generateMetadata } from "../../../commFun/metadatahelper";
import Awesome from "./Awesome";
export const metadata = generateMetadata("our-work");
const OurWork = () => {
  return (
    <>
      {/* <!-- our work section  --> */}
      <OurWorkHead />
      {/* <!--  /.====  product-demo section end ===== --> */}

      {/* <!-- ==== product feature ====  --> */}

      <ProductFeature />

      {/* <!-- /. ==== product feature ====  --> */}

      {/* <!-- Brilliant Previews  --> */}
      <WorkPreviews />
      {/* <!--/. Brilliant Previews  --> */}

      {/* <!-- Technologies we use section start  --> */}
      <Technologies />
      {/* <!-- Technologies we use section end  --> */}

      {/* <!-- Awesome section start --> */}

      <Awesome />

      {/* <!--/.  Awesome section end --> */}

      {/* <ProjectInMind /> */}
      {/* <!-- /* ========Lat’s Start Your Project section start ========  --> */}
      <DraggableBox />
    </>
  );
};

export default OurWork;
