// navbar start
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
  console.log(body);
});
closeBtn.addEventListener("click", () => {
  navbar_tl.timeScale(3);
  navbar_tl.reverse();

  const body = document.getElementById("body");
  body.style.overflow = "";
});

// drowpdown click

document.addEventListener("DOMContentLoaded", function () {
  // Toggle dropdown visibility
  document.querySelectorAll(".nav-link").forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      let dropdown = navLink.nextElementSibling;
      if (dropdown) {
        dropdown.classList.toggle("active");
      }
    });
  });

  // Toggle submenus
  document.querySelectorAll(".nav-drowpdown").forEach(function (dropLink) {
    dropLink.addEventListener("click", function (event) {
      event.preventDefault();
      let submenu = dropLink.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle("active");
      }
    });
  });
});

let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      // Scroll down
      document.querySelector(".nav-bar").classList.add("hidden");
      document.querySelector(".nav-bar").classList.remove("visible");
    } else {
      // Scroll up
      document.querySelector(".nav-bar").classList.remove("hidden");
      document.querySelector(".nav-bar").classList.add("visible");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  },
  false
);
// navbar end

//body cursor start
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
//
// about page start
// let get to know each other image start
document.addEventListener("DOMContentLoaded", function () {
  // This ensures the code runs after the DOM has loaded
  gsap.to(".star-text img", {
    duration: 2.5,
    delay: 1,
    rotate: 360,
    repeat: -1,
    yoyo: true,
  });

  gsap.from(".got-to-info p", {
    opacity: 0,
    y: 30,
    duration: 2.5,
    delay: 1,
  });
});

// let get to know each other image start

// about page text animation

// lets go to title text typing start
const container = document.querySelector(".typing-container .typing");
const text = "Let’s — Get To Know Each ";

function textTypingEffect(element, text, i = 0) {
  if (!element) {
    console.error("Container element not found.");
    return;
  }

  if (text[i] === "—") {
    element.innerHTML += '<span class="horizontal-line"></span>';
  } else {
    element.innerHTML += text[i];
  }

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => textTypingEffect(element, text, i + 1), 50);
}

textTypingEffect(container, text);

// lets go to title text typing end

// lets go to talk button start

gsap.from(".talk-button", {
  opacity: 0,
  duration: 2,
  delay: 2,
  x: -100, // Start position from the left
  ease: "power3.out", // Smooth easing for the animation
});
// lets go to talk button end

// why emmad Animate section start
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the "Why" text
  gsap.to(".emmad-title h5", {
    duration: 1,
    x: "100%",
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".emmad-title",
      start: "top 90%",
      scrub: 2,
      toggleActions: "play none none none",
    },
  });
  // Animate the "Why" text end

  // Animate the "Emaad" text and image start
  gsap.to(".emmad-title-2 h1", {
    duration: 1.5,
    x: "110%",
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".emmad-title",
      start: "top 90%",
      scrub: 2,
      toggleActions: "play none none none",
    },
  });
  // Animate the "Emaad" text and image end

  // Animate the border start
  gsap.to(".border", {
    duration: 1.5,
    width: "100%",
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".emmad-title",
      start: "top 50%",
      scrub: 2,
      toggleActions: "play none none none",
    },
  });
});
// Animate the border end

// why emmad Animate section end

// ====emmad why mouse move animation start
const contents = document.querySelectorAll(".content");

contents.forEach((content, index) => {
  // Determine the end position based on the index
  let endX;
  if (index === 0) {
    endX = "0%";
  } else if (index === 1) {
    endX = "0%";
  } else {
    endX = "0%";
  }
  // Animate each content element
  gsap.fromTo(
    content,
    { x: "100%", opacity: 0 }, // Starting position and opacity
    {
      x: endX, // Ending position based on index
      opacity: 1, // Ending opacity

      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: content, // Element that triggers the animation
        start: "top 80%", // Start animation when top of element reaches 90% of viewport height
        end: "top 50%", // End animation when top of element reaches 50% of viewport height
        scrub: 1, // Smooth animation in sync with scrolling
        toggleActions: "play reverse play reverse", // Actions on entering and leaving trigger area
        // markers: true, // Uncomment to see markers for debugging
      },
    }
  );
});

// have a project mind start
// about have project mind
// ======== wc-btn-primary Magnetic Button Hover Effect with gsap
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".wc-btn-primary");
  buttons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(button.querySelector(".circle"), {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power3.out",
      });
    });
    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(button.querySelector(".circle"), {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    });
  });
});

