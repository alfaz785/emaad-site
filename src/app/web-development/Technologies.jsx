"use client";
import Image from "next/image";
import technologiesBootstrapImg from "../../assets/images/Technologies-Bootstartp.png";
import technologiesReactImg from "../../assets/images/Technologies -react.png";
import technologiesHTMLImg from "../../assets/images/Technologies-html-5.png";
import technologiesVueImg from "../../assets/images/Technologies -Vue.js_Logo_2.png";
import technologiesAImg from "../../assets/images/Technologies-A.png";
import coreldrawImg from "../../assets/images/corel-draw.png";
import adobeImg from "../../assets/images/adobe-creative-cloud.png";
import adobesImg from "../../assets/images/adobe.png";
import adobeprimerImg from "../../assets/images/adobe-premier.png";

// import technologieFlutterImg from "../../assets/images/technologieFlutterImg";
// import technologieionicImg from "../../assets/images/technologieionicImg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Import specific Swiper modules
import "swiper/css/pagination"; // Import specific Swiper modules
import indesignImg from "../../assets/images/Indesign.png";
import illustratorImg from "../../assets/images/Illustrator.png";
import figmaImg from "../../assets/images/Figma.png";
import photoshopImg from "../../assets/images/Photoshop.png";
import xdImg from "../../assets/images/Xd.png";
// import flutter from "../../assets/images/flutter.png"
const Technologies = ({ isUiUX = false }) => {
  return (
    <>
      <div className="Technologies-we-use">
        {!isUiUX && (
          <div className="container">
            <div className="Technologies-title">
              <div className="Technologies-use-title">
                <div className="Technologies-text">
                  <h4>
                    Technologies <span>we use</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )}
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="swiper-container Technologies-us-card"
        >
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate">
              <Image
                src={isUiUX ? indesignImg : technologiesAImg}
                alt="Indesign"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate">
              <Image
                src={isUiUX ? illustratorImg : technologiesBootstrapImg}
                alt="Indesign"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate1">
              <Image
                src={isUiUX ? figmaImg : technologiesReactImg}
                alt="Illustrator"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate2">
              <Image
                src={isUiUX ? photoshopImg : technologiesHTMLImg}
                alt="Figma"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? xdImg : technologiesVueImg}
                alt="Photoshop"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? photoshopImg : technologiesVueImg}
                alt="Photoshop"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? photoshopImg : technologiesVueImg}
                alt="Photoshop"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? photoshopImg : technologiesHTMLImg}
                alt="Photoshop"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? coreldrawImg : technologiesHTMLImg}
                alt="Photoshop"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? adobesImg : technologiesHTMLImg}
                alt="Photoshop"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? adobeImg : technologiesHTMLImg}
                alt="Photoshop"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? adobeprimerImg : technologiesHTMLImg}
                alt="Photoshop"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? adobeprimerImg : technologiesHTMLImg}
                alt="Photoshop"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Technologies;
