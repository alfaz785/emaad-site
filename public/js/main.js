const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".close");

let navbar_tl = gsap.timeline({ paused: true });
navbar_tl.to(".menu-content", {
  opacity: 1,
  duration: 1,
  top: 0,
  ease: Power2.easeInOut,
  zIndex: 9,
});
navbar_tl.to(".nav-text", {
  opacity: 1,
  duration: 1,
  stagger: 0.3,
  marginTop: 0,
  ease: Power2.easeInOut,
});

menuBtn.addEventListener("click", () => {
  navbar_tl.play().timeScale(1);
  const body = document.getElementById("body");
  body.style.overflow = "hidden";
});
closeBtn.addEventListener("click", () => {
  navbar_tl.timeScale(3);
  navbar_tl.reverse();

  const body = document.getElementById("body");
  body.style.overflow = "";
});
// drowpdown click

// document.addEventListener("DOMContentLoaded", function () {
//   // Toggle dropdown visibility
//   document.querySelectorAll(".nav-link").forEach(function (navLink) {
//     navLink?.addEventListener("click", function (event) {
//       event.preventDefault();
//       let dropdown = navLink.nextElementSibling;
//       if (dropdown) {
//         dropdown?.classList?.toggle("active");
//       }
//     });
//   });

//   // Toggle submenus
//   document?.querySelectorAll(".nav-drowpdown").forEach(function (dropLink) {
//     dropLink?.addEventListener("click", function (event) {
//       event.preventDefault();
//       let submenu = dropLink.nextElementSibling;
//       if (submenu) {
//         submenu?.classList?.toggle("active");
//       }
//     });
//   });
// });
// let lastScrollTop = 0;

// window?.addEventListener(
//   "scroll",
//   function () {
//     let currentScroll =
//       window.pageYOffset || document.documentElement.scrollTop;
//     if (currentScroll > lastScrollTop) {
//       // Scroll down
//       document.querySelector(".nav-bar")?.classList?.add("hidden");
//       document.querySelector(".nav-bar")?.classList?.remove("visible");
//     } else {
//       // Scroll up
//       document.querySelector(".nav-bar")?.classList?.remove("hidden");
//       document.querySelector(".nav-bar")?.classList?.add("visible");
//     }
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
//   },
//   false,
// );

// cursor
// var cursor = document.querySelector(".cursor"),
//   cusorScale = document.querySelectorAll(".cusor-scale"), // a code classma mukva mate je text pr jay tya mukva matejya cursor jay tya cursor motu thay
//   mouseX = 0,
//   mouseY = 0;

// gsap.to({}, 0.016, {
//   repeat: -1,

//   onRepeat: function () {
//     gsap.set(cursor, {
//       css: {
//         left: mouseX,
//         top: mouseY,
//       },
//     });
//   },
// });
// gwoth design start
// document.addEventListener("DOMContentLoaded", function () {
//   const checkbox = document.querySelector(".checkbox");
//   const section = document.querySelector(".grow-toggel-section");

//   checkbox?.addEventListener("change", function () {
//     if (checkbox.checked) {
//       section?.classList?.add("dark");
//     } else {
//       section?.classList?.remove("dark");
//     }
//   });

//   let mouseX = 0,
//     mouseY = 0;
//   const cursor = document.querySelector(".cursor"); // Assuming you have a cursor element
//   const cursorScale = document.querySelectorAll(".cursor-scale");

//   window.addEventListener("mousemove", function (e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//     cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
//   });

//   cursorScale.forEach((link) => {
//     link?.addEventListener("mouseleave", () => {
//       cursor?.classList?.remove("grow");
//       cursor?.classList?.remove("grow-small");
//     });
//     link?.addEventListener("mousemove", () => {
//       cursor?.classList?.add("grow");
//       if (link?.classList?.contains("small")) {
//         cursor?.classList?.remove("dark");
//         cursor?.classList?.add("grow-small");
//       }
//     });
//   });
// });
// gwoth design end

// border-imagegr
gsap.to(".border-bottom img", {
  duration: 3,
  delay: 1.5,
  rotate: 360,
  scale: 0.3,
  //   rotate: 260,
  repeat: -1,
  yoyo: true,
});

// ============= rain drop  animation============

const rainContainer = document.querySelector(".rain-container");
const background = ["aqua", "red", "limegreen", "white", "yellow"];

const amount = 10;
let i = 0;

if (rainContainer) {
  while (i < amount) {
    // Creating an Element
    const drop = document.createElement("i");

    // CSS Properties for raindrop
    const raindropProperties = {
      width: Math.random() + 1 + "px",
      positionX: Math.floor(Math.random() * window.innerWidth) + "px",
      delay: Math.random() * -50 + "s",
      duration: Math.random() + 1 + 7 + "s",
      bg:
        background.length > 0
          ? background[Math.floor(Math.random() * background.length)]
          : "#3498db",
      opacity: Math.random() + 0.1,
    };

    // Setting Styles for raindrop
    drop.style.width = raindropProperties.width;
    drop.style.left = raindropProperties.positionX;
    drop.style.animationDelay = raindropProperties.delay;
    drop.style.animationDuration = raindropProperties.duration;
    drop.style.background = raindropProperties.bg;
    drop.style.opacity = raindropProperties.opacity;

    // Appending the raindrop to the raindrop container
    rainContainer.appendChild(drop);
    i++;
  }
}
// marque scroll move
// function marqueAnimation() {
//   window.addEventListener("wheel", function (dets) {
//     if (dets.deltaY > 0) {
//       gsap.to(".marque", {
//         transform: "translateX(-200%)",
//         duration: 4,
//         repeat: -1,
//         ease: "none",
//       });
//       gsap.to(".marque .whell ", {
//         rotate: 0,
//       });
//     } else {
//       gsap.to(".marque", {
//         transform: "translateX(0%)",
//         duration: 4,
//         repeat: -1,
//         ease: "none",
//       });
//       gsap.to(".marque .whell ", {
//         rotate: 180,
//       });
//     }
//   });
// }

// marqueAnimation();

// Delivering Innovation that thrives card start

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#delivering-main",
//     // markers: true,
//     start: "0% 10%",
//     end: "90% 50%",
//     scrub: 2,
//     pin: true,
//   },
// });

// tl.to(
//   ".text",
//   {
//     top: "-5%",
//   },
//   "a",
// )
//   .to(
//     "#card-one",
//     {
//       top: "30%",
//     },
//     "a",
//   )
//   .to(
//     "#card-two",
//     {
//       top: "130%",
//     },
//     "a",
//   )
//   .to(
//     "#card-two",
//     {
//       top: "32%",
//     },
//     "b",
//   )
//   .to(
//     "#card-one",
//     {
//       width: "65%",
//     },
//     "b",
//   )
//   .to(
//     "#card-three",
//     {
//       top: "130%",
//     },
//     "b",
//   )
//   .to(
//     "#card-three",
//     {
//       top: "34%",
//     },
//     "c",
//   )
//   .to(
//     "#card-two",
//     {
//       width: "70%",
//     },
//     "c",
//   )
//   .to(
//     "#card-four",
//     {
//       top: "130%",
//     },
//     "c",
//   )
//   .to(
//     "#card-four",
//     {
//       top: "38%",
//     },
//     "d",
//   )
//   .to(
//     "#card-three",
//     {
//       width: "75%",
//     },
//     "d",
//   )
//   .to(
//     "#card-four",
//     {
//       width: "80%",
//     },
//     "e",
//   );