// ======== wc-btn-primary Magnetic Button Hover Effect with gsap end
// have a project mind end

// have peroject in mind start
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".sec-title-2");
  const options = {
    threshold: 0.5,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const letters = entry.target.querySelectorAll(".letter");
        gsap.set(letters, { display: "inline-block" });
        gsap.from(letters, {
          duration: 1,
          opacity: 0,
          scale: 0.3,
          rotation: 90,
          ease: "back.out(1.7)",
          stagger: {
            amount: 1,
          },
        });
        observer.unobserve(entry.target);
      }
    });
  }, options);
  titles.forEach((title) => observer?.observe(title));
});
// have project n mind end
// about page end

// ====emmad why mouse move animation end

// Initial text the typing effect

// ui ux design page titel  start
document.addEventListener("DOMContentLoaded", function () {
  const typing = document.getElementById("  -text");
  const uiTextContent = "UI/UX Design";
  const uiTextClassStart = '<span class="ui-text">';
  const uiTextClassEnd = "</span>";

  function textTypingEffect(ui_text, type, i = 0) {
    if (i < type.length) {
      setTimeout(() => {
        if (type.substring(i, i + 1) === "—") {
          ui_text.innerHTML += uiTextClassStart;
          textTypingEffectInSpan(ui_text, uiTextContent, 0, () => {
            ui_text.innerHTML += uiTextClassEnd;
            textTypingEffect(ui_text, type, i + 1); // Continue after the placeholder
          });
        } else {
          ui_text.innerHTML += type[i];
          textTypingEffect(ui_text, type, i + 1);
        }
      }, 56);
    }
  }
  function textTypingEffectInSpan(ui_text, text, j = 0, callback) {
    if (j < text.length) {
      const newSpan = document.createElement("span");
      newSpan.classList.add("ui-text"); // Replace with your actual style class name

      newSpan.textContent = text[j];

      ui_text.appendChild(newSpan);
      setTimeout(() => {
        textTypingEffectInSpan(ui_text, text, j + 1, callback);
      }, 56);
    } else if (callback) {
      callback();
    }
  }
  const modifiedText = "Expert — Services For your Twebsite or app ";
  textTypingEffect(typing, modifiedText);
});
// ui ux design page title  end

// ui ux design text animation start

document.addEventListener("DOMContentLoaded", function () {
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
      { threshold: 0.1 }
    );
    const section = document.querySelector(".ui-to-info");
    if (section) {
      observer.observe(section);
    }
  }
});

// ui ux page text animation end

//ui ux page why choose section titel start
document.addEventListener("DOMContentLoaded", () => {
  const head = document.querySelector(".choose-title-1");
  const options = {
    threshold: 0.5, // Adjust this value as needed
  };

  if (head && window.gsap) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.set(".letter", { display: "inline-block" });

          gsap.from(".letter", {
            duration: 1,
            opacity: 0,
            scale: 0.3,
            rotation: 90,
            ease: "back.out(1.7)",
            stagger: {
              amount: 1,
            },
          });

          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(head);
  } else {
    console.error(
      "Either the .choose-title-1 element or GSAP library is missing."
    );
  }
});

// ui ux page why choose title section  end
// benifits titel animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".Benefits-title h4", {
  opacity: 0,
  duration: 1,
  y: 50,
  scrollTrigger: {
    trigger: ".Benefits-title h4",
    start: "top 80%",
    end: "bottom 80%",
    toggleActions: "play none none reverse",
  },
});
// benifits titel animation end
document.addEventListener("DOMContentLoaded", function () {
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
  const targets = document.querySelectorAll(".benifits-title1");

  targets.forEach((target) => {
    observer.observe(target);
  });
});

// ui ux text animation start
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector(".choose-desc p");

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
    { threshold: 0.1 }
  );
  const section = document.querySelector(".choose-desc");
  observer.observe(section);
});
// ui ux text animation end

document.addEventListener("DOMContentLoaded", function () {
  // Split the text into individual characters for the first animation
  const text1 = document.getElementById("brands");
  const characters1 = text1.innerText.split("");
  text1.innerHTML = characters1
    .map((char) => `<span class="char">${char}</span>`)
    .join("");

  // Get all the character elements for the first animation
  const chars1 = document.querySelectorAll("#brands .char");

  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline for the first animation
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#brands",
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
});

///* design excellence powered by cutting edge tols section start  */

