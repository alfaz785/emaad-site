import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);
const productcontents = [
  {
    title: "Real Estate Script",
    featureTitle: "Multiple Property Images Upload",
    featureDescription:
      "Easily upload multiple high-resolution images for each property, giving potential buyers or renters a comprehensive view of the listing.",
  },
  {
    title: "Real Estate Script",
    featureTitle: "Advanced Property Viewing Option",
    featureDescription:
      "Implement a powerful search functionality to help users find properties that meet their specific criteria quickly and easily.",
  },
  {
    title: "Real Estate Script",
    featureTitle: "Android and iOS App Available",
    featureDescription:
      "Manage user accounts with ease, providing secure login and personalized experiences for buyers, sellers, and agents.",
  },
];
let currentContentIndex = 0;
export const wcButtonFC = () => {
  // Select all buttons with class 'wc-btn-primary'
  const buttons = document.querySelectorAll(".wc-btn-primary");

  buttons.forEach((button) => {
    const handleMouseMove = (e) => {
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
    };

    const handleMouseLeave = () => {
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
    };

    // Add event listeners for each button
    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  });
};

export const animateTabTitles = () => {
  // Select all tab titles
  const tabTitles = document.querySelectorAll(".tab-pane h5.unlock-sub-title");

  tabTitles.forEach((tabTitle) => {
    // Split the text into individual words
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

    // Observe the tab title for intersection
    observer.observe(tabTitle);

    // Cleanup function for IntersectionObserver
    return () => {
      observer.disconnect();
    };
  });
};