// Delivering Innovation that thrives card End
// ===========/*We Have Some Easy Steps start */=================
// title animation start
// document.addEventListener("DOMContentLoaded", function () {
//   const section = document.querySelector(".intro-text");
//   if (section) {
//     const heading = section?.querySelector("h4");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             gsap.from(heading, {
//               opacity: 0,
//               y: 50,
//               duration: 1,
//               delay: 0.5,
//             });
//             observer?.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     observer?.observe(section);
//   }
// });
// title animation end

// const easy = document.querySelector(".easy");
// const sections = gsap.utils.toArray(".easy section");
// const texts = gsap.utils.toArray(".anim");
// const mask = document.querySelector(".mask");
// let scrollTween = gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".easy",
//     pin: true,
//     scrub: 1,
//     end: "+=3000",
//     // snap: 1 / (sections.length - 1),
//     // markers: true,
//   },
// });

// console.log(1 / (sections.length - 1));

// gsap.to(".discovery", {
//   duration: 5, // Slower rotation
//   delay: 1,
//   rotate: 360,
//   repeat: -1,
//   yoyo: true,
//   ease: "power1.inOut", // Add easing for smoother animation
// });

// //Progress bar animation

// gsap.to(mask, {
//   width: "100%",
//   scrollTrigger: {
//     trigger: ".wrapper",
//     start: "top left",
//     scrub: 1,
//   },
// });

// // whizz around the sections
// sections.forEach((section) => {
//   // grab the scoped text
//   let text = section.querySelectorAll(".anim");
//   // if (text.length === 0) return;

//   gsap.from(text, {
//     y: -130,
//     opacity: 0,
//     duration: 2,
//     ease: "elastic",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: section,
//       containerAnimation: scrollTween,
//       start: "left center",
//       //   markers: true,
//     },
//   });
// });

// ====We Have Some Easy Steps End=======
// ====Leading eCommerce  Software start=====

// var thumbs = new Swiper(".thumbs", {
//   centeredSlidesBounds: true,
//   slidesPerView: 2,
//   direction: "horizontal",
//   watchOverflow: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
//   spaceBetween: 20,
//   speed: 1200,
// });
// var slider = new Swiper(".main-slider", {
//   spaceBetween: 1000,
//   initialSlide: 1,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   effect: "coverflow",
//   speed: 2000,
//   thumbs: {
//     swiper: thumbs,
//   },
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
// });

// gsap.from(".thumbs .swiper-slide", {
//   x: 1000,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.2,
//   delay: 1,
// });

// Leading eCommerce  Software title animation start
// document.addEventListener("DOMContentLoaded", () => {
//   const titles = document.querySelectorAll(".sec-title-3");
//   const options = {
//     threshold: 0.5,
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const letters = entry.target.querySelectorAll(".letter");

//         gsap.set(letters, { display: "inline-block" });

//         gsap.from(letters, {
//           duration: 1,
//           opacity: 0,
//           scale: 0.3,
//           rotation: 90,
//           ease: "back.out(1.7)",
//           stagger: {
//             amount: 1,
//           },
//         });

//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   titles.forEach((title) => observer?.observe(title));
// });

// Leading eCommerce  Software title animation End
// Leading eCommerce  Software paragraph animation start
// document.addEventListener("DOMContentLoaded", function () {
//   const paragraph = document.querySelector("p.leading");
//   if (paragraph) {
//     const words = paragraph?.innerHTML
//       .split(" ")
//       .map((word) => `<span>${word}</span>`)
//       .join(" ");

//     paragraph.innerHTML = words;

//     const spans = paragraph.querySelectorAll("span");

//     const tl = gsap.timeline({ paused: true });

//     tl.from(spans, {
//       duration: 1,
//       opacity: 0,
//       y: 20,
//       stagger: 0.1,
//       ease: "power1.out",
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             tl.play();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.querySelector("p.leading");
//     observer?.observe(section);
//   }
// });
// Leading eCommerce  Software paragraph animation End
// why choose us start Paragraph start

// document.addEventListener("DOMContentLoaded", function () {
//   const paragraph = document.querySelector("p.most");

//   if (paragraph) {
//     const words = paragraph?.innerHTML
//       .split(" ")
//       .map((word) => `<span>${word}</span>`)
//       .join(" ");
//     paragraph.innerHTML = words;

//     const spans = paragraph.querySelectorAll("span");

//     const tl = gsap.timeline({ paused: true });

//     tl.from(spans, {
//       duration: 0.5, // Reduced duration for faster animation
//       opacity: 0,
//       y: 10, // Reduced y distance for a subtler effect
//       stagger: 0.05, // Reduced stagger time for faster sequencing
//       ease: "power1.out",
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             tl.play();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.querySelector("p.most");
//     observer?.observe(section);
//   }
// });

// why choose us start Paragraph End
// Awesome  Projects section start

var portfolio_slider = new Swiper(".portfolio__slider-2", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (i, className) {
      return `
        <button class="${className}">
          <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
        </button>
      `;
    },
  },
});

var portfolio_project_thumbs = new Swiper(".portfolio__project-thumbs", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  allowTouchMove: false,
});
var portfolio_project = new Swiper(".portfolio__project-slider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".pp-next",
    prevEl: ".pp-prev",
  },
  thumbs: {
    swiper: portfolio_project_thumbs,
  },
});
// awesome section title animation start

// document.addEventListener("DOMContentLoaded", () => {
//   const head = document.querySelector(".sec-title-1");
//   if (head) {
//     const options = {
//       threshold: 0.5, // Adjust this value as needed
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           gsap.set(".letter", { display: "inline-block" });

//           gsap.from(".letter", {
//             duration: 1,
//             opacity: 0,
//             scale: 0.3,
//             rotation: 90,
//             ease: "back.out(1.7)",
//             stagger: {
//               amount: 1,
//             },
//           });

//           observer.unobserve(entry.target);
//         }
//       });
//     }, options);

//     observer?.observe(head);
//   }
// });

// awesome section title animation end

// awesome blog text animation

// document.addEventListener("DOMContentLoaded", function () {
//   const paragraph = document.querySelector(".awesome_blog_text .mb-0");

//   if (paragraph) {
//     const words = paragraph?.innerHTML
//       .split(" ")
//       .map((word) => `<span>${word}</span>`)
//       .join(" ");
//     paragraph.innerHTML = words;

//     const spans = paragraph.querySelectorAll("span");

//     const tl = gsap.timeline({ paused: true });

//     tl.from(spans, {
//       duration: 1,
//       opacity: 0,
//       y: 20,
//       stagger: 0.1,
//       ease: "power1.out",
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             tl.play();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.getElementById("animated-section");
//     observer?.observe(section);
//   }
// });
// // ======== wc-btn-primary Magnetic Button Hover Effect with gsap
// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".wc-btn-primary");

