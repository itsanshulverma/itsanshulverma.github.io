// Menu Button Setup
const hamBtn = document.querySelector(".hamburger-btn");
const menu = document.querySelector(".menu-container");
const menuItems = document.querySelectorAll(".menu-item");
const socialItems = document.querySelectorAll(" nav .social-links li");
const heroLeft = document.querySelector("nav .hero-img-left");
const heroRight = document.querySelector(".hero-img-right");
const heroRightClone = document.querySelector("nav .hero-img-right-clone");

let isOpen = false;

window.onload = function() {
  //Lax Setup
  lax.setup();
  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };
  window.requestAnimationFrame(updateLax);

  init();
  hamBtn.classList.add("hover-effect");
};
function openMenu() {
  heroRight.style.display = "none";

  hamBtn.classList.add("show");
  hamBtn.classList.remove("hover-effect");
  menu.classList.add("show");
  heroLeft.classList.add("show");
  heroRightClone.classList.add("show");
  menuItems.forEach(menuItem => {
    menuItem.classList.add("show");
  });
  socialItems.forEach(socialItem => {
    socialItem.classList.add("show");
  });
  isOpen = true;
}
function closeMenu() {
  heroRight.style.display = "block";

  hamBtn.classList.remove("show");
  hamBtn.classList.add("hover-effect");
  menu.classList.remove("show");
  heroLeft.classList.remove("show");
  heroRightClone.classList.remove("show");
  menuItems.forEach(menuItem => {
    menuItem.classList.remove("show");
  });
  socialItems.forEach(socialItem => {
    socialItem.classList.remove("show");
  });
  isOpen = false;
}
function toggleMenu() {
  if (!isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
}
function init() {
  const loader = document.querySelector(".loader");
  const container = document.querySelector(".container-all");

  setTimeout(() => {
    //Loader Animations
    loader.style.animation = "slideOut 1s";
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = "none";
    }, 1000);
    container.style.display = "block";
    hamBtn.style.animation = "slideInHam 1s";
  }, 3000);
}
