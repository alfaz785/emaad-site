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
import cssImg from "../../assets/images/css.png";
import wordpress from "../../assets/images/wordpress.png";
import js from "../../assets/images/javascript.png";
import ts from "../../assets/images/typescript.png";
import node from "../../assets/images/nodejs.png";
import php from "../../assets/images/php.png";
import python from "../../assets/images/python.png";
import mongo from "../../assets/images/mongo-db.png";
import mysql from "../../assets/images/mysql.png";
import flutter from "../../assets/images/Flutter.png";
import dart from "../../assets/images/dart.png";
import tailwind from "../../assets/images/tailwind.png";
import sketch from "../../assets/images/sketch.png";
import sass from "../../assets/images/sass.png";



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
          className="swiper-container Technologies-us-card pb-20 app_swiper"
        >
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate">
              <Image
                src={isUiUX ? indesignImg : technologiesAImg}
                alt={isUiUX ? "indesignImg" : "technologiesAImg"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate">
              <Image
                src={isUiUX ? illustratorImg : technologiesBootstrapImg}
                alt={isUiUX ? "illustratorImg" : "technologiesBootstrapImg"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate1">
              <Image
                src={isUiUX ? figmaImg : technologiesReactImg}
                alt={isUiUX ? "figmaImg" : "technologiesReactImg"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate2">
              <Image
                src={isUiUX ? photoshopImg : technologiesHTMLImg}
                alt={isUiUX ? "photoshopImg" : "technologiesHTMLImg"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? xdImg : technologiesVueImg}
                alt={isUiUX ? "xdImg" : "technologiesVueImg"}
              />
            </div>
          </SwiperSlide>
          {!isUiUX && (
            <SwiperSlide className="swiper-slide Technologies-card">
              <div className="Technologies-app rotate3">
                <Image src={cssImg} alt="cssImg" />
              </div>
            </SwiperSlide>
          )}

          {!isUiUX && (
            <SwiperSlide className="swiper-slide Technologies-card">
              <div className="Technologies-app rotate3">
                <Image src={wordpress} alt="wordpress" />
              </div>
            </SwiperSlide>
          )}
          {!isUiUX && (
            <SwiperSlide className="swiper-slide Technologies-card">
              <div className="Technologies-app rotate3">
                <Image src={js} alt="js" />
              </div>
            </SwiperSlide>
          )}

          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? coreldrawImg : ts}
                alt={isUiUX ? "coreldrawImg" : "ts"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? adobesImg : node}
                alt={isUiUX ? "adobesImg" : "node"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? adobeImg : mysql}
                alt={isUiUX ? "adobeImg" : "mysql"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? adobeprimerImg : mongo}
                alt={isUiUX ? "adobeprimerImg" : "mongo"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide Technologies-card">
            <div className="Technologies-app rotate3">
              <Image
                src={isUiUX ? sketch : php}
                alt={isUiUX ? "sketch" : "php"}
              />
            </div>
          </SwiperSlide>
          {!isUiUX && (
            <SwiperSlide className="swiper-slide Technologies-card">
              <div className="Technologies-app rotate3">
                <Image src={sass} alt="sass" />
              </div>
            </SwiperSlide>
          )}
          {!isUiUX && (
            <SwiperSlide className="swiper-slide Technologies-card">
              <div className="Technologies-app rotate3">
                <Image src={python} alt="python" />
              </div>
            </SwiperSlide>
          )}
          {!isUiUX && (
            <SwiperSlide className="swiper-slide Technologies-card">
              <div className="Technologies-app rotate3">
                <Image src={flutter} alt="flutter" />
              </div>
            </SwiperSlide>
          )}
          {!isUiUX && (
            <SwiperSlide className="swiper-slide Technologies-card">
              <div className="Technologies-app rotate3">
                <Image src={dart} alt="dart" />
              </div>
            </SwiperSlide>
          )}
          {!isUiUX && (
            <SwiperSlide className="swiper-slide Technologies-card">
              <div className="Technologies-app rotate3">
                <Image src={tailwind} alt="tailwind" />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Technologies;
