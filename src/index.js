console.log('It works!');
import { includeHTML } from './components/includeHTML.js';
import { loadDynamicBannerText } from './components/banner.js';
import _ from './components/navbarTransition';
document.addEventListener('turbolinks:load', () => {
	includeHTML();
	loadDynamicBannerText();
});
