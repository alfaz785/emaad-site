"use client";
import React, { useEffect } from "react";
import featureImg from "../../assets/images/feature-img.png";
import Image from "next/image";
import { nextContent, prevContent, updateContent } from "../../../commFun";

const ProductFeature = () => {
  useEffect(() => {
    updateContent();
  }, []);
  return (
    <>
      <div className="product-swiper-title">
        <div className="container">
          <div className="produdt-text-image">
            <div className="product-text-imag">
              <div className="product-title">
                <div className="product-titel-image">
                  <Image src={featureImg} alt="" />
                  <h5>Product Features.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-slider-content container-fluid">
          <div className="slider-container">
            <div className="row">
              <div className="col-lg-5 border-end">
                <div className="slider-content">
                  <h2 id="script-title">Real Estate Script</h2>
                  <div className="slider-buttons">
                    <button className="prev" onClick={() => prevContent()}>
                      <span className="material-symbols-outlined">
                        chevron_left
                      </span>
                    </button>
                    <button className="next" onClick={() => nextContent()}>
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 product-slider-desc">
                <div
                  className="slider-description content-container"
                  id="content-container"
                >
                  <h3 id="feature-title">Multiple Property Images Upload</h3>
                  <p id="feature-description">
                    Easily upload multiple high-resolution images for each
                    property, giving potential buyers or renters a comprehensive
                    view of the listing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFeature;