//   buttons?.forEach((button) => {
//     button?.addEventListener("mousemove", (e) => {
//       const rect = button.getBoundingClientRect();
//       const x = e.clientX - rect.left - rect.width / 2;
//       const y = e.clientY - rect.top - rect.height / 2;

//       gsap.to(button, {
//         x: x * 0.3,
//         y: y * 0.3,
//         duration: 0.3,
//         ease: "power3.out",
//       });

//       gsap.to(button.querySelector(".circle"), {
//         x: x * 0.3,
//         y: y * 0.3,
//         duration: 0.3,
//         ease: "power3.out",
//       });
//     });

//     button?.addEventListener("mouseleave", () => {
//       gsap.to(button, {
//         x: 0,
//         y: 0,
//         duration: 0.3,
//         ease: "power3.out",
//       });

//       gsap.to(button.querySelector(".circle"), {
//         x: 0,
//         y: 0,
//         duration: 0.3,
//         ease: "power3.out",
//       });
//     });
//   });
// });

// ======== wc-btn-primary Magnetic Button Hover Effect with gsap end
// == Customers EXperiences SECTION IMAGE=======

gsap.to(".experiences", {
  duration: 5,
  rotate: 360,
  repeat: -1,
  ease: "linear",
});

// == Customers EXperiences SECTION IMAGE END =======
// Customers EXperiences Section para start
// document.addEventListener("DOMContentLoaded", function () {
//   const paragraph = document.querySelector("p.para");

//   if (paragraph) {
//     const words = paragraph?.innerHTML
//       .split(" ")
//       .map((word) => `<span>${word}</span>`)
//       .join(" ");
//     paragraph.innerHTML = words;

//     const spans = paragraph.querySelectorAll("span");

//     const tl = gsap.timeline({ paused: true });

//     tl.from(spans, {
//       duration: 1,
//       opacity: 0,
//       y: 20,
//       stagger: 0.1,
//       ease: "power1.out",
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             tl.play();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.querySelector("p.para");
//     observer?.observe(section);
//   }
// });
// // Customers EXperiences Section para End
// // <!-- 1=======Left-swiper-code start=========1 -->

// document.addEventListener("DOMContentLoaded", function () {
//   var swiper2 = new Swiper(".leftSwiper", {
//     spaceBetween: 10,
//     slidesPerView: "auto",
//     loop: true,
//     autoplay: {
//       delay: 0,
//       disableOnInteraction: false,
//     },
//     speed: 5000,
//   });

//   // Add event listeners for hover to control autoplay
//   document
//     .querySelectorAll(".leftSwiper .swiper-slide")
//     .forEach(function (slide) {
//       slide?.addEventListener("mouseenter", function () {
//         swiper2.autoplay.stop();
//       });
//       slide?.addEventListener("mouseleave", function () {
//         swiper2.autoplay.start();
//       });
//     });
// });

// // <!-- 1=======Left-swiper-code end=========1 -->
// // <!-- 2=======Right-swiper-code start=========2 -->

// document?.addEventListener("DOMContentLoaded", function () {
//   var swiper2 = new Swiper(".rightSwiper", {
//     spaceBetween: 10,
//     slidesPerView: "auto",
//     direction: "horizontal",
//     loop: true,
//     autoplay: {
//       delay: 0,
//       disableOnInteraction: false,
//       reverseDirection: true,
//     },
//     speed: 5000,
//   });

//   // Add event listeners for hover to control autoplay
//   document
//     .querySelectorAll(".rightSwiper .swiper-slide")
//     .forEach(function (slide) {
//       slide?.addEventListener("mouseenter", function () {
//         swiper2.autoplay.stop();
//       });
//       slide?.addEventListener("mouseleave", function () {
//         swiper2.autoplay.start();
//       });
//     });
// });

// // <!-- 2=======Right-swiper-code end=========2 -->

// // =======Ideas can't wait section p title ==============

// document.addEventListener("DOMContentLoaded", function () {
//   // Split the text into individual characters for the first animation
//   const text1 = document.getElementById("brands");
//   const characters1 = text1?.innerText.split("");
//   if (characters1 && text1) {
//     text1.innerHTML = characters1
//       .map((char, index) => {
//         if (char === " ") {
//           return `<span class="char">&nbsp;</span>`;
//         }
//         return `<span class="char">${char}</span>`;
//       })
//       .join("");
//   }

//   // Get all the character elements for the first animation
//   const chars1 = document.querySelectorAll("#brands .char");

//   if (chars1) {
//     // Register the ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger);

//     // Create a timeline for the first animation
//     const tl1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#breathing",
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//     });

//     // Animate each character with a wave effect for the first animation
//     tl1.from(chars1, {
//       duration: 1,
//       opacity: 0,
//       y: 50,
//       ease: "elastic.out(1, 0.5)",
//       stagger: 0.05,
//     });
//   }
// });

// // =========Ideas can't wait. Put us to title start animation=============
// document.addEventListener("DOMContentLoaded", () => {
//   const titles = document.querySelectorAll(".sec-title-2");
//   const options = {
//     threshold: 0.5,
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const letters = entry.target.querySelectorAll(".letter");

//         gsap.set(letters, { display: "inline-block" });

//         gsap.from(letters, {
//           duration: 1,
//           opacity: 0,
//           scale: 0.3,
//           rotation: 90,
//           ease: "back.out(1.7)",
//           stagger: {
//             amount: 1,
//           },
//         });

//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   titles.forEach((title) => observer?.observe(title));
// });
// =========Ideas can't wait. Put us to title End animation=============
// =========Services page start=============
//  Rotate Circular  start

// $(document).ready(function () {
//   const rotated = document.getElementById("rotated");
//   if (rotated) {
//     const circleType = new CircleType(rotated).radius(80);
//   }

//   $(window).scroll(function () {
//     var offset = $(window).scrollTop();
//     offset = offset * 0.4;

//     $(".circular-text").css({
//       transform: "rotate(" + offset + "deg)",
//     });
//   });
// });
//  Rotate Circular  End

// UI/UX Design section title move left start

// document.addEventListener("DOMContentLoaded", function () {
// gsap.registerPlugin(ScrollTrigger);

// const sections = document.querySelectorAll(".uiux-design-section");

// sections.forEach((section) => {
//   const uiuxTitleMain = section.querySelector(".uiux-title-main");

//   gsap.fromTo(
//     uiuxTitleMain,
//     { x: 0 },
//     {
//       x: -400, //
//       scrollTrigger: {
//         trigger: section,
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     }
//   );
// });
// });
// UI/UX Design section move left End
// UI/UX Design hover image effect start

// document.addEventListener("DOMContentLoaded", function () {
//   const titles = document.querySelectorAll(".uiux-title-main");
//   const cursorCircle = document.getElementById("cursor-circle");
//   let currentIndex = 0;

//   // Array of image URLs
//   const imageUrls = [
//     "../assets/images/hover-image.png",
//     "../assets/images/hover-image1.png",
//     "../assets/images/hover-image2.png",
//     "../assets/images/hover-image3.png",
//   ];

//   let intervalId;

//   titles.forEach((title) => {
//     title?.addEventListener("mouseenter", function () {
//       if (cursorCircle) cursorCircle.style.display = "block";

//       updateCircleImage();
//       intervalId = setInterval(updateCircleImage, 2000);
//     });

