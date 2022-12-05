import SmoothScroll from "./modules/smooth-scroll.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion.js";
import initZoom from "./modules/zoom.js";
import Modal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import iniMenuMobile from "./modules/menu-mobile.js";
import initOpening from "./modules/opening.js";
import initFetchAnimals from "./modules/fetch-animals.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimateScroll from "./modules/animate-scroll.js";

const smoothScroll = new SmoothScroll(
  "[data-anime='smooth'] a[href^='#']"
).init();

initAnimateScroll();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
).init();

const accordion = new Accordion("[data-anime='accordion'] dt").init();

initZoom();

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='container']"
).init();

initToolTip();
initDropdownMenu();
iniMenuMobile();
initOpening();
initFetchAnimals();
initFetchBitcoin();
