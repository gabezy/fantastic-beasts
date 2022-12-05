import SmoothScroll from "./modules/smooth-scroll.js";
import initTabNav from "./modules/tab-nav.js";
import initAccordionList from "./modules/accordion.js";
import initZoom from "./modules/zoom.js";
import initModal from "./modules/modal.js";
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
initTabNav();
initAccordionList();
initZoom();
initModal();
initToolTip();
initDropdownMenu();
iniMenuMobile();
initOpening();
initFetchAnimals();
initFetchBitcoin();