//     title?.addEventListener("mouseleave", function () {
//       if (cursorCircle) cursorCircle.style.display = "none";
//       clearInterval(intervalId);
//     });
//   });

//   document.addEventListener("mousemove", function (e) {
//     const x = e.clientX - 100; // Adjust to center the circle
//     const y = e.clientY - 100; // Adjust to center the circle
//     if (cursorCircle) {
//       cursorCircle.style.left = x + "px";
//       cursorCircle.style.top = y + "px";
//     }
//   });

//   // Function to update circle image
//   function updateCircleImage() {
//     if (cursorCircle)
//       cursorCircle.style.backgroundImage = `url(${imageUrls[currentIndex]})`;
//     currentIndex = (currentIndex + 1) % imageUrls.length;
//   }
// });
// // UI/UX Design hover image effect End

// // uiux-subtitle text animation start

// document.addEventListener("DOMContentLoaded", function () {
//   const animateText = function (id) {
//     // Split the text into individual characters for the animation
//     const text = document.getElementById(id);
//     if (text) {
//       const characters = text?.innerText?.split("");
//       text.innerHTML = characters
//         ?.map((char) => `<span class="char">${char}</span>`)
//         ?.join("");
//     }

//     // Get all the character elements for the animation
//     const chars = document.querySelectorAll(`#${id} .char`);
//     if (chars) {
//       // Register the ScrollTrigger plugin
//       gsap.registerPlugin(ScrollTrigger);

//       // Create a timeline for the animation
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: `#${id}`,
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//       });

//       // Animate each character with a wave effect
//       tl.from(chars, {
//         duration: 1,
//         opacity: 0,
//         y: 50,
//         ease: "elastic.out(1, 0.5)",
//         stagger: 0.05,
//       });
//     }
//   };

//   // Apply animation to each text element
//   animateText("uiux");
//   animateText("design");
//   animateText("development");
//   animateText("digital");
//   animateText("developing");
// });

// // uiux-subtitle text animation End

// // uiux-subtitle paragraph text animation start
// document.addEventListener("DOMContentLoaded", function () {
//   let paragraphs = document.querySelectorAll(".lead");
//   paragraphs.forEach((paragraph) => {
//     paragraph.innerHTML = paragraph?.innerHTML?.replace(
//       /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
//       "$1</span>$2<span>"
//     );
//   });

//   // Observer options
//   let options = {
//     root: null, // Use the viewport as the container
//     rootMargin: "0px",
//     threshold: 0.1, // Trigger when 10% of the paragraph is visible
//   };

//   // Create an Intersection Observer
//   let observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         let paragraph = entry.target;

//         gsap.from(`#${paragraph.id} span`, {
//           opacity: 0,
//           y: "100%",
//           duration: 1,
//           ease: "power2.out",
//           stagger: 0.1,
//           onComplete: function () {
//             gsap.to(`#${paragraph.id}`, { opacity: 1, duration: 0 });
//           },
//         });

//         observer.unobserve(paragraph);
//       }
//     });
//   }, options);

//   paragraphs.forEach((paragraph) => {
//     observer?.observe(paragraph);
//   });

//   gsap.from("#mainTitle", {
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//   });
// });
// uiux-subtitle paragraph text animation End

// ==========web development page start===========

// Trusted  Partner Title start
// document.addEventListener("DOMContentLoaded", () => {
//   const tl = gsap.timeline();

//   tl.from(".hero-heading", {
//     duration: 1,
//     y: 50,
//     opacity: 0,
//     ease: "power3.out",
//   }).from(
//     ".trusted",
//     {
//       duration: 10, // Increase duration for a slower effect
//       scale: 0,
//       rotation: 360,
//       ease: "elastic.out(1, 0.3)",
//     },
//     "-=0.5"
//   ); // Overlap the animation by 0.5 seconds
// });
// // Trusted  Partner Title End
// // Trusted  Partner paragraph Start

// document.addEventListener("DOMContentLoaded", function () {
//   const paragraph = document.querySelector(".hero-description");

//   if (paragraph) {
//     const words = paragraph?.innerHTML
//       .split(" ")
//       .map((word) => `<span>${word}</span>`)
//       .join(" ");
//     paragraph.innerHTML = words;

//     const spans = paragraph.querySelectorAll("span");

//     const tl = gsap.timeline({ paused: true });

//     // Adjust the duration and stagger values to speed up the animation
//     tl.from(spans, {
//       duration: 0.3,
//       opacity: 0,
//       y: 20,
//       stagger: 0.02,
//       ease: "power2.inOut",
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             tl.play();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.querySelector(".hero-description");
//     observer?.observe(section);
//   }
// });

//========= Trusted  Partner paragraph End==========
//===== Trusted  Partner button start==========

// Trusted  Partner button end
// unlock title animation start
// document.addEventListener("DOMContentLoaded", () => {
//   const section = document.querySelector(".unlock-title");
//   const options = {
//     threshold: 0.5,
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         gsap.set(".letter", { display: "inline-block" });

//         gsap.from(".letter", {
//           duration: 1,
//           opacity: 0,
//           scale: 0.3,
//           rotation: 90,
//           ease: "back.out(1.7)",
//           stagger: {
//             amount: 1,
//           },
//         });

//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   observer?.observe(section);
// });
// unlock title animation End

//unlock section  tabs script start
// function openTab(evt, tabName) {
//   var i, tabContent, tabLinks;

//   tabContent = document.getElementsByClassName("tab-pane");
//   for (i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = "none";
//   }

//   tabLinks = document.getElementsByClassName("tab-link");
//   for (i = 0; i < tabLinks.length; i++) {
//     tabLinks[i].className = tabLinks[i].className.replace(" active", "");
//   }

//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".tab-link").click();
// });
// // === unlock section tabs script End=======
// //unlock section tabs  title animation start
// document.addEventListener("DOMContentLoaded", function () {
//   const tabTitles = document.querySelectorAll(".tab-pane h5.unlock-sub-title");

//   tabTitles.forEach((tabTitle) => {
//     const words = tabTitle.textContent.trim().split(/\s+/);

//     console.log(words);

//     const newHTML = words
//       .map((word) => `<div class='animated-char'>&nbsp;${word}</div>`)
//       .join("");
//     tabTitle.innerHTML = newHTML;

//     const chars = tabTitle.querySelectorAll(".animated-char");

//     const tl = gsap.timeline({ paused: true });

//     tl.from(chars, {
//       duration: 1.5,
//       opacity: 0,
//       y: 90,
//       stagger: 0.03,
//       ease: "elastic(1.2, 0.5)",
//     });

//     // Intersection Observer to trigger animation when tab title is in view
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             tl.play(); // Play animation when in view
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     observer?.observe(tabTitle);
//   });
// });
// // unlock section  tabs title animation End
// // unlock section tabs list animation start
// document.addEventListener("DOMContentLoaded", function () {
//   const servicesLists = document.querySelectorAll(".services-list");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           gsap.to(entry.target.querySelectorAll("li"), {
//             duration: 0.8,
//             opacity: 1,
//             y: 0,
//             ease: "bounce.out",
//             stagger: 0.2,
//             delay: 1,
//           });
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       threshold: 0.1,
//     }
//   );