export function openTab(evt, tabName) {
  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("tab-pane");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

export const subUnlockFc = () => {
  const tabTitles = document.querySelectorAll(".tab-pane h5.unlock-sub-title");

  tabTitles.forEach((tabTitle) => {
    // Split the text content of the title into individual words
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

    // Intersection Observer to trigger animation when the title comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play(); // Start the animation when the element is in view
            observer.unobserve(entry.target); // Unobserve after playing
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is in view
    );

    observer.observe(tabTitle);

    // Clean up the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  });
};

// textTypingEffect.js

export function textTypingEffect(
  ui_text,
  type,
  contents,
  uiTextClassStart,
  uiTextClassEnd,
  i = 0,
  contentIndex = 0,
) {
  if (i < type.length) {
    setTimeout(() => {
      if (type.substring(i, i + 1) === "—" && contentIndex < contents.length) {
        ui_text.innerHTML += uiTextClassStart;
        textTypingEffectInSpan(ui_text, contents[contentIndex], 0, () => {
          ui_text.innerHTML += uiTextClassEnd;
          textTypingEffect(
            ui_text,
            type,
            contents,
            uiTextClassStart,
            uiTextClassEnd,
            i + 1,
            contentIndex + 1,
          );
        });
      } else {
        ui_text.innerHTML += type[i];
        textTypingEffect(
          ui_text,
          type,
          contents,
          uiTextClassStart,
          uiTextClassEnd,
          i + 1,
          contentIndex,
        );
      }
    }, 56);
  }
}

export function textTypingEffectInSpan(ui_text, text, j = 0, callback) {
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

export function plainTextEffect(element, text, i = 0) {
  if (!element) {
    console.error("Container element not found.");
    return;
  }

  if (i === 0) {
    element.innerHTML = ""; // Clear the element before typing starts
  }

  if (text[i] === "—") {
    element.innerHTML += '<span class="horizontal-line"></span>';
  } else {
    element.innerHTML += text[i];
  }

  if (i === text.length - 1) {
    return;
  }

  setTimeout(() => plainTextEffect(element, text, i + 1), 50); // Corrected function name
}

export const MultiTypingEffect = (parts, typingSpeed) => {
  let currentPart = 0;
  let currentIndex = 0;

  function type() {
    if (currentPart < parts.length) {
      const element = document.getElementById(parts[currentPart].id);

      // Check if the element exists before trying to use it
      if (!element) {
        // console.error(`Element with ID ${parts[currentPart].id} not found.`);
        return;
      }

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
};

export const animateLetters = () => {
  const titles = document.querySelectorAll(".sec-title-2");
  if (!titles.length) return; // Ensure titles exist

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const letters = entry.target.querySelectorAll(".letter");
        if (!letters.length) return; // Ensure letters exist

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

        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, options);

  titles.forEach((title) => observer.observe(title)); // Observe each title

  // Cleanup function to disconnect observer when component unmounts
  return () => {
    if (observer) {
      observer.disconnect();
    }
  };
};

export function setupAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Setup animations
  const setupAnimations = () => {
    gsap.to(".img-holder", {
      scrollTrigger: {
        trigger: ".reveal-section",
        start: "center center",
        end: "bottom bottom",
        scrub: 1,
      },
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      rotate: 0,
      ease: "none",
    });

    gsap.to(".img-holder img", {
      scrollTrigger: {
        trigger: ".reveal-section",
        start: "center center",
        end: "bottom bottom",
        scrub: 1,
      },
      scale: 1,
      ease: "none",
    });

    // Text animation
    gsap.to(".letters div", {
      scrollTrigger: {
        trigger: ".reveal-section",
        start: "center center",
        end: "bottom bottom",
        scrub: 1,
      },
      x: (i, target) => (i % 2 === 0 ? "-100vw" : "100vw"),
      ease: "power1.inOut",
    });
  };

  // Initialize animations
  setupAnimations();

  // Cleanup function to remove ScrollTrigger instances on component unmount
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}

export function emaadSectionFC() {
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

  // Animate the "Emaad" text and image
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

  // Animate the border
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

  // Mouse move animation for contents
  const contents = document.querySelectorAll(".content");
  contents.forEach((content, index) => {
    let endX = "0%";
    gsap.fromTo(
      content,
      { x: "100%", opacity: 0 },
      {
        x: endX,
        opacity: 1,
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      },
    );
  });
}

export function InformationPrivacyFC() {
  gsap.registerPlugin(ScrollTrigger);

  // Select the paragraphs
  const paragraphs = document.querySelectorAll(".information-titel p");

  // Create a GSAP timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: paragraphs[0], // Trigger based on the first paragraph
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });

  // Function to create typewriter effect
  function typewriterEffect(element, delay = 0) {
    const text = element.textContent;
    element.textContent = "";
    tl.to(element, {
      text: text,
      duration: text.length * 0.05,
      ease: "power2.out",
      delay: delay, // Optional delay before starting each animation
    });
  }

  // Apply the typewriter effect to both paragraphs in sequence
  if (paragraphs.length > 1) {
    typewriterEffect(paragraphs[0]); // Animate the first paragraph
    typewriterEffect(paragraphs[1]); // Animate the second paragraph after the first
  }

  // Privacy image rotation animation
  gsap.to("#rotateImg", {
    rotation: 360,
    duration: 5,
    ease: "none",
    repeat: -1,
  });
}

export function toggleAccordion(element) {
  const header = element;
  const content = header?.nextElementSibling;
  const icon = header?.querySelector(".accordion-icon");

  const allHeaders = document.querySelectorAll(".accordion-header");
  const allContents = document.querySelectorAll(".accordion-content");

  // Close all other accordions
  allHeaders.forEach((hdr, idx) => {
    if (hdr !== header) {
      hdr.classList.remove("active");
      allContents[idx].style.maxHeight = 0; // Close the other contents
      hdr.querySelector(".accordion-icon").classList.remove("open"); // Reset icon if you have an open class for active accordion icons
    }
  });

  // Toggle the current accordion
  header.classList.toggle("active");
  if (header.classList.contains("active")) {
    content.style.maxHeight = content.scrollHeight + "px"; // Set to the full height of the content
    icon.classList.add("open"); // Optionally toggle an "open" class for icon
  } else {
    content.style.maxHeight = 0; // Collapse content
    icon.classList.remove("open"); // Reset the icon
  }
}

export function UiDomainTitleFC() {
  const head = document.querySelector(".domain-title-main");
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
}

export function MainDomainPeragraphFC() {
  const paragraph = document.querySelector(".domain-importance-para");

  if (paragraph) {
    const words = paragraph.innerHTML
      .split(" ")
      .map((word) => `<span>${word}</span>`)
      .join(" ");
    paragraph.innerHTML = words;

    const spans = paragraph.querySelectorAll("span");

    const tl = gsap.timeline({ paused: true });

    tl.from(spans, {
      duration: 0.3,
      opacity: 0,
      y: 20,
      stagger: 0.02,
      ease: "power2.inOut",
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

    observer.observe(paragraph);
  }
}

export function openModal(element, name) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImage");
  var modalVideo = document.getElementById("modalVideo");
  var navBar = document.getElementById("navBar");

  if (element && modal && modalImg && modalVideo) {
    if (name === "IMG") {
      modalImg.src = element.src;
      modalImg.style.display = "block";
      modalVideo.style.display = "none";
    } else if (name === "VIDEO") {
      var source = element.querySelector("source");
      if (source) {
        modalVideo.src = source.src;
        modalVideo.style.display = "block";
        modalImg.style.display = "none";
      }
    }
    console.log(modal);
    modal.style.display = "block";
    navBar.style.opacity = 0;
    document.body.classList.add("no-scroll");
  }
}

// Function to close the modal
export function closeModal() {
  var modal = document.getElementById("modal");
  var navBar = document.getElementById("navBar");
  modal.style.display = "none";
  navBar.style.opacity = 1;
  document.body.classList.remove("no-scroll");
}

export function openTabOne(evt, tabName) {
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
export function updateContent() {
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
        { y: 0, opacity: 1, duration: 0.5 },
      );
    },
  });
}
export function prevContent() {
  currentContentIndex =
    (currentContentIndex - 1 + productcontents.length) % productcontents.length;
  updateContent();
}
export function nextContent() {
  console.log("Next content clicked");
  currentContentIndex = (currentContentIndex + 1) % productcontents.length;
  updateContent();
}

export function OurWorkPreviewFC() {
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
}

export const handleNavigate = () => {
  const body = document.getElementById("body");
  body.style.overflow = "";
};
export const deliveryCard = () => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#delivering-main",
      start: "0% 0%",
      end: "90% 50%",
      scrub: 2,
      pin: true,
    },
  });

  tl.to(
    ".text",
    {
      top: "2%",
    },
    "a",
  )
    .to(
      "#card-one",
      {
        top: "33%",
      },
      "a",
    )
    .to(
      "#card-two",
      {
        top: "130%",
      },
      "a",
    )
    .to(
      "#card-two",
      {
        top: "35%",
      },
      "b",
    )
    .to(
      "#card-one",
      {
        width: "65%",
      },
      "b",
    )
    .to(
      "#card-three",
      {
        top: "130%",
      },
      "b",
    )
    .to(
      "#card-three",
      {
        top: "38%",
      },
      "c",
    )
    .to(
      "#card-two",
      {
        width: "70%",
      },
      "c",
    )
    .to(
      "#card-four",
      {
        top: "130%",
      },
      "c",
    )
    .to(
      "#card-four",
      {
        top: "41%",
      },
      "d",
    )
    .to(
      "#card-three",
      {
        width: "75%",
      },
      "d",
    )
    .to(
      "#card-four",
      {
        width: "80%",
      },
      "e",
    );
};
