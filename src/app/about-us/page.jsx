import React from "react";
import LetStart from "./LetStart";
import EmaadSection from "./EmaadSection";
import DraggableBox from "@/component/DraggableBox";
// import DiscoverSwiper from "@/component/DiscoverSwiper";
import ProjectInMind from "@/component/ProjectInMind";
import { generateMetadata } from "../../../commFun/metadatahelper";
export const metadata = generateMetadata("about-us");
import dynamic from "next/dynamic";

const DiscoverSwiper = dynamic(() => import("@/component/DiscoverSwiper"), {
  ssr: false,
});

const AboutUs = () => {
  return (
    <>
      {/* <!-- lets-get-to start --> */}
      <LetStart />

      {/* <!-- lets-get-to start end --> */}
      <EmaadSection />

      {/* <!-- service  --> */}
      <section className="discover-capabilites">
        <div className="container">
          <DiscoverSwiper
            firstTxt={"Discover Our"}
            secondTxt={"Capabilities"}
            isAbout={true}
          />
        </div>
        <ProjectInMind mainTxt={"Have A Project In Mind ? Let's Get To Work"} />
      </section>
      {/* <!-- project counter start --> */}
      <DraggableBox />
    </>
  );
};

export default AboutUs;