//   servicesLists.forEach((list) => observer?.observe(list));
// });
// ===unlock section tabs list animation start===
// /*========process section start ======== */

gsap.registerPlugin(ScrollTrigger);

// function setupAnimations() {
//   gsap.to(".img-holder", {
//     scrollTrigger: {
//       trigger: ".reveal-section",
//       start: "center center",
//       end: "bottom bottom",
//       scrub: 1,
//     },
//     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//     rotate: 0,
//     ease: "none",
//   });

//   gsap.to(".img-holder img", {
//     scrollTrigger: {
//       trigger: ".reveal-section",
//       start: "center center",
//       end: "bottom bottom",
//       scrub: 1,
//     },
//     scale: 1,
//     ease: "none",
//   });

//   // Text animation
//   gsap.to(".letters div", {
//     scrollTrigger: {
//       trigger: ".reveal-section",
//       start: "center center",
//       end: "bottom bottom",
//       scrub: 1,
//     },
//     x: (i, target) => (i % 2 === 0 ? "-100vw" : "100vw"),
//     ease: "power1.inOut",
//   });
// }

// setupAnimations();
// /* ======== process section End ========= */
// =====Technologies we use slider script start=====
// <!-- Technologies we use swiper animation start  -->
// document.addEventListener("DOMContentLoaded", function () {
//   new Swiper(".Technologies-us-card", {
//     // loop: true,
//     slidesPerView: 5,
//     spaceBetween: 10,
//     speed: 600, // Adjust the speed for smooth scrolling
//     breakpoints: {
//       310: {
//         slidesPerView: 1,
//         spaceBetween: 10,
//       },
//       480: {
//         slidesPerView: 2,
//         spaceBetween: 10,
//       },
//       980: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       },
//       1200: {
//         slidesPerView: 4,
//         spaceBetween: 30,
//       },
//       1400: {
//         slidesPerView: 5,
//         spaceBetween: 20,
//       },
//     },
//     freeMode: true,
//     freeModeMomentum: true,
//   });
// });
// <!-- Technologies we use swiper animation end  -->
// ==========web development page End===========
// =======App Development Page start==========

// go mobile title animation start

// document.addEventListener("DOMContentLoaded", () => {
// const tl = gsap.timeline();

// tl.from(".go-mobile", {
//   duration: 1,
//   y: 50,
//   opacity: 0,
//   ease: "power3.out",
// }).from(
//   ".mobile-star",
//   {
//     duration: 10,
//     scale: 0,
//     rotation: 360,
//     ease: "elastic.out(1, 0.3)",
//   },
//   "-=0.5"
// );
// });
// go mobile title animation end
//== Our  Platforms  and Technologies title start==

// document.addEventListener("DOMContentLoaded", function () {
//   function splitTextToCharsWithSpaces(element) {
//     if (element) {
//       const words = element.innerText.split(" ");
//       const charactersWithSpaces = words
//         .map((word) => word.split("").concat("&nbsp;"))
//         .flat();
//       element.innerHTML = charactersWithSpaces
//         .map((char) => `<span class="char">${char}</span>`)
//         .join("");
//     }
//   }

//   const text2 = document.getElementById("our-title");
//   splitTextToCharsWithSpaces(text2);

//   const chars2 = document.querySelectorAll("#our-title .char");
//   if (chars2) {
//     for (let index = 4; index <= 13; index++) {
//       chars2[index].setAttribute(
//         "style",
//         `
//         background: linear-gradient(104.02deg, #2d9cdb 0%, #2dc97a 88.31%);
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//       `
//       );
//     }
//     gsap.registerPlugin(ScrollTrigger);

//     const tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#platforms",
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//     });

//     tl2.from(chars2, {
//       duration: 1,
//       opacity: 0,
//       y: 50,
//       ease: "elastic.out(1, 0.5)",
//       stagger: 0.05,
//     });
//   }
// });
// ==Our Platforms and Technologies title End==
// ===Our Platforms and Technologies para start===
// document.addEventListener("DOMContentLoaded", function () {
//   const paragraph = document.querySelector(".title-para");

//   if (paragraph) {
//     const words = paragraph?.innerHTML
//       .split(" ")
//       .map((word) => `<span>${word}</span>`)
//       .join(" ");
//     paragraph.innerHTML = words;

//     const spans = paragraph.querySelectorAll("span");

//     const tl = gsap.timeline({ paused: true });

//     tl.from(spans, {
//       duration: 0.3,
//       opacity: 0,
//       y: 20,
//       stagger: 0.02,
//       ease: "power2.inOut",
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             tl.play();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.querySelector(".title-para");
//     observer?.observe(section);
//   }
// });
// ===Our Platforms and Technologies para End==
// =========domain hosting page start============
//  Elevate Your Online first title start
// document.addEventListener("DOMContentLoaded", function () {
//   const parts = [
//     { id: "part5", text: "Elevate Your Online Presence With Premium " },
//     { id: "part6", text: "Domain" },
//     { id: "ampersand", text: " & " },
//     { id: "part7", text: "Hosting" },
//     { id: "part8", text: "Services" },
//   ];

//   let currentPart = 0;
//   let currentIndex = 0;
//   const typingSpeed = 100;

//   function type() {
//     if (currentPart < parts.length) {
//       const element = document.getElementById(parts[currentPart].id);
//       if (currentIndex < parts[currentPart].text.length) {
//         element.style.opacity = 1;
//         element.innerHTML += parts[currentPart].text[currentIndex];
//         currentIndex++;
//         setTimeout(type, typingSpeed);
//       } else {
//         currentPart++;
//         currentIndex = 0;
//         setTimeout(type, typingSpeed);
//       }
//     }
//   }

//   type();
// });
//  Elevate Your Online first title End
// The Importance of a Unique Domain Name title
// document.addEventListener("DOMContentLoaded", () => {
//   const head = document.querySelector(".domain-title-main");
//   if (head) {
//     const options = {
//       threshold: 0.5, // Adjust this value as needed
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           gsap.set(".letter", { display: "inline-block" });

//           gsap.from(".letter", {
//             duration: 1,
//             opacity: 0,
//             scale: 0.3,
//             rotation: 90,
//             ease: "back.out(1.7)",
//             stagger: {
//               amount: 1,
//             },
//           });

//           observer.unobserve(entry.target);
//         }
//       });
//     }, options);

//     observer?.observe(head);
//   }
// });

// The Importance of a Unique Domain Name title end

// advanced-security-right para start
// document.addEventListener("DOMContentLoaded", function () {
//   const paragraph = document.querySelector(".hosting-services");

//   if (paragraph) {
//     const words = paragraph.innerHTML
//       .split(" ")
//       .map((word) => `<span>${word}</span>`)
//       .join(" ");
//     paragraph.innerHTML = words;

//     const spans = paragraph.querySelectorAll("span");

//     const tl = gsap.timeline({ paused: true });

//     tl.from(spans, {
//       duration: 0.3,
//       opacity: 0,
//       y: 20,
//       stagger: 0.02,
//       ease: "power2.inOut",
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             tl.play();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(paragraph);
//   }
// });
// advanced-security-right para end
// domain-importance-para start
// document.addEventListener("DOMContentLoaded", function () {
//   const paragraph = document.querySelector(".domain-importance-para");

