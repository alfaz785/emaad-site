"use client";
import Image from "next/image";
import gallery1Img from "../../assets/images/gallery-image7.png";
import gallery7Img from "../../assets/images/gallery-image7.png";
import gallery6Img from "../../assets/images/gallery-image6.png";
import gallery4Img from "../../assets/images/gallery-image4.png";
import gallery5Img from "../../assets/images/gallery-image5.png";
import gallery8Img from "../../assets/images/gallery-image8.png";
import gallery9Img from "../../assets/images/gallery-image9.png";
import galleryImg from "../../assets/images/gallery-image.png";
import gallery2Img from "../../assets/images/gallery-image2.png";
import gallery3Img from "../../assets/images/gallery-image3.png";
import gallery10Img from "../../assets/images/gallery-image10.png";
import { useEffect, useState } from "react";
import { closeModal, openModal } from "../../../commFun";
import gsap from "gsap";

const MasonaryGallery = ({ images }) => {
  // Set initial active tab to "images"
  const [activeTab, setActiveTab] = useState("images");

  // Handle tab switching
  const openTabOne = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    gsap.from("#galleryTitle", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);
  useEffect(() => {
    let galleryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".tabcontent",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Tab buttons animation
    galleryTimeline.from(
      ".gallery-tabs button",
      {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Gallery images animation
    galleryTimeline.from(
      ".masonry img",
      {
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 2.5,
        ease: "power3.out",
      },
      "-=0.5"
    );

    galleryTimeline.from(
      ".load-more-container",
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=1"
    );
  }, []);

  return (
    <>
      <div className="container standard-gallery">
        <h3 className="mb-0">STANDARD GALLERY</h3>

        <div className="tabs gallery-tabs">
          <button
            className={`tablink ${activeTab === "images" ? "active" : ""}`}
            onClick={() => openTabOne("images")}
          >
            Images
          </button>
          <button
            className={`tablink ${activeTab === "videos" ? "active" : ""}`}
            onClick={() => openTabOne("videos")}
          >
            Videos
          </button>
        </div>

        {/* Conditionally render the content based on the active tab */}
        {activeTab === "images" && (
          <div id="images" className="">
            <div className="masonry">
              <Image
                src={galleryImg}
                alt="Image"
                onClick={() => openModal(galleryImg, "IMG")}
                className="imgCss"
              />
              <Image
                src={gallery2Img}
                alt="Image 2"
                onClick={() => openModal(gallery2Img, "IMG")}
              />
              <Image
                src={gallery3Img}
                alt="Image 3"
                onClick={() => openModal(gallery3Img, "IMG")}
              />
              <Image
                src={gallery1Img}
                alt="Image 1"
                onClick={() => openModal(gallery1Img, "IMG")}
              />
              <Image
                src={gallery8Img}
                alt="Image 8"
                onClick={() => openModal(gallery8Img, "IMG")}
              />
              <Image
                src={gallery9Img}
                alt="Image 9"
                onClick={() => openModal(gallery9Img, "IMG")}
              />{" "}
              <Image
                src={gallery4Img}
                alt="Image 4"
                onClick={() => openModal(gallery4Img, "IMG")}
              />
              <Image
                src={gallery5Img}
                alt="Image 2"
                onClick={() => openModal(gallery1Img, "IMG")}
              />
              <Image
                src={gallery6Img}
                alt="Image 6"
                onClick={() => openModal(gallery6Img, "IMG")}
              />
              <Image
                src={gallery7Img}
                alt="Image 7"
                onClick={() => openModal(gallery7Img, "IMG")}
              />
              <Image
                src={gallery10Img}
                alt="Image 10"
                onClick={() => openModal(gallery10Img, "IMG")}
              />
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div id="videos" className="">
            <div className="video-container">
              <div className="masonry">
                <div className="video-wrapper">
                  <Image
                    src={galleryImg}
                    alt="Image 1"
                    onClick={() => openModal(gallery1Img)}
                  />
                  <div className="play-button"></div>
                </div>
                <div className="video-wrapper">
                  <Image
                    src={gallery2Img}
                    alt="Image 3"
                    onClick={() => openModal(gallery2Img)}
                  />
                  <div className="play-button"></div>
                </div>
                <div className="video-wrapper">
                  <Image
                    src={gallery3Img}
                    alt="Image 3"
                    onClick={() => openModal(gallery3Img)}
                  />
                  <div className="play-button"></div>
                </div>
                <div className="video-wrapper">
                  <Image
                    src={gallery4Img}
                    alt="Image 3"
                    onClick={() => openModal(gallery4Img)}
                  />
                  <div className="play-button"></div>
                </div>
                <div className="video-wrapper">
                  <Image
                    src={gallery5Img}
                    alt="Image 3"
                    onClick={() => openModal(gallery5Img)}
                  />
                  <div className="play-button"></div>
                </div>
                <div className="video-wrapper">
                  <Image
                    src={gallery6Img}
                    alt="Image 3"
                    onClick={() => openModal(gallery6Img)}
                  />
                  <div className="play-button"></div>
                </div>
                <div className="video-wrapper">
                  <Image
                    src={gallery7Img}
                    alt="Image 3"
                    onClick={() => openModal(gallery7Img)}
                  />
                  <div className="play-button"></div>
                </div>
                <div className="video-wrapper">
                  <Image
                    src={gallery8Img}
                    alt="Image 3"
                    onClick={() => openModal(gallery8Img)}
                  />
                  <div className="play-button"></div>
                </div>
                <div className="video-wrapper">
                  <Image
                    src={gallery9Img}
                    alt="Image 3"
                    onClick={() => openModal(gallery9Img)}
                  />
                  <div className="play-button"></div>
                </div>
                <div className="video-wrapper">
                  <Image
                    src={gallery10Img}
                    alt="Image 3"
                    onClick={() => openModal(gallery10Img)}
                  />
                  <div className="play-button"></div>
                </div>
                {/* Add more video thumbnails as needed */}
              </div>
            </div>
          </div>
        )}

        <div className="load-more-container">
          <button className="load-more">Load More</button>
        </div>
      </div>
      <div id="modal" className="modal">
        <div className="modal-header">
          <span className="modal-title">El.</span>
          <div
            onClick={() => closeModal(gallery10Img)}
            className="d-flex gap-3 align-items-center"
          >
            <span className="close-text">Close</span>
            <span className="close">&times;</span>
          </div>
        </div>
        <Image className="modal-content" id="modalImage" />
        <video
          controls
          className="modal-content"
          id="modalVideo"
          style={{ display: "none" }}
        ></video>
      </div>
    </>
  );
};

export default MasonaryGallery;
