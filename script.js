const menuBtn = document.querySelector(".nav-toggle");
const menu = document.querySelector("header .nav-mobile");
const links = document.querySelectorAll("header .nav-mobile a");

// GSAP Timeline for animations
let menuTimeline = gsap.timeline({ paused: true, reversed: true });
menuTimeline
  .to(menu, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
    transformOrigin: "top right",
  })
  .from(
    links,
    {
      opacity: 0,
      y: 20,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=0.3"
  );

// Toggle menu with animations
menuBtn.addEventListener("click", () => {
  if (menuTimeline.reversed()) {
    menuTimeline.play();
  } else {
    menuTimeline.reverse();
  }
  menuBtn.classList.toggle("active");
  menu.classList.toggle("hidden");
});

// Close menu when a link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    if (!menuTimeline.reversed()) {
      menuTimeline.reverse();
    }
    menu.classList.add("hidden");
    menuBtn.classList.remove("active");
  });
});

// Animate toggle button entry
gsap.from(".nav-toggle", {
  opacity: 0,
  x: 20,
  duration: 0.8,
  delay: 0.5,
});

// Animate header
gsap.from("header .nav-left", {
  opacity: 0,
  x: -50,
  duration: 1
});

gsap.from("header .nav-right a", {
  opacity: 0,
  x: 50,
  duration: 1,
  stagger: 0.2
});

// Animate hero section
gsap.from(".hero .intro", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.5
});

gsap.from(".hero h1 span", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.2,
  delay: 0.4
});

gsap.from(".social-icons .circle-btn", {
  opacity: 0,
  y: -10,
  duration: 1,
  stagger: 0.2,
  delay: 0.4
});

gsap.fromTo(
  ".cv-btn",
  { opacity: 0, y: 10 },
  { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power2.out" }
);
gsap.fromTo(
  ".scroll-down",
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
);

function repeatBounceAnimation() {
  gsap.to(".cv-btn", {
    y: -2,
    duration: 1,
    ease: "power1.inOut",
    yoyo: true, 
    repeat: 1,
  });
  gsap.to(".scroll-down", {
    y: -5,
    duration: 0.5,
    ease: "power1.inOut",
    yoyo: true, 
    repeat: 1,
  });
}
setInterval(repeatBounceAnimation, 3000);

// // Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Animate Heading and Background Text
gsap.from(".connect-heading h2", {
  opacity: 0,
  y: 20,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about",
    start: "bottom bottom",
  },
});

gsap.from(".bg-text", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about",
    start: "bottom bottom",
  },
});

// Animate Email Button
gsap.from(".email", {
  opacity: 0,
  y: 20,
  scale: 0.9,
  duration: 1,
  ease: "elastic.out(1, 0.5)",
  scrollTrigger: {
    trigger: ".about",
    start: "bottom bottom",
  },
});

// Animate Social Icons with Stagger
gsap.from("connect-options .social-icons .circle-btn", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 1,
  stagger: 0.2,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".about",
    start: "center bottom",
  },
});