//   if (paragraph) {
//     const words = paragraph.innerHTML
//       .split(" ")
//       .map((word) => `<span>${word}</span>`)
//       .join(" ");
//     paragraph.innerHTML = words;

//     const spans = paragraph.querySelectorAll("span");

//     const tl = gsap.timeline({ paused: true });

//     tl.from(spans, {
//       duration: 0.3,
//       opacity: 0,
//       y: 20,
//       stagger: 0.02,
//       ease: "power2.inOut",
//     });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             tl.play();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(paragraph);
//   }
// });
// // domain-importance-para End
// // =========careers page start==============
// // careers-section-title animation start
// document.addEventListener("DOMContentLoaded", function () {
//   const parts = [
//     { id: "part1", text: "We Don’t Offer " },
//     { id: "part2", text: "Jobs." },
//     { id: "part3", text: "We Offer " },
//     { id: "part4", text: "Careers." },
//   ];

//   let currentPart = 0;
//   let currentIndex = 0;
//   const typingSpeed = 100;

//   function type() {
//     if (currentPart < parts.length) {
//       const element = document.getElementById(parts[currentPart].id);
//       if (currentIndex < parts[currentPart].text.length) {
//         element.style.opacity = 1;
//         element.innerHTML += parts[currentPart].text[currentIndex];
//         currentIndex++;
//         setTimeout(type, typingSpeed);
//       } else {
//         currentPart++;
//         currentIndex = 0;
//         setTimeout(type, typingSpeed);
//       }
//     }
//   }

//   type();
// });
// // careers-section-title animation start end
// //Why Work with Emaad Infotech section hover effect start
// document.addEventListener("DOMContentLoaded", function () {
//   const infoItems = document.querySelectorAll(
//     ".dynamic-work-section .info-item"
//   );

//   infoItems.forEach((item) => {
//     item.addEventListener("mouseenter", () => {
//       // Collapse all items first
//       infoItems.forEach((i) => {
//         i.classList.remove("col-md-6");
//         i.classList.add("col-md-2");
//       });

//       // Expand the hovered item
//       item.classList.remove("col-md-2");
//       item.classList.add("col-md-6");
//     });
//   });
// });
// //Why Work with Emaad Infotech section hover effect End
// // current openings section title animation start
// document.addEventListener("DOMContentLoaded", function () {
//   function splitTextToCharsWithSpaces(element) {
//     if (element) {
//       const words = element.innerText.split(" ");
//       const charactersWithSpaces = words
//         .map((word) => word.split("").concat("&nbsp;"))
//         .flat();
//       element.innerHTML = charactersWithSpaces
//         .map((char) => `<span class="char">${char}</span>`)
//         .join("");
//     }
//   }

//   const text2 = document.getElementById("current-openings");
//   splitTextToCharsWithSpaces(text2);

//   const chars2 = document.querySelectorAll("#current-openings .char");
//   if (chars2) {
//     for (let index = 7; index <= 15; index++) {
//       chars2[index].setAttribute(
//         "style",
//         `
//         background: linear-gradient(104.02deg, #2d9cdb 0%, #2dc97a 88.31%);
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//       `
//       );
//     }
//     gsap.registerPlugin(ScrollTrigger);

//     const tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: "#openings",
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//     });

//     tl2.from(chars2, {
//       duration: 1,
//       opacity: 0,
//       y: 50,
//       ease: "elastic.out(1, 0.5)",
//       stagger: 0.05,
//     });
//   }
// });
// // current openings section title animation end
// // =========careers page End==============
// // get-in-touch-page start
// document.addEventListener("DOMContentLoaded", function () {
//   const parts = [
//     { id: "touch1", text: "Let’s get in" },
//     { id: "touch2", text: "Touch" },
//   ];

//   let currentPart = 0;
//   let currentIndex = 0;
//   const typingSpeed = 100;

//   function type() {
//     if (currentPart < parts.length) {
//       const element = document.getElementById(parts[currentPart].id);
//       if (currentIndex < parts[currentPart].text.length) {
//         element.style.opacity = 1;
//         element.innerHTML += parts[currentPart].text[currentIndex];
//         currentIndex++;
//         setTimeout(type, typingSpeed);
//       } else {
//         currentPart++;
//         currentIndex = 0;
//         setTimeout(type, typingSpeed);
//       }
//     }
//   }

//   type();
// });

// // careers-section-title animation start end

// // get-in-touch-title end
// // Terms & Conditions page title start
// document.addEventListener("DOMContentLoaded", function () {
//   const parts = [
//     { id: "terms1", text: "Terms &" },
//     { id: "terms2", text: "Conditions" },
//   ];

//   let currentPart = 0;
//   let currentIndex = 0;
//   const typingSpeed = 100;

//   function type() {
//     if (currentPart < parts.length) {
//       const element = document.getElementById(parts[currentPart].id);
//       if (currentIndex < parts[currentPart].text.length) {
//         element.style.opacity = 1;
//         element.innerHTML += parts[currentPart].text[currentIndex];
//         currentIndex++;
//         setTimeout(type, typingSpeed);
//       } else {
//         currentPart++;
//         currentIndex = 0;
//         setTimeout(type, typingSpeed);
//       }
//     }
//   }

//   type();
// });
// // Terms & Conditions page title end
// // conditions-detail-text paragraph animation

// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.utils.toArray(".blur-text").forEach(function (element) {
//     gsap.to(element, {
//       scrollTrigger: {
//         trigger: element,
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: true,
//       },
//       filter: "blur(0px)",
//       duration: 1,
//     });
//   });
// });

// // conditions-detail-text title animation

// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.utils.toArray(".section-title").forEach(function (sectionTitle) {
//     gsap.to(sectionTitle, {
//       scrollTrigger: {
//         trigger: sectionTitle,
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: true,
//       },
//       x: 0,
//       opacity: 1,
//       duration: 1.5,
//       ease: "power2.out",
//     });
//   });
// });
// //
// // Refund Policy page title start
// document.addEventListener("DOMContentLoaded", function () {
//   const parts = [
//     { id: "policy1", text: "Refund" },
//     { id: "policy2", text: "Policy" },
//   ];

//   let currentPart = 0;
//   let currentIndex = 0;
//   const typingSpeed = 100;

//   function type() {
//     if (currentPart < parts.length) {
//       const element = document.getElementById(parts[currentPart].id);
//       if (currentIndex < parts[currentPart].text.length) {
//         element.style.opacity = 1;
//         element.innerHTML += parts[currentPart].text[currentIndex];
//         currentIndex++;
//         setTimeout(type, typingSpeed);
//       } else {
//         currentPart++;
//         currentIndex = 0;
//         setTimeout(type, typingSpeed);
//       }
//     }
//   }

//   type();
// });
// // Refund Policy page title  end
// // OUR TEAM PAGE TITLE START

// document.addEventListener("DOMContentLoaded", function () {
//   const parts = [
//     { id: "journey1", text: "Our Journey in" },
//     { id: "journey2", text: "Images" },
//   ];

//   let currentPart = 0;
//   let currentIndex = 0;
//   const typingSpeed = 100;