// GSAP animation to text aniamtion start
gsap.registerPlugin(ScrollTrigger);
gsap.from(".design-text h4", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "ease.out",
  scrollTrigger: {
    trigger: ".design-title-Excellence",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
// GSAP animation to text aniamtion end
gsap.to(".Excellence-img", {
  duration: 5,
  rotate: 360,
  repeat: -1,
  ease: "linear",
});

//design excellence swiper start
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".Excellence-design-card", {
    // loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    speed: 600, // Adjust the speed for smooth scrolling
    breakpoints: {
      310: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    freeMode: true,
    freeModeMomentum: true,
  });
});

//design excellence swiper end

// ui-ux-page end

// web design page start title
// Unveil Your vision with Our Web Design Solutions text typing animation  start
document.addEventListener("DOMContentLoaded", function () {
  const typing = document.getElementById("vision-typing-text");
  const uiTextContents = ["Vision", "web design"];
  const uiTextClassStart = '<span class="vision-text">';
  const uiTextClassEnd = "</span>";

  function textTypingEffect(ui_text, type, contents, i = 0, contentIndex = 0) {
    if (i < type.length) {
      setTimeout(() => {
        if (
          type.substring(i, i + 1) === "—" &&
          contentIndex < contents.length
        ) {
          ui_text.innerHTML += uiTextClassStart;
          textTypingEffectInSpan(ui_text, contents[contentIndex], 0, () => {
            ui_text.innerHTML += uiTextClassEnd;
            textTypingEffect(ui_text, type, contents, i + 1, contentIndex + 1); // Continue after the placeholder
          });
        } else {
          ui_text.innerHTML += type[i];
          textTypingEffect(ui_text, type, contents, i + 1, contentIndex);
        }
      }, 56);
    }
  }

  function textTypingEffectInSpan(ui_text, text, j = 0, callback) {
    if (j < text.length) {
      if (text[j] === " ") {
        ui_text.innerHTML += " ";
      } else {
        const newSpan = document.createElement("span");
        newSpan.classList.add("vision-text");
        newSpan.textContent = text[j];
        ui_text.appendChild(newSpan);
      }
      setTimeout(() => {
        textTypingEffectInSpan(ui_text, text, j + 1, callback);
      }, 56);
    } else if (callback) {
      callback();
    }
  }

  const modifiedText = "Unveil Your — with Our — Solutions ";
  textTypingEffect(typing, modifiedText, uiTextContents);
});

// Unveil Your vision with Our Web Design Solutions text typing animation end

// why choose us text animation start
gsap.registerPlugin(ScrollTrigger);

gsap.from(".expertice-choose-titel h3, .expertice-choose-titel h4", {
  opacity: 0,
  duration: 1,
  y: 50,
  stagger: 0.2, // Adjust stagger timing as needed
  scrollTrigger: {
    trigger: ".vision-why-choose-design",
    start: "top 80%",
    end: "bottom 80%",
    toggleActions: "play none none reverse",
  },
});
// why choose us text animation end

// why choose us aniamtion peregraph start
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.querySelector(".expertise-choose-text p");
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
      { threshold: 0.1 }
    );
    const section = document.querySelector(".expertise-choose-text");
    if (section) {
      observer.observe(section);
    } else {
      console.error(".expertise-choose-text section not found.");
    }
  } else {
    console.error(".expertise-choose-text p element not found.");
  }
});
// why choose us aniamtion peregraph end

