console.log('It works!');
import { includeHTML } from './components/includeHTML.js';
import { initUpdateNavbarOnScroll } from './components/navbarTransition.js';
import { loadDynamicBannerText } from './components/banner.js';
document.addEventListener('turbolinks:load', () => {
	initUpdateNavbarOnScroll();
	includeHTML();
	loadDynamicBannerText();
});