//   function type() {
//     if (currentPart < parts.length) {
//       const element = document.getElementById(parts[currentPart].id);
//       if (currentIndex < parts[currentPart].text.length) {
//         element.style.opacity = 1;
//         element.innerHTML += parts[currentPart].text[currentIndex];
//         currentIndex++;
//         setTimeout(type, typingSpeed);
//       } else {
//         currentPart++;
//         currentIndex = 0;
//         setTimeout(type, typingSpeed);
//       }
//     }
//   }

//   type();
// });

// // OUR TEAM PAGE TITLE END
// OUR TEAM PAGE TABS

function openTabOne(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document?.getElementsByClassName("tablink")[0]?.click();

function openModal(element) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImage");
  var modalVideo = document.getElementById("modalVideo");

  if (element.tagName === "IMG") {
    modalImg.src = element.src;
    modalImg.style.display = "block";
    modalVideo.style.display = "none";
  } else if (element.tagName === "VIDEO") {
    modalVideo.src = element.querySelector("source").src;
    modalVideo.style.display = "block";
    modalImg.style.display = "none";
  }

  modal.style.display = "block";
  document.body.classList.add("no-scroll");
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
}

// ABOUT PAGE -----------------

// * LETS START SECTIONS ----------------

// const container = document.querySelector(".typing-container .typing");
// const text = "Let’s — Get To Know Each ";

// function textTypingEffect(element, text, i = 0) {
//   if (!element) {
//     console.error("Container element not found.");
//     return;
//   }

//   if (text[i] === "—") {
//     element.innerHTML += '<span class="horizontal-line"></span>';
//   } else {
//     element.innerHTML += text[i];
//   }

//   if (i === text.length - 1) {
//     return;
//   }

//   setTimeout(() => textTypingEffect(element, text, i + 1), 50);
// }

// textTypingEffect(container, text);

// * why emaad section start ----------------

// gsap.registerPlugin(ScrollTrigger);

// // Animate the "Why" text
// gsap.to(".emmad-title h5", {
//   duration: 1,
//   x: "100%",
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".emmad-title",
//     start: "top 90%",
//     scrub: 2,
//     toggleActions: "play none none none",
//   },
// });
// // Animate the "Why" text end

// // Animate the "Emaad" text and image start
// gsap.to(".emmad-title-2 h1", {
//   duration: 1.5,
//   x: "110%",
//   ease: "power2.out",
//   delay: 0.5,
//   scrollTrigger: {
//     trigger: ".emmad-title",
//     start: "top 90%",
//     scrub: 2,
//     toggleActions: "play none none none",
//   },
// });
// // Animate the "Emaad" text and image end

// // Animate the border start
// gsap.to(".border", {
//   duration: 1.5,
//   width: "100%",
//   ease: "power2.out",
//   delay: 0.5,
//   scrollTrigger: {
//     trigger: ".emmad-title",
//     start: "top 50%",
//     scrub: 2,
//     toggleActions: "play none none none",
//   },
// });

// // ====emmad why mouse move animation start
// const contents = document.querySelectorAll(".content");

// contents.forEach((content, index) => {
//   // Determine the end position based on the index
//   let endX;
//   if (index === 0) {
//     endX = "0%";
//   } else if (index === 1) {
//     endX = "0%";
//   } else {
//     endX = "0%";
//   }
//   // Animate each content element
//   gsap.fromTo(
//     content,
//     { x: "100%", opacity: 0 }, // Starting position and opacity
//     {
//       x: endX, // Ending position based on index
//       opacity: 1, // Ending opacity

//       // ScrollTrigger configuration
//       scrollTrigger: {
//         trigger: content, // Element that triggers the animation
//         start: "top 80%", // Start animation when top of element reaches 90% of viewport height
//         end: "top 50%", // End animation when top of element reaches 50% of viewport height
//         scrub: 1, // Smooth animation in sync with scrolling
//         toggleActions: "play reverse play reverse", // Actions on entering and leaving trigger area
//         // markers: true, // Uncomment to see markers for debugging
//       },
//     }
//   );
// });

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 13,
  // loop: true,

  navigation: {
    nextEl: ".swiper-button-prev-discover",
    prevEl: ".swiper-button-next-discover",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// PRIVACY POLICY ------------------

// const typingEffect = (parts, typingSpeed) => {
//   let currentPart = 0;
//   let currentIndex = 0;

//   function type() {
//     if (currentPart < parts.length) {
//       const element = document.getElementById(parts[currentPart].id);

//       // Check if the element exists before trying to use it
//       if (!element) {
//         // console.error(`Element with ID ${parts[currentPart].id} not found.`);
//         return;
//       }

//       if (currentIndex < parts[currentPart].text.length) {
//         element.style.opacity = 1;
//         element.innerHTML += parts[currentPart].text[currentIndex];
//         currentIndex++;
//         setTimeout(type, typingSpeed);
//       } else {
//         currentPart++;
//         currentIndex = 0;
//         setTimeout(type, typingSpeed);
//       }
//     }
//   }

//   type();
// };

// const paragraphs = document.querySelectorAll(".information-titel p");
// // Function to create a typewriter effect
// function typewriterEffect(element) {
//   const text = element.textContent;
//   element.textContent = "";
//   gsap.to(element, {
//     text: text,
//     duration: text.length * 0.05, // Duration based on text length
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: element,
//       start: "top 80%",
//       end: "bottom 20%",
//       toggleActions: "play none none none",
//     },
//   });
// }
// // Apply typewriter effect to each paragraph
// paragraphs.forEach((paragraph) => {
//   typewriterEffect(paragraph);
// });

const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px",
  threshold: 0.1, // Trigger when 10% of the element is visible
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Optional: Stop observing after animation
    }
  });
};
// bulk sms accordian text
const observer = new IntersectionObserver(callback, options);
const targets = document.querySelectorAll(".privacy-title");

targets.forEach((target) => {
  observer.observe(target);
});