// why choose us img animation start
gsap.registerPlugin(ScrollTrigger);
gsap.from(".software-experience img", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "ease.out",
  scrollTrigger: {
    trigger: ".vision-why-choose-design",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
// why choose us img animation end

// why choose card animation start
//  ===== first card =====
document.addEventListener("DOMContentLoaded", function () {
  // Check if the card element exists
  var card = document.querySelector(".Expertise-and-Experience-card");
  if (card) {
    var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
    tl.from(card, { opacity: 0, x: -100 });

    var title = document.querySelector(".expertise-title h3");
    if (title) {
      tl.from(title, { opacity: 0, y: 20 }, "-=0.5");
    }

    var text = document.querySelector(".expertise-text p");
    if (text) {
      tl.from(text, { opacity: 0, y: 20 }, "-=0.5");
    }
  }
});
//  /. ==== first card ====

// === second card =======
document.addEventListener("DOMContentLoaded", function () {
  // Check if the card element exists
  var card = document.querySelector(".Expertise-and-Experience-card2");
  if (card) {
    var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
    tl.from(card, { opacity: 0, x: -100 });

    var title = document.querySelector(".expertise-title2 h3");
    if (title) {
      tl.from(title, { opacity: 0, y: 20 }, "-=0.5");
    }

    var text = document.querySelector(".expertise-text2 p");
    if (text) {
      tl.from(text, { opacity: 0, y: 20 }, "-=0.5");
    }
  }
});
// /.=== second card =======

// === thired card =======
document.addEventListener("DOMContentLoaded", function () {
  // Check if the card element exists
  var card = document.querySelector(".cutting-edge-tech-card");
  if (card) {
    var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
    tl.from(card, { opacity: 0, x: 100 });

    // var title = document.querySelector(".expertise-title h3");
    // if (title) {
    //   tl.from(title, { opacity: 0, y: 20 }, "-=0.5");
    // }

    // var text = document.querySelector(".expertise-text p");
    // if (text) {
    //   tl.from(text, { opacity: 0, y: 20 }, "-=0.5");
    // }
  }
});
// /. === thired card =======

// === fourth card =======
document.addEventListener("DOMContentLoaded", function () {
  // Check if the card element exists
  var card = document.querySelector(".cutting-edge-tech-card2");
  if (card) {
    var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });
    tl.from(card, { opacity: 0, x: 100 });

    // var title = document.querySelector(".expertise-title h3");
    // if (title) {
    //   tl.from(title, { opacity: 0, y: 20 }, "-=0.5");
    // }

    // var text = document.querySelector(".expertise-text p");
    // if (text) {
    //   tl.from(text, { opacity: 0, y: 20 }, "-=0.5");
    // }
  }
});
// /. === fourth card =======

// why choose card animation end

// web design text process start
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select the elements to animate
const chars = document.querySelectorAll(
  ".process-design-title h1, .process-bg-img, .process-bg img"
);
// technologis we us section
//design excellence swiper sstart
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".Technologies-us-card", {
    // loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    speed: 600, // Adjust the speed for smooth scrolling
    breakpoints: {
      310: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    freeMode: true,
    freeModeMomentum: true,
  });
});

//design excellence swiper end
// Create the animation
gsap.fromTo(
  chars,
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".process-design-title",
      start: "top 80%", // Animation starts when the top of the element is 80% from the top of the viewport
      toggleActions: "play none none none", // Play animation on scroll, no other actions
    },
  }
);
// web design text process end

// <!-- process-tab-design start -->

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
    "[onclick=\"showContent('" + contentId + "')\"]"
  );
  if (clickedTab) {
    clickedTab.classList.add("hide");
  }
}
// <!-- process-tab-design end -->

// technology text animation start
// Split text into individual letters
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the h4 element with GSAP and ScrollTrigger
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the h4 element with GSAP and ScrollTrigger
gsap.from(".Technologies-text h4", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".Technologies-text",
    start: "top 80%", // Animation starts when top of .Technologies-text hits 80% from the top of the viewport
    toggleActions: "play none none none", // Play the animation on enter
  },
});

// <!-- Technologies we use swiper animation start  -->

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonial-slider", {
    // loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    speed: 600, // Adjust the speed for smooth scrolling

    freeMode: true,
    freeModeMomentum: true,
  });
});

// <!-- Technologies we use swiper animation end  -->

// digital marketing page start title

// Boost Your Online sucess text typing animation start
document.addEventListener("DOMContentLoaded", function () {
  const typing = document.getElementById("online-text-success");
  const uiTextContents = ["Success"];
  const uiTextClassStart = '<span class="success">';
  const uiTextClassEnd = "</span>";

  function textTypingEffect(ui_text, type, contents, i = 0, contentIndex = 0) {
    if (i < type.length) {
      setTimeout(() => {
        if (
          type.substring(i, i + 1) === "—" &&
          contentIndex < contents.length
        ) {
          ui_text.innerHTML += uiTextClassStart;
          textTypingEffectInSpan(ui_text, contents[contentIndex], 0, () => {
            ui_text.innerHTML += uiTextClassEnd;
            textTypingEffect(ui_text, type, contents, i + 1, contentIndex + 1); // Continue after the placeholder
          });
        } else {
          ui_text.innerHTML += type[i];
          textTypingEffect(ui_text, type, contents, i + 1, contentIndex);
        }
      }, 56);
    }
  }

  function textTypingEffectInSpan(ui_text, text, j = 0, callback) {
    if (j < text.length) {
      if (text[j] === " ") {
        ui_text.innerHTML += " ";
      } else {
        const newSpan = document.createElement("span");
        newSpan.classList.add("success");
        newSpan.textContent = text[j];
        ui_text.appendChild(newSpan);
      }
      setTimeout(() => {
        textTypingEffectInSpan(ui_text, text, j + 1, callback);
      }, 56);
    } else if (callback) {
      callback();
    }
  }

  const modifiedText = "Boost Your Online —  ";
  textTypingEffect(typing, modifiedText, uiTextContents);
});

