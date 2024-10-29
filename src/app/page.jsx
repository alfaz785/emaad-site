import HomeHead from "@/component/HomeHead";
import SlideSection from "@/component/SlideSection";
import DeliveriHome from "@/component/DeliveriHome";
import EasyHome from "@/component/EasyHome";
import ChooseUsHome from "@/component/ChooseUsHome";
import PortfolioHome from "@/component/PortfolioHome";
import CustomerExpHome from "@/component/CustomerExpHome";
import ProjectInMind from "@/component/ProjectInMind";
import DraggableBox from "@/component/DraggableBox";
import SliderHome from "@/component/SliderHome";
import { generateMetadata } from "../../commFun/metadatahelper";
export const metadata = generateMetadata("");

export default function Home() {
  return (
    <>
      <HomeHead />
      {/* <!-- slider section start --> */}
      <SlideSection />
      {/* <!-- Delivering Innovation that thrives Start --> */}
      <DeliveriHome />
      {/* <!-- we have some easy steps --> */}
      <EasyHome />
      {/* <!-- Leading eCommerce  Software section start --> */}
      <SliderHome />
      {/* <!-- Leading eCommerce  Software section End --> */}
      {/* <!-- Why Choose Us section start --> */}
      <ChooseUsHome />
      {/* <!-- Why Choose Us section End --> */}
      <PortfolioHome />
      {/* <!-- customers Experiences section --> */}
      <CustomerExpHome />

      {/* <!-- Proejct In Mind section --> */}
      <div className="ideas-wait-main mt_100">
        <div className="container-fluid text-center">
          <div className="header-text" id="breathing">
            <p className="mb-0" id="brands">
              Breathing Life into Brands through Innovative Digital Strategies!
            </p>
          </div>
        </div>
      </div>
      <ProjectInMind mainTxt={"Have A Project In Mind ? Let's Get To Work"} />

      {/* <!-- DraggableBox section --> */}
      <DraggableBox />
    </>
  );
}