// TERM & CONDITION  --------------------------------
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".blur-text").forEach(function (element) {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
    filter: "blur(0px)",
    duration: 1,
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section-title").forEach(function (sectionTitle) {
  gsap.to(sectionTitle, {
    scrollTrigger: {
      trigger: sectionTitle,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
  });
});

// WEB-DESIGN PAGE ----------------------

const typing = document.getElementById("vision-typing-text");
const uiTextContents = ["Vision", "web design"];
const uiTextClassStart = '<span class="vision-text">';
const uiTextClassEnd = "</span>";

// function textTypingEffect(ui_text, type, contents, i = 0, contentIndex = 0) {
//   if (i < type.length) {
//     setTimeout(() => {
//       if (
//         type.substring(i, i + 1) === "—" &&
//         contentIndex < contents?.length
//       ) {
//         ui_text.innerHTML += uiTextClassStart;
//         textTypingEffectInSpan(ui_text, contents[contentIndex], 0, () => {
//           ui_text.innerHTML += uiTextClassEnd;
//           textTypingEffect(ui_text, type, contents, i + 1, contentIndex + 1); // Continue after the placeholder
//         });
//       } else {
//         ui_text.innerHTML += type[i];
//         textTypingEffect(ui_text, type, contents, i + 1, contentIndex);
//       }
//     }, 56);
//   }
// }

// function textTypingEffectInSpan(ui_text, text, j = 0, callback) {
//   if (j < text.length) {
//     if (text[j] === " ") {
//       ui_text.innerHTML += " ";
//     } else {
//       const newSpan = document.createElement("span");
//       newSpan.classList.add("vision-text");
//       newSpan.textContent = text[j];
//       ui_text.appendChild(newSpan);
//     }
//     setTimeout(() => {
//       textTypingEffectInSpan(ui_text, text, j + 1, callback);
//     }, 56);
//   } else if (callback) {
//     callback();
//   }
// }

// const modifiedText = "Unveil Your — with Our — Solutions ";
// textTypingEffect(typing, modifiedText, uiTextContents);

const paragraph = document?.querySelector(".ui-to-info p");
if (paragraph) {
  const words = paragraph.innerHTML
    .split(" ")
    .map((word) => `<span>${word}</span>`)
    .join(" ");
  paragraph.innerHTML = words;
  const spans = paragraph.querySelectorAll("span");
  const tl = gsap.timeline({ paused: true });
  tl.from(spans, {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: "power1.out",
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.play();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  const section = document.querySelector(".ui-to-info");
  if (section) {
    observer.observe(section);
  }
}
function showContent(contentId) {
  // Hide all contents
  var contents = document.querySelectorAll(".process-tab-design-content");
  contents.forEach(function (content) {
    content.classList.remove("show");
  });

  // Remove 'hide' class from all tabs
  var tabs = document.querySelectorAll(".process-tab-design");
  tabs.forEach(function (tab) {
    tab.classList.remove("hide");
  });

  // Show the selected content
  var content = document.getElementById(contentId);
  if (content) {
    content.classList.add("show");
  }

  // Add 'hide' class to the clicked tab
  var clickedTab = document.querySelector(
    "[onclick=\"showContent('" + contentId + "')\"]",
  );
  if (clickedTab) {
    clickedTab.classList.add("hide");
  }
}

// const titles = document.querySelectorAll(".emmad-section");
// const observerNew = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const letters = entry.target.querySelectorAll(".letter");
//       gsap.set(letters, { display: "inline-block" });
//       gsap.from(letters, {
//         duration: 1,
//         opacity: 0,
//         scale: 0.3,
//         rotation: 90,
//         ease: "back.out(1.7)",
//         stagger: {
//           amount: 1,
//         },
//       });
//       observer.unobserve(entry.target);
//     }
//   });
// }, {threshold: 0.5});
// titles.forEach((title) => observerNew?.observe(title));

// APP DEVELOPMENT --------------------------

gsap.to(".mobile-star", {
  duration: 2.5,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
});

gsap.from(".go-mobile", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
});

function splitTextToCharsWithSpaces(element) {
  if (element) {
    const words = element.innerText.split(" ");
    const charactersWithSpaces = words
      .map((word) => word.split("").concat("&nbsp;"))
      .flat();
    element.innerHTML = charactersWithSpaces
      .map((char) => `<span class="char">${char}</span>`)
      .join("");
  }
}

const text2 = document.getElementById("our-title");
splitTextToCharsWithSpaces(text2);

const chars2 = document.querySelectorAll("#our-title .char");
if (chars2) {
  for (let index = 4; index <= 13; index++) {
    chars2[index]?.setAttribute(
      "style",
      `
            background: linear-gradient(104.02deg, #2d9cdb 0%, #2dc97a 88.31%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `,
    );
  }
  gsap.registerPlugin(ScrollTrigger);

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#platforms",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  tl2.from(chars2, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "elastic.out(1, 0.5)",
    stagger: 0.05,
  });
}

//  let paragraphNew = document.querySelector(".title-para");

//  if (paragraphNew) {
//   const words = paragraphNew?.innerHTML
//     .split(" ")
//     .map((word) => `<span>${word}</span>`)
//     .join(" ");
//   paragraphNew.innerHTML = words;

//   const spans = paragraphNew.querySelectorAll("span");

//   const tl = gsap.timeline({ paused: true });

//   tl.from(spans, {
//     duration: 0.3,
//     opacity: 0,
//     y: 20,
//     stagger: 0.02,
//     ease: "power2.inOut",
//   });

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           tl.play();
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   const section = document.querySelector(".title-para");
//   observer?.observe(section);
// }

const tabTitles = document.querySelectorAll(".tab-pane h5.unlock-sub-title");

tabTitles.forEach((tabTitle) => {
  const words = tabTitle.textContent.trim().split(/\s+/);
  const newHTML = words
    .map((word) => `<div class='animated-char'>&nbsp;${word}</div>`)
    .join("");
  tabTitle.innerHTML = newHTML;

  const chars = tabTitle.querySelectorAll(".animated-char");

  const tl = gsap.timeline({ paused: true });

  tl.from(chars, {
    duration: 1.5,
    opacity: 0,
    y: 90,
    stagger: 0.03,
    ease: "elastic(1.2, 0.5)",
  });

  // Intersection Observer to trigger animation when tab title is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.play(); // Play animation when in view
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  observer?.observe(tabTitle);
});

const servicesLists = document.querySelectorAll(".services-list");

const observerApp = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(entry.target.querySelectorAll("li"), {
          duration: 0.8,
          opacity: 1,
          y: 0,
          ease: "bounce.out",
          stagger: 0.2,
          delay: 1,
        });
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

servicesLists.forEach((list) => observerApp?.observe(list));

// Split the text into individual characters for the first animation
const text1 = document.getElementById("brands");
const characters1 = text1?.innerText.split("");
if (characters1 && text1) {
  text1.innerHTML = characters1
    .map((char, index) => {
      if (char === " ") {
        return `<span class="char">&nbsp;</span>`;
      }
      return `<span class="char">${char}</span>`;
    })
    .join("");
}

// Get all the character elements for the first animation
const chars1 = document.querySelectorAll("#brands .char");

if (chars1) {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline for the first animation
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#breathing",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // Animate each character with a wave effect for the first animation
  tl1.from(chars1, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "elastic.out(1, 0.5)",
    stagger: 0.05,
  });
}

// BULK-SMS-EMAIL-SERVICE ----------------------

// BODY CURSRO FOR WHOLE PAGE --------------------------

var cursor = document.querySelector(".cursor"),
  cursorScale = document.querySelectorAll(".cursor-scale"),
  mousX = 0,
  mouseY = 0;

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mousX,
        top: mouseY,
      },
    });
  },
});
window.addEventListener("mousemove", function (e) {
  mousX = e.clientX;
  mouseY = e.clientY;
});
cursorScale.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-main");
    cursor.classList.remove("cursor-small");
  });
  link.addEventListener("mousemove", () => {
    cursor.classList.add("cursor-main");
    if (link.classList.contains("small")) {
      cursor.classList.remove("cursor-main");
      cursor.classList.add("cursor-small");
    }
  });
});

// body cursor end

// const checkbox = document.querySelector(".checkbox");
// const webText = document.querySelector(".web-text");
// const appText = document.querySelector(".app-text");

// checkbox?.addEventListener("change", function () {
//   if (checkbox.checked) {
//     webText.classList.remove("red");
//     appText.classList.add("red");
//   } else {
//     webText.classList.add("red");
//     appText.classList.remove("red");
//   }
// });