// Boost Your Online sucess text typing animation end

// why choose digital marketing service

document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document?.querySelector(".why-choose-digital-text p");
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
      { threshold: 0.1 }
    );
    const section = document.querySelector(".why-choose-digital-text");
    if (section) {
      observer.observe(section);
    }
  }
});
//  /. why choose digital marketing service

// == why choose digital marketing card text  ===
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".digital-des");

  sections.forEach((section) => {
    const paragraph = section.querySelector("p");
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
        { threshold: 0.1 }
      );

      observer.observe(section);
    }
  });
});
// === /.why choose digital marketing card text ====

// === Why Choose Our Digital Marketing Services card ===
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create the animation for the card
gsap.from(".digital-marketing-card", {
  scrollTrigger: {
    trigger: ".digital-marketing-card",
    start: "top 80%", // animation starts when the card is 80% from the top of the viewport
    end: "bottom 20%", // animation ends when the card is 20% from the bottom of the viewport
    toggleActions: "play none none none", // Play the animation on enter
  },
  duration: 1, // animation duration in seconds
  opacity: 0, // start from opacity 0
  y: 50, // start from 50px below
  ease: "power2.out", // easing function
});

// /. === Why Choose Our Digital Marketing Services card ===

// our expertise text animation
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".our-experse-title");

  sections.forEach((section) => {
    const paragraph = section.querySelector("p");
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
        { threshold: 0.1 }
      );

      observer.observe(section);
    }
  });
});

// our expertise accordian start
// function toggleAccordion(element) {
//   const header = element;
//   const content = header.nextElementSibling;
//   const icon = header.querySelector(".accordion-icon");

//   const allHeaders = document.querySelectorAll(".accordion-header");
//   const allContents = document.querySelectorAll(".accordion-content");

//   allHeaders.forEach((hdr, idx) => {
//     if (hdr !== header) {
//       hdr.classList.remove("active");
//       allContents[idx].style.maxHeight = 0;
//     }
//   });
//   header.classList.toggle("active");
//   if (header.classList.contains("active")) {
//     content.style.maxHeight = content.scrollHeight + "px";
//   } else {
//     content.style.maxHeight = 0;
//   }
// }

// /. ===  our expertise accordian end ====

// bulk sms & email service titel animation

document.addEventListener("DOMContentLoaded", function () {
  const typing = document.getElementById("bulk-sms-service-marketing");
  const uiTextContents = ["Bulk SMS", "Email"];
  const uiTextClassStart = '<span class="bulkemail">';
  const uiTextClassEnd = "</span>";

  function textTypingEffect(ui_text, type, contents, i = 0, contentIndex = 0) {
    if (i < type.length) {
      setTimeout(() => {
        if (
          type.substring(i, i + 1) === "—" &&
          contentIndex < contents.length
        ) {
          ui_text.innerHTML += uiTextClassStart;
          textTypingEffectInSpan(ui_text, contents[contentIndex], 0, () => {
            ui_text.innerHTML += uiTextClassEnd;
            textTypingEffect(ui_text, type, contents, i + 1, contentIndex + 1); // Continue after the placeholder
          });
        } else {
          ui_text.innerHTML += type[i];
          textTypingEffect(ui_text, type, contents, i + 1, contentIndex);
        }
      }, 56);
    }
  }

  function textTypingEffectInSpan(ui_text, text, j = 0, callback) {
    if (j < text.length) {
      if (text[j] === " ") {
        ui_text.innerHTML += " ";
      } else {
        const newSpan = document.createElement("span");
        newSpan.classList.add("bulkemail");
        newSpan.textContent = text[j];
        ui_text.appendChild(newSpan);
      }
      setTimeout(() => {
        textTypingEffectInSpan(ui_text, text, j + 1, callback);
      }, 56);
    } else if (callback) {
      callback();
    }
  }

  const modifiedText = "Reach Your Audience with — & — Marketing ";
  textTypingEffect(typing, modifiedText, uiTextContents);
});

