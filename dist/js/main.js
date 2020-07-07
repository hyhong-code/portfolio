// HELPERS
const $ = (slctstr) => document.querySelector(slctstr);
const $all = (slctstr) => document.querySelectorAll(slctstr);

// SELECT ELEMENTS
const menuBtn = $(".menu-btn");
const menu = $(".menu");
const menuNav = $(".menu-nav");
const menuBranding = $(".menu-branding");
const navItems = $all(".nav-item");

// INITIALIZE MENU STATE
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}