// /.bulk sms & email service titel animation
document.addEventListener("DOMContentLoaded", () => {
  const serviceItems = document.querySelectorAll(".text-item-service");
  const serviceCards = document.querySelectorAll(".service-design-card");

  serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const targetClass = this.getAttribute("data-target");
      serviceCards.forEach((card) => {
        if (card.querySelector(targetClass)) {
          card.style.opacity = "1";
        } else {
          card.style.opacity = "0";
        }
      });
    });
  });
});

// privacy titel

document.addEventListener("DOMContentLoaded", function () {
  const parts = [
    { id: "privacy1", text: "Privacy" },
    { id: "privacy2", text: "Policy" },
  ];

  let currentPart = 0;
  let currentIndex = 0;
  const typingSpeed = 100;

  function type() {
    if (currentPart < parts.length) {
      const element = document.getElementById(parts[currentPart].id);
      if (currentIndex < parts[currentPart].text.length) {
        element.style.opacity = 1;
        element.innerHTML += parts[currentPart].text[currentIndex];
        currentIndex++;
        setTimeout(type, typingSpeed);
      } else {
        currentPart++;
        currentIndex = 0;
        setTimeout(type, typingSpeed);
      }
    }
  }

  type();
});

// privacy text hover
// document.addEventListener('DOMContentLoaded', () => {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.from(".privacy-title h4", {
//     duration: 1.5,
//     opacity: 0,
//     y: 50,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: ".privacy-title",
//       start: "top 80%", // Start the animation when the top of the element is 80% from the top of the viewport

//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
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
});
// information sharing section
gsap.registerPlugin(ScrollTrigger);

// Select the elements
const paragraphs = document.querySelectorAll(".information-titel p");
// Function to create a typewriter effect
function typewriterEffect(element) {
  const text = element.textContent;
  element.textContent = "";
  gsap.to(element, {
    text: text,
    duration: text.length * 0.05, // Duration based on text length
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
}

// Apply typewriter effect to each paragraph
paragraphs.forEach((paragraph) => {
  typewriterEffect(paragraph);
});
// priacy image animation
gsap.to("#rotateImg", {
  rotation: 360, // Rotate 360 degrees
  duration: 5, // Animation duration in seconds
  ease: "none", // Linear ease
  repeat: -1, // Repeat indefinitely
});

// our-work page text animation
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".our-work-pere");

  const tl = gsap.timeline({ paused: true });

  tl.to(textElement, {
    duration: 1.5,
    opacity: 1,
    y: -20,
    ease: "elastic(1.2, 0.5)",
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tl.play();
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(textElement);
});
// real estate slide text



function updateContent() {
  console.log("Updating content to index: ", currentContentIndex);

  // Animate container out
  gsap.to("#content-container", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      // Update content
      document.getElementById("script-title").textContent =
        productcontents[currentContentIndex].title;
      document.getElementById("feature-title").textContent =
        productcontents[currentContentIndex].featureTitle;
      document.getElementById("feature-description").textContent =
        productcontents[currentContentIndex].featureDescription;

      // Animate container in
      gsap.fromTo(
        "#content-container",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      );
    },
  });
}

function prevContent() {
  console.log("Previous content clicked");
  currentContentIndex =
    (currentContentIndex - 1 + productcontents.length) % productcontents.length;
  updateContent();
}

function nextContent() {
  console.log("Next content clicked");
  currentContentIndex = (currentContentIndex + 1) % productcontents.length;
  updateContent();
}

updateContent();

// multy text animation

// web app toggel section
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.querySelector(".checkbox");
  const webText = document.querySelector(".web-text");
  const appText = document.querySelector(".app-text");

  checkbox?.addEventListener("change", function () {
    if (checkbox.checked) {
      webText.classList.remove("red");
      appText.classList.add("red");
    } else {
      webText.classList.add("red");
      appText.classList.remove("red");
    }
  });
});
// swiper web app

var swiper = new Swiper(".web-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-pre",
  },
});
//

// related project
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

document.addEventListener("DOMContentLoaded", () => {
  const head = document.querySelector(".sec-title-1");
  if (head) {
    const options = {
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.set(".letter", { display: "inline-block" });

          gsap.from(".letter", {
            duration: 1,
            opacity: 0,
            scale: 0.3,
            rotation: 90,
            ease: "back.out(1.7)",
            stagger: {
              amount: 1,
            },
          });

          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer?.observe(head);
  }
});

// awesome section title animation end
